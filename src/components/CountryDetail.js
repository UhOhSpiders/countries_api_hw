import React from 'react';
// import BorderingCountryInfo from './BorderingCountryInfo';
import BorderingCountryListItem from './BorderingCountryListItem';
import FavouriteButton from './FavouriteButton';

const CountryDetail = ({country, addToFavourites, favCountrySelected, borderingCountries}) => {

  // const hideButton = () => {
  //   return <p>Added!</p>
  // }
  
  const onClick = (event) => {
    console.log(event);
    addToFavourites({country});
    }
  

  const showBorderingCountries = borderingCountries.map((country, index) => {console.log(country)
    
    return <BorderingCountryListItem country={country} key={index}/>
     
  })

  if (favCountrySelected){
    return(
  <>
  <p>{country.flag}The capital of {country.name.common} is {country.capital}</p>
  <h3>Bordering Countries Are:</h3>
  <ul>
    {showBorderingCountries}
  </ul>
  <p>This is one of your favourite countries</p>
  </>)
  }else{
    return(
<>
<p>{country.flag}The capital of {country.name.common} is {country.capital}</p>
<h3>Bordering Countries Are:</h3>
<ul>
    {showBorderingCountries}
  </ul>
  <FavouriteButton onClick={onClick} value={country} favCountrySelected={favCountrySelected}/>
  {/* <button onClick={onClick} value={country}>Add Country To Favourites</button> */}
      
  </>
    )
  }
  
}

export default CountryDetail;