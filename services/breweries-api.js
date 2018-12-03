// api-endpoint
const api = 'https://my-json-server.typicode.com/tlorent/oberbeer/breweries';

export const getBreweries = () => fetch(api)
  .then((response) => response.json());