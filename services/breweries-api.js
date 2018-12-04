const api = 'https://my-json-server.typicode.com/tlorent/oberbeer';

export const getBreweries = () => fetch(`${api}/breweries`)
  .then((response) => response.json());

export const getBeers = () => fetch(`${api}/beers`)
  .then((response) => response.json());