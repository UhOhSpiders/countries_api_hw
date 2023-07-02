import React from 'react';
import BorderingCountryListItem from './BorderingCountryListItem';

const BorderingCountryInfo = ({borderingCountries}) => {
  const borderingCountryListItem = borderingCountries.map((country, index) =>{ return <BorderingCountryListItem country={country} key={index}/>
})


if (borderingCountries.length >0){
  return(
<>
<h3>Bordering Countries Are</h3>
{borderingCountryListItem}
</>
)}
else{
  return(
<p> This country is an island!</p>
  )
}

}
export default BorderingCountryInfo;