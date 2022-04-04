export interface Currency {
  code: String;
  country: String;
}
export interface Rate {
  code: String;
  country: String;
}

export interface CurrencyState {
  currencies: {
    data: Array<Currency> | null;
    loading: Boolean;
    error: string | undefined;
    filterCurrencies: Array<Currency> | null;
  };
  currency: {
    data: Array<Number> | null;
    loading: Boolean;
    error: string | undefined;
  };
}
