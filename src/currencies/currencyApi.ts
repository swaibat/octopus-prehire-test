import Router from '../api/config';

const server = {
  getCurrencies: () => Router.get('/currencies'),
  getCurrency: (currencyId: String) => Router.get(`/currency/${currencyId}`)
};

export default server;
