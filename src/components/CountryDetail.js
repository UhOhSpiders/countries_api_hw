import React from 'react';
import BorderingCountryListItem from './BorderingCountryListItem';

const CountryDetail = ({country, addToFavourites, favCountrySelected, borderingCountries}) => {

  const onClick = (event) => {
    console.log(event);
    // console.log({country})
    addToFavourites({country});
  }

  const showBorderingCountries = borderingCountries.map((country, index) => {console.log(country) 
    return <BorderingCountryListItem country={country} key={index}/>
     
  })

  if (favCountrySelected){
    return(
  <>
  <h3>Bordering Countries Are:</h3>
  <p>{country.flag}The capital of {country.name.common} is {country.capital}</p>
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
  <button onClick={onClick} value={country}>Add Country To Favourites</button>
      
  </>
    )
  }
  
}

export default CountryDetail;