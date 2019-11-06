import React, { useContext, useState} from "react";
import {WeatherContext} from '../../lib/WeatherContext';
import ForecastTemperatures from "./ForecastTemperatures";
import ForecastChart from "./ForecastChart";
import ForecastWind from "./ForecastWind";
import Place from "../todays/Place";
import ChartButtons from "../buttons/ChartButtons";

function ForecastParent(props) {

        const {appState} = useContext(WeatherContext);
        const weatherData = appState.WeatherData[0];
        
        const [DisplayToggleStatus, setDisplayToggleStatus] = useState('chart');
        let showThisComponent;

        function toggleComponentDispay_Callback(text) {
            setDisplayToggleStatus(text);
        }

        switch(DisplayToggleStatus) {
            case 'chart':
                showThisComponent = <ForecastChart loopLength={5}/>
            break;
            case 'wind':
                showThisComponent = <ForecastWind  loopLength={5} />
            break;
            default:
                showThisComponent = <ForecastChart loopLength={5}/>
            break;
        }

        return (
            <>
                <div className="row">
                    <div className="col top-lft-col">
                        <Place />
                    </div>
                    <div className="col top-rgt-col">
                            <div className="col text-left">
                                <p className='todayDetails'>Humidity: {weatherData.main.humidity}%</p>
                                <p className='todayDetails'>Wind: {weatherData.wind.speed}mph</p>
                                <ChartButtons DisplayToggleStatus={DisplayToggleStatus} toggleComponentDispay_Callback={toggleComponentDispay_Callback} />
                            </div>
                    </div>
                </div>
                {showThisComponent}
                <ForecastTemperatures />
            </>
        );
}
export default ForecastParent;