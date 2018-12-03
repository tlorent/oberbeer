// api-endpoint
const api = 'http://localhost:3001/breweries';

export const getBreweries = () => fetch(api)
  .then((response) => response.json());