import React from 'react';
import BorderingCountryInfo from './BorderingCountryInfo';
import BorderingCountryListItem from './BorderingCountryListItem';
import FavouriteButton from './FavouriteButton';

const CountryDetail = ({country, addToFavourites, favCountrySelected, borderingCountries}) => {

const onClick = (event) => {
    console.log(event);
    addToFavourites({country});
    console.log(borderingCountries);
    }

    return(
<>
<p>{country.flag}The capital of {country.name.common} is {country.capital}</p>
<BorderingCountryInfo borderingCountries={borderingCountries}/>
  <FavouriteButton onClick={onClick} value={country} favCountrySelected={favCountrySelected}/> 
  </>
    )
  }
  


export default CountryDetail;