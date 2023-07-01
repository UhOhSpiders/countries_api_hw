import React from 'react';

const CountryOption = ({country,value}) => {

    return (<option value={value}>{country.name.common}</option>)
}

export default CountryOption;