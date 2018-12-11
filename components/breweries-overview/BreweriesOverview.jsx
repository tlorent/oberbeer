import React from 'react';
import PropTypes from 'prop-types';

import Brewery from '../brewery/Brewery';
import './breweries-overview.scss';

class BreweriesOverview extends React.Component {
  static propTypes = {
    breweries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        open: PropTypes.arrayOf(PropTypes.string).isRequired,
        zipcode: PropTypes.string.isRequired
      })
    ).isRequired
  };

  state = {
    isVisible: true
  };

  toggleBreweries = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible
    }));
  };

  render() {
    const { isVisible } = this.state;
    const { breweries, beersList } = this.props;
    return (
      <div className="breweries-overview">
        <button className="breweries-overview__button" onClick={this.toggleBreweries} type="button">
          Alle brouwerijen
        </button>
        {breweries.map(({
          address, city, id, img, name, open, zipcode
        }) => (
          <section
            className={`
              breweries-overview__section
              breweries-overview__section--${isVisible ? 'visible' : 'invisible'}
            `}
            key={id}
          >
            <Brewery
              address={address}
              city={city}
              daysOpen={open}
              img={img}
              name={name}
              zipcode={zipcode}
              beersList={beersList}
            />
          </section>
        ))}
      </div>
    );
  }
}

export default BreweriesOverview;
