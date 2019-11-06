import React, { useContext } from "react";
import {WeatherContext} from '../lib/WeatherContext';
import FindCity from './search/FindCity';
import CityData from "./CityData";

function BodyContainer (props) {

    const {appState} = useContext(WeatherContext);

    let ComponentCityData = 
        (!appState.ShowCityFinder ? 
            <div className="CityData txtAnim">
                <CityData/>
            </div> 
        : false
    );

    let ComponentFindCity = 
        (appState.ShowCityFinder === true ? 
        <div className="FindCity">
            <FindCity/>
        </div> 
        : false
        );

    return (
        <>
            {ComponentCityData}
            {ComponentFindCity}
        </>
    )
}

export default BodyContainer;