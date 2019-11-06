import React from "react";
import Icon from "../assets/Icon";

function ForecastTemperaturesColumns(props) {

      return (
        <>
            <div className={`col txtAnim five-day-single ${props.selected === true ? 'active' : ""}`} >
                <p className="txtAnim weekday">{props.dateString}</p>
                <Icon icon={props.icon} title={props.title} sizeSmall={false} />
                <p className='min-max'><span className='max-temp'>{props.maxTemp}&deg;</span> <span className='min-temp'>{props.minTemp}&deg;</span></p>
            </div>                          
        </>
      )
}

export default ForecastTemperaturesColumns;