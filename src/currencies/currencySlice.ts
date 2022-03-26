import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./currencyApi";

export interface Currency {
  code: String,
  country: String,
}
export interface Rate {
  code: String,
  country: String,
}

export interface CurrencyState {
  currencies: {
    data: Array<Currency> | null;
    loading: Boolean;
    error: string | undefined;
    filterCurrencies: Array<Currency> | null;
  }
  currency: {
    data: Array<Number> | null,
    loading: Boolean;
    error: string | undefined;
  };
}

const initialState: CurrencyState = {
  currencies: {
    data: null,
    loading: false,
    error: "",
    filterCurrencies: null
  },
  currency: {
    data: null,
    loading: false,
    error: ""
  },
};

export const getCurrencies = createAsyncThunk("currency/all", async () => {
  const response = await api.getCurrencies();
  return response.data;
});

export const getCurrency = createAsyncThunk("currency/single", async (currencyId: any) => {
  const response = await api.getCurrency(currencyId);
  return response.data;
});


export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    filterCurrencies(state, actions) {
      console.log(JSON.parse(JSON.stringify(state.currencies.data)));
      const currencies = JSON.parse(JSON.stringify(state.currencies.data))
      const keyword = actions.payload
      console.log(keyword);

      if (keyword) {
        const results = currencies.filter((currency: any) => {
          return (
            currency.country.toLowerCase()?.match(keyword.toLowerCase()) ||
            currency.code.toLowerCase()?.match(keyword.toLowerCase())
          );
        });
        state.currencies = {
          ...state.currencies,
          filterCurrencies: results,
        };
      } else {
        state.currencies = {
          ...state.currencies,
          filterCurrencies: null,
        };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.currencies = {
          ...state.currencies,
          loading: true,
        };
      })
      .addCase(getCurrencies.fulfilled, (state, action: any) => {
        state.currencies = {
          ...state.currencies,
          loading: false,
          data: action.payload.sort((a: any, b: any) => a.country.localeCompare(b.country)),
        };
      })
      .addCase(getCurrencies.rejected, (state, action) => {
        state.currencies = {
          ...state.currencies,
          loading: false,
          error: action.error.code?.replaceAll('_', " ").toLowerCase()
        };
      })
      .addCase(getCurrency.pending, (state) => {
        state.currency = {
          data: null,
          loading: true,
          error: ""
        };
      })
      .addCase(getCurrency.fulfilled, (state, action: any) => {
        state.currency = {
          data: action.payload.rates,
          loading: false,
          error: ""
        };
      })
      .addCase(getCurrency.rejected, (state, action) => {
        state.currency = {
          data: null,
          loading: false,
          error: action.error.code?.replaceAll('_', " ").toLowerCase()
        };
      })
  }
});
export const { filterCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
