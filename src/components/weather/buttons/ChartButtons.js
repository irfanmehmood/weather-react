import React from "react";

function ChartButtons(props) {

      return (
        <div className="btn-group" role="group" aria-label="Forecast">
            <button href="#"
            onClick={(e) => props.toggleComponentDispay_Callback('chart')} type="button" className={`btn btn-secondary ${props.DisplayToggleStatus === 'chart' ? 'active' : ''}`}>Temp</button>
            <button href="#" onClick={() => props.toggleComponentDispay_Callback('wind')} type="button" className={`btn btn-secondary ${props.DisplayToggleStatus === 'wind' ? 'active' : ''}`}>Wind</button>
        </div>
      );

}
export default ChartButtons;