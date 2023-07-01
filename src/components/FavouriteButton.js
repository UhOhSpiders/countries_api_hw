import React from 'react';

const FavouriteButton = ({onClick, country, favCountrySelected}) => {
    if(!favCountrySelected){
        return <button onClick={onClick} value={country}>Add Country To Favourites</button>
}else{
    return <p>Added!</p>
}
}
export default FavouriteButton;