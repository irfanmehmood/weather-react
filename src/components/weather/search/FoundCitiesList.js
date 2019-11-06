import React, { useContext } from "react";
import {WeatherContext} from '../../lib/WeatherContext';

function FoundCitiesList(props) {

        const {dispatch} = useContext(WeatherContext);

        var citiesList = '';

        if (props.FoundCities !== null) {
            citiesList =  props.FoundCities.map((city) =>
                <li
                    onClick={ 
                        () => dispatch({ 
                            type: 'setSelectedCityID', 
                            payload: {
                                'cityId' : city.id, 
                                'AddCityNameToCookieList': true 
                            }
                        })
                    }
                    key={city.id} 
                    className="list-group-item d-flex justify-content-between align-items-center">{city.name}
                    <span className="badge badge-primary badge-pill">{city.country}</span>
                </li>
            );
        }
        
        return (
            <>
                <ul className="list-group">
                    {citiesList}
                </ul>
            </>
        );
  }

export default FoundCitiesList;