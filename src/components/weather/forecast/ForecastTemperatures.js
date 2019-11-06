import React, { useContext } from "react";
import { WeatherContext } from '../../lib/WeatherContext';
import ForecastTemperaturesColumns from "./ForecastTemperaturesColumns";

function ForecastTemperatures() {

      //console.log(forecastData.list);

      const {appState} = useContext(WeatherContext);
      const forecastData = appState.WeatherData[1];

      let minMaxDailyArray = [];

      /** We store first highest temp as benchmark value to be used for comparing  */
      let benchmarkyDayMax = forecastData.list[0].main.temp_max;
      let benchmarkyDayMin = forecastData.list[0].main.temp_min;
      let datePart = forecastData.list[0].dt_txt.substr(0, 10);
      let dateFromPart = new Date(datePart);
      let weekdayName = weekday[dateFromPart.getDay()].substr(0, 3);
      let icon = forecastData.list[0].weather[0].icon;
      let description = forecastData.list[0].weather[0].icon;
      

      minMaxDailyArray.push(
        {
        'max' : benchmarkyDayMax, 
        'min' : benchmarkyDayMin, 
        'date' : datePart, 
        'weekday' : weekdayName,
        'icon' : icon,
        'description' : description
        }
      );


      for (let i = 0; i < forecastData.list.length; i++) {

        let item = forecastData.list[i];
        let datePart = item.dt_txt.substr(0, 10);
        let dateFromPart = new Date(datePart);

        let storedDateDataRowIndex = doesDateExistsInArrayThenGiveObject(minMaxDailyArray, datePart);

        if( storedDateDataRowIndex === false ) {
          /** This date is not in the arra we add it, with current day max */

          let dataRow = {
            'max' : item.main.temp_max, 
            'min' : item.main.temp_min, 
            'date' : datePart, 
            'weekday' :  weekday[dateFromPart.getDay()].substr(0, 3),
            'icon' : item.weather[0].icon,
            'title' : item.weather[0].description
          }
          minMaxDailyArray.push(dataRow);                                             
        } else {
          /** Date Exist, Update min and max temperatures based on what is stored for current day and what we are looping  */
         
          let storedItem = minMaxDailyArray[storedDateDataRowIndex];
          let icon = storedItem.icon;
          let description = storedItem.description;

          if (datePart + ' 09:00:00' === item.dt_txt) {
            icon = item.weather[0].icon;
            description = item.weather[0].description; 
          }

          let dataRow = {
            'max' : storedItem.max > item.main.temp_max ? storedItem.max : item.main.temp_max, 
            'min' : storedItem.min < item.main.temp_min ? storedItem.min : item.main.temp_min, 
            'date' : storedItem.date, 
            'weekday' :  storedItem.weekday,
            'icon' : icon,
            'title' : description
          }

          minMaxDailyArray[storedDateDataRowIndex] = dataRow;
        }
      
      }

      //console.log(minMaxDailyArray);

      /** We need only 5 Days data not 6 */
      if (minMaxDailyArray.length > 5){
          minMaxDailyArray.pop();
      }

      const TemperatureColumns = minMaxDailyArray.map((item, index) =>
        <ForecastTemperaturesColumns 
          key={index} 
          selected={index === 0 ? true : false}
          dateString={item.weekday} 
          icon={item.icon} 
          title={item.title} 
          maxTemp={Math.round(item.max + (-273.15))}
          /** We have the (index) which is always the same  */
          minTemp={Math.round(item.min + (-273.15))} />
      );

      return (
        <>
            <div className='row five-day-single-con dailyTempsCont'>
              {TemperatureColumns}
            </div>                            
        </>
      )
}

export default ForecastTemperatures;

function doesDateExistsInArrayThenGiveObject(Arr, dateString) {
   for (let i = 0; i < Arr.length; i++) {
        let item = Arr[i];
        if (item.date === dateString) {
          return i;
        }       
   }
   return false;
}

var weekday = [];
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";