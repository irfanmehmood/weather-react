import React from "react";

function ForecastWindColumns(props)
{
      const styleArrowDegree = {
          transform:'rotate(' + props.item.deg + 'deg)'
      };
      return <div className="col txtAnim five-day-single">
        <p className='windSpeed'>{Math.round(props.item.speed * 1.60934)}<span className="supb">kmh</span></p>
        <p className='windIcon'><i className="fa fa-3x fa-arrow-circle-o-up" style={styleArrowDegree}></i></p>
        <p className='windTime'>{props.item.timeString}</p>
      </div>;
}

export default ForecastWindColumns;