import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data/currencies.json';

const mock = new MockAdapter(axios, {
  delayResponse: 2000,
  onNoMatch: 'passthrough'
});

mock
  .onGet('/currencies')
  .reply(200, [...data.currencies])
  .onAny()
  .reply((config) => {
    console.log('config.data', config.url && config.url.split('/')[2]);
    return [
      201,
      require(`./data/${
        config.url && config.url.split('/')[2].toLowerCase()
      }.json`)
    ];
  });

export default axios;
