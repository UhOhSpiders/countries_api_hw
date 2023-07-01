import React from 'react';

const FavouritesListItem = ({country}) => {
  return <li>{country.country.name.common}</li>
}

export default FavouritesListItem;