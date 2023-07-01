import React from 'react';
import './ListItem.css';

const ListItem = ({country, onCountryClicked}) => {

  const handleClick = () => {
    console.log(`click on ${country.name.common}`);
    onCountryClicked(country);
  }

  return <li onClick={handleClick}>{country.flag}{country.name.common}</li>
}

export default ListItem;