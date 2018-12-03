import React from 'react';
import PropTypes from 'prop-types';

import Brewery from '../brewery/Brewery';
import '../breweries-overview/breweries-overview.scss';

class BreweriesOverview extends React.Component {
  state = {
    isVisible: false
  }

  toggleBreweries = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible
    }));
  }

  render() {
    const { isVisible } = this.state;
    const { breweries } = this.props;
    return (
      <div className="breweries-overview">
        <button 
          className="breweries-overview__button"
          onClick={this.toggleBreweries}
          >
          Alle brouwerijen
        </button>
        {breweries.map(({
          address,
          city,
          id,
          img,
          name,
          open,
          zipcode
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
            />
          </section>
        ))}
    </div>
    );
  }
}

BreweriesOverview.propTypes = {
  breweries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      open: PropTypes.arrayOf(PropTypes.string).isRequired,
      zipcode: PropTypes.string.isRequired
    })
  )
}

export default BreweriesOverview;