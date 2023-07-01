import React from 'react';

const WorldPopulation = ({countries}) => {
const populations = countries.reduce(function(total, country){
    return total + country.population
},0);
return <><p>World Population:  {populations}</p></>
}
export default WorldPopulation;