import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FoundCitiesList from './FoundCitiesList';


function FindCity(props) {

    const [InputValue, setInputValue] = useState('');
    const [FoundCities, setFoundCities] = useState(null);

    /** Fires either prop or state is changed */
    useEffect(() => {
        if (InputValue.length > 3) {
            axios.get(`http://digitalcook.co.uk:3000/api/city/find/${InputValue}`)
            .then(result => {
                setFoundCities(result.data);
            });
        }
        return () => {
            /** 
             * CLean up method
             * without this I was getting console error about, component has been de-mounted
             */
        };
    },[InputValue]);
    
    return (
        <form className="search-city" autoComplete="off">
        <label><h3 className='AddCity'>Add City</h3></label>
        <input 
            type="text" 
            name="name"  
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your city name"/>
        <FoundCitiesList 
            FoundCities={FoundCities} />
        </form>
    );

}

export default FindCity;