import React from 'react';
import CountryOption from './CountryOption.js'

const CountrySelect = ({countries, onCountrySelect}) => {

    const countryOptions = countries.map((country, index) => {
        return <CountryOption country={country} key={index} value={index} onCountrySelect={onCountrySelect}/>
    })

    // this fuction takes event object as an argument and
    const onChange = (event) => {
      console.log(event.target.value)
      const index = event.target.value
      onCountrySelect(countries[index])
    }

  return(
  <>
  {/* the onChange listener catches an event object from the selection menu and triggers the onChange function*/}
  <select onChange={onChange}>{countryOptions}</select>
  </>
  )
}

export default CountrySelect;