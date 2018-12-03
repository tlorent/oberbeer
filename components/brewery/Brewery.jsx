import React from 'react';
import PropTypes from 'prop-types';

import '../brewery/brewery.scss';

const Brewery = ({
  address,
  city,
  daysOpen,
  img,
  name,
  zipcode
}) => (
  <div className="brewery">
    <div className="brewery__profile">
      <img 
        src={`${img}`} 
        alt="Logo Brouwerij de Molen"
        className="brewery__logo"
      />
      <div className="brewery__information-box">
        <p className="brewery__name">
          {`${name}`}
        </p>
        <p className="brewery__city">
          {`${city}`}
        </p>
      </div>
    </div>
    <div className="brewery__information">
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
  </div>
);

Brewery.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  daysOpen: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired
}

export default Brewery;