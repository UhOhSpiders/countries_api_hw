import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import WorldPopulation from '../components/WorldPopulation';
import './CountriesContainer.css';
import CountrySelect from '../components/CountrySelect';
import FavouritesList from '../components/FavouritesList';
// import BorderingCountryInfo from '../components/BorderingCountryInfo';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [favCountries, setFavCountries] = useState([]);
    const [borderingCountries, setBorderingCountres] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [favCountrySelected, setFavCountrySelected] = useState(false);

    // this triggers the getCountries as soon as it loads as it has been given an empty array as its dependency
    useEffect(() => {
      getCountries();
    //   getCountriesWithBorders();
    }, [])
    
    // useEffect(() => {
    //   checkForDuplicates();
    // },[favCountries])

   const getCountries = function(){
        // this fetch function gives us a promise which can be processed when it gets returned
        fetch('https://restcountries.com/v3.1/all')
        // it THEN gets the results and converts it to a JSON object using the .json method.
        // it returns another promise which can then get passed to the final setCountries state function
        // once it is proccessed
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const checkForDuplicates = (country) => {
            for (let i = 0; i < favCountries.length; i++){
                let current_country = favCountries[i];
                if (country === current_country.country){
                    setFavCountrySelected(true);
                    return true;
                }
            }
            setFavCountrySelected(false);
            return false;
        }

    const addToFavourites = (country) => {
            setFavCountrySelected(true);
            setFavCountries([...favCountries, country])
    }

const getBorderingCountries = (selectedCountry) => {
    const cca = selectedCountry.cca3
    console.log(cca)
      const countriesWithBorders = []
      const selectedBorderingCountries = []
      for (let i=0; i < countries.length; i++){
        let currentCountry = countries[i];
        if (currentCountry.hasOwnProperty('borders')){
            countriesWithBorders.push(currentCountry)
        }
      }
      for (let i=0; i < countriesWithBorders.length; i++){
        let currentCountry = countriesWithBorders[i];
        if (currentCountry.borders.includes(cca)){
            selectedBorderingCountries.push(currentCountry.name.common)
        }
      }
    //   console.log(selectedBorderingCountries)
      setBorderingCountres([...selectedBorderingCountries])
    }
    
    const onCountrySelect = (country) => {
        checkForDuplicates(country);
        setSelectedCountry(country);
        getBorderingCountries(country);
        
    }

    return (
        <div className="main-container">
            
            <CountrySelect countries={countries} onCountrySelect={onCountrySelect}></CountrySelect>
            
            {selectedCountry ? <CountryDetail borderingCountries={borderingCountries} addToFavourites={addToFavourites} country={selectedCountry} favCountrySelected={favCountrySelected}/> : null}
            
            <WorldPopulation countries={countries}/>
            <FavouritesList favCountries={favCountries}></FavouritesList>
        </div>
            
    )
}

export default CountryContainer;
