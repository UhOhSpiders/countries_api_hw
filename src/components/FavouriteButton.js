import React from 'react';

const FavouriteButton = ({onClick, country, favCountrySelected}) => {
    if(!favCountrySelected){
        return <button onClick={onClick} value={country}>Add Country To Favourites</button>
}else{
    return <button>Added!</button>
}
}
export default FavouriteButton;