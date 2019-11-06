import React, { useContext } from "react";
import {WeatherContext} from '../../lib/WeatherContext';

import ForecastWindColumns from "./ForecastWindColumns";
function ForecastWind(props) {

      const {appState} = useContext(WeatherContext);
      const forecastData = appState.WeatherData[1];

      let windArray = [];

      for (let i = 0; i < props.loopLength; i++) {

        let item = forecastData.list[i];
        item.wind.timeString = item.dt_txt.substr(11, 5);
        windArray.push(item.wind);
      } 
      
      const WindColumns = windArray.map((item, index) =>
        <ForecastWindColumns item={item} key={index}/>
      );

      return (
        <div className='row five-day-single-con'>
          {WindColumns}
        </div>
      );
}

export default ForecastWind;