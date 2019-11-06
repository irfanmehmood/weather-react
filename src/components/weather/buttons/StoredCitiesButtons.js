import React, { useContext } from "react";
import { WeatherContext } from '../../lib/WeatherContext';

function CitiesButtons(props) {

  const {appState, dispatch} = useContext(WeatherContext);
  const Buttons = appState.StoredCities.map((city) => 
    <button 
      key={city.id} 
      title={city.name}
      className={`txtAnim tablinks ${appState.SelectedCityID === city.id ? 'active' : ""}`}
      onClick={ 
          () => dispatch({ 
            type: 'setSelectedCityID', 
            payload: {
              'cityId' : city.id, 
              'AddCityNameToCookieList': false 
            }
          })
        }
        >{ city.name.substring(0, 10) }
      </button>
  );

  const AddDisabled = appState.StoredCities.length === 5 ? 'Disabled' : '';
  const removeDisabled = (appState.StoredCities.length === 1 || props.IsCityFinderComponentLoaded === true )? 'Disabled' : '';

  return (
    <>
            {Buttons}
            <button disabled={AddDisabled} className="tablinks addLocation" onClick={() => dispatch({type: 'showCityFinder'})}><i className="fa fa-plus"></i></button>
            <button disabled={removeDisabled} className="tablinks addLocation" onClick={() => dispatch({type: 'removeCityFromList'})}><i className="fa fa-minus"></i></button>                 
    </>
  );
}

export default CitiesButtons;