import React from 'react';
import PropTypes from 'prop-types';

import '../brewery/brewery.scss';

class Brewery extends React.Component {
  state = {
    isDetailVisible: false
  }

  handleToggle = () => {
    this.setState(({ isDetailVisible }) => ({
      isDetailVisible: !isDetailVisible
    }));
  }

  render() {
    const { isDetailVisible } = this.state;
    const {
      address,
      city,
      daysOpen,
      img,
      name,
      zipcode
    } = this.props;
    return (
      <div className="brewery">
        <div className="brewery__profile">
          <img 
            src={`${img}`} 
            alt="Logo Brouwerij de Molen"
            className="brewery__logo"
          />
          <div className="brewery__profile-box">
            <p className="brewery__name">
              {`${name}`}
            </p>
            <p className="brewery__city">
              {`${city}`}
            </p>
          </div>
        </div>
        {isDetailVisible && (
          <div className="brewery__details-box">
          <p className="brewery__details-text">
            Meer informatie over deze 🍺 brouwerij
          </p>
        </div>
        )}
        <div className={`
          brewery__information
          brewery__information--${isDetailVisible ? 'expanded' : 'normal'}
        `}
        >
          <div 
            className="
              brewery__information-box
              brewery__information-box--address
          ">
            <p className="brewery__address-title">
              Adres
            </p>
            <p className="brewery__address">
              {`${address}`}
            </p>
          </div>  
          <div 
            className="
              brewery__information-box
              brewery__information-box--postcode
          ">
            <p className="brewery__postcode-title">
              Postcode
            </p>
            <p className="brewery__postcode">
              {`${zipcode}`}
            </p>
          </div>  
          <div 
            className="
              brewery__information-box
              brewery__information-box--opening
          ">
            <p className="brewery__opening-title">
              Open
            </p>
            {daysOpen.map((day, index) => (
              <p 
                className="brewery__opening"
                key={index}
              >
                {/* No comma for the final item in the array */}
                {(index ? `, ` : ` `) + `${day[0]}${day[1]}${day[2]}`}
              </p>
            ))}
          </div>
        </div>
        <div
          className={`
            brewery__arrow-down
            brewery__arrow-down--${isDetailVisible ? 'rotated' : 'normal'}
          `}
          role="button"
          tabIndex="0"
          onKeyPress={this.handleToggle}
          onClick={this.handleToggle}
        >
          <img
            alt="arrow pointing down"
            src="static/icons/arrow-down-2.svg"
          />
        </div>
      </div>
    )
  }
}

Brewery.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  daysOpen: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired
}

export default Brewery;