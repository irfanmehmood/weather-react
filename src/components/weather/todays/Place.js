import React, { useContext } from "react";
import {WeatherContext} from '../../lib/WeatherContext';
import Icon from "../assets/Icon"

function Place() {

  const {appState} = useContext(WeatherContext);
  const weatherData = appState.WeatherData[0];

      const t = new Date();
      t.setSeconds(t.getSeconds() + weatherData.timezone);
      let countryLocalDayString = weekday[t.getUTCDay()];
      let countryLocalTimeHour =  t.getUTCHours() < 10 ? '0' + t.getUTCHours() : + t.getUTCHours();
      let countryLocalTimeMinutes =  t.getUTCMinutes() < 10 ? '0' + t.getUTCMinutes() : + t.getUTCMinutes() 
      
      
      return (
        <>
          <div className="place txtAnim">
            <h2 key="12">{countryLocalDayString}, {countryLocalTimeHour}:{countryLocalTimeMinutes}</h2> 
            <h3 key="14">{weatherData.weather[0].main}</h3>
          </div>
          <div className="clearfix temperature txtAnim">
          <Icon 
                icon={weatherData.weather[0].icon} 
                sizeSmall={false} 
                title={weatherData.weather[0].description} extraClassName={'float-left'}
              />
            <h2>{Math.round(weatherData.main.temp + (-273.15))}&deg;</h2>
          </div>
        </>
      );

}

export default Place;

var weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";