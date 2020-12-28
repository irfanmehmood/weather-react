import React, {useEffect, useReducer } from 'react';
import Reducer from '../lib/Reducer';
import axios from 'axios';
import BodyContainer from "./BodyContainer";
import StoredCitiesButtons from "./buttons/StoredCitiesButtons";
import {WeatherContext} from '../lib/WeatherContext';

function WeatherWidget(props) {


  const [appState, dispatch] = useReducer(Reducer.reducer, Reducer.initialState);

  useEffect(() => {     
      getDataFromApi(appState.SelectedCityID);
  },[appState.SelectedCityID, appState.setAjaxLoading]);

  function getDataFromApi(cityID) {
    
    dispatch({type: 'setAjaxLoading', payload: true});

    axios.get(`https://api.weather.digitalcook.co.uk/api/city/weather/${cityID}`)
      .then(result => {
        dispatch({
            type: 'setWeatherData', 
            payload: { 
              data: result.data,
              city: { id: result.data[0].id, name: result.data[0].name}
            }
        });
    });
  };

  let BodyComponent;

  if (appState.AjaxLoading === false) {
    BodyComponent = <BodyContainer />
  } else {
    BodyComponent = <p className='todayDetails'>Loading .....</p>;
  }
  
  return ( 
    <WeatherContext.Provider value={{appState, dispatch}}>
      <>
          <div className="container widgetCont">
            <div className="tab">
              <StoredCitiesButtons />
            </div>
            {BodyComponent}
          </div> 
      </>
    </WeatherContext.Provider>
  );
}

export default WeatherWidget;
