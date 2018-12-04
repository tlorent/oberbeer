import React from 'react';

import Brewery from '../brewery/Brewery';
import { getBreweries, getBeers } from '../../services/breweries-api';
import '../search/search.scss';

class Search extends React.Component {
  state = {
    userZip: '',
    breweriesZip: [],
    breweries: [],
    beers: [],
    beersMatch: [],
    matchedBrewery: [],
    formValidity: true,
    isBreweryVisible: true
  }

  componentDidMount() {
    getBreweries().then((breweriesList) => {
      const tempBreweryZips = []

      // push the zipcode of each brewery to the empty array
      // which can then be used to set the breweriesZip state
      // property, necessary for finding the matching brewery.
      breweriesList.forEach((brewery) => {
        tempBreweryZips.push(brewery.zipcode.substring(0,4))
      })

      this.setState(({ breweries, breweriesZip }) => ({
        breweries: breweriesList,
        breweriesZip: tempBreweryZips
      }));
    });

    getBeers().then((beersList) => {
      this.setState(({ beers }) => ({
        beers: beersList
      }));
    });
  }

  findBrewery = (zip, array) => {
    // loop through the array of zipcodes
    // save the zipcode that matches the user's input
    let match = array.reduce((accumulator, curr) => 
      Math.abs(curr - zip) < Math.abs(accumulator - zip) ? curr : accumulator)

    const { breweries, beers } = this.state;

    // first find the matching brewery
    const brewery = breweries.find(brewery => 
      brewery.zipcode.substring(0,4) === match)

    // then create a new array with just the matched brewery so you can
    // loop over it and set it in the state.
    const result = breweries.filter((item) => 
      item.address === brewery.address
    )

    // also find the corresponding beers for a brewery
    const matchingBeers = beers.filter((beer) => beer.brewery === brewery.name)
    
    this.setState(({ matchedBrewery, beersMatch }) => ({
      matchedBrewery: result,
      beersMatch: matchingBeers
    }))
  };

  handleChange = ({ target }) => {
    this.setState({ userZip: target.value.substring(0,4) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
     
    const { userZip, breweriesZip } = this.state;

    if (userZip.length === 0 || userZip.length === undefined) {
      this.setState(({ formValidity }) => ({ 
        formValidity: !formValidity
      })) 
    } else {
      this.setState(({ formValidity }) => ({ 
        formValidity: true
      }))

      this.findBrewery(userZip, breweriesZip);
    }
  }

  render() {
    const { formValidity, isBreweryVisible } = this.state;
    return(
      <React.Fragment>
        <div className="search">
          <h2 className="search__title">
            🍻 Bier drinken! 🍻
          </h2>
          <h3 className="search__subtitle">
            Vind een brouwerij bij jou in de buurt
          </h3>
          <form 
            className="search__form"
            onSubmit={this.handleSubmit}
          >
            <input 
              className={`
                search__input
                search__input--${formValidity ? 'valid' : 'invalid'}
              `}
              maxLength="7"
              minLength="6"
              placeholder="Type een postcode, b.v. 1088 AX"
              title="Voer a.u.b. een geldige postcode in."
              type="text"
              onChange={this.handleChange}
              pattern="[0-9]{4}[ -][A-Za-z]{2}|[0-9]{4}[A-Za-z]{2}"
            />
          </form>
          <p className="search__text">
            Na een dag hard werken heb je dat speciaal gebrouwen biertje wel verdiend! 
            Maar geen idee naar welke brouwerij je wilt? Of sta je open voor een verrassing? 
            Typ een postcode in en Oberbeer geeft je advies. Geniet van je bier!
          </p>
          {isBreweryVisible && this.state.matchedBrewery.map(({
            address,
            city,
            id,
            img,
            name,
            open,
            zipcode
          }) => (
            <div key={id}>
              <Brewery
              address={address}
              city={city}
              img={img}
              name={name}
              zipcode={zipcode}
              daysOpen={open}
              beers={this.state.beersMatch}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default Search;