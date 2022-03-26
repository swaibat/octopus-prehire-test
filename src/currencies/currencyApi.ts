import axios from "../api/config";

const server = {
  getCurrencies: () => axios.get("/currencies"),
  getCurrency: (currencyId:String) => axios.get(`/currency/${currencyId}`),
};

export default server;
