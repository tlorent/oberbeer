const api = 'https://my-json-server.typicode.com/tlorent/oberbeer';

export const getBreweries = () => fetch(`${api}/breweries`).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw Error(response.statusText);
});

export const getBeers = () => fetch(`${api}/beers`).then((response) => {
  if (response.ok) {
    return response.json();
  }
  throw Error(response.statusText);
});
