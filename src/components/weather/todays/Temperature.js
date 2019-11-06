import React from "react";

function Temperature(props) {
      return (
        <>
            <div className="row">
              <div className="col temperature">
              
              </div>
              <div className="col min-max-temp">
                  <h4 className="temp-max txtAnim">
                    {Math.round(props.weatherData.main.temp_max + (-273.15))}&deg;
                  </h4>
                  <h4 className="temp-min txtAnim">
                    {Math.round(props.weatherData.main.temp_min + (-273.15))}&deg;
                  </h4>
              </div>
            </div>
        </>
      )
}

export default Temperature;