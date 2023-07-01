import React from 'react';
import FavouritesListItem from './FavouritesListItem';

const FavouritesList = ({favCountries}) => {
  const favCountryListItems = favCountries.map((country, index) => {
    return <FavouritesListItem country={country} key={index}/>
  })
  return (
    <>
    <h2>Favourites List</h2>
    <ul>
      {favCountryListItems}
    </ul>
    
    </>
  )
}

export default FavouritesList;