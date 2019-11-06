import React from "react";
class SunRiseSet extends React.Component {
    render() {
    
        const sunRiseDt = new Date(this.props.weatherData.sys.sunrise);
            //sunRiseDt.setSeconds(sunRiseDt.getSeconds() + weatherData.timezone);
            let sunRiseDtString = (sunRiseDt.getUTCHours() < 10 ? '0' + sunRiseDt.getUTCHours() : sunRiseDt.getUTCHours()) + ':';
            sunRiseDtString += sunRiseDt.getUTCMinutes() < 10 ? '0' + sunRiseDt.getUTCMinutes() : sunRiseDt.getUTCMinutes();



            const sunSetDt = new Date(this.props.weatherData.sys.sunset);
            //sunSetDt.setSeconds(sunSetDt.getSeconds() + weatherData.timezone);
            let sunSetDtString = (sunSetDt.getUTCHours() < 10 ? '0' + sunSetDt.getUTCHours() : sunSetDt.getUTCHours()) + ':';
            sunSetDtString += sunSetDt.getUTCMinutes() < 10 ? '0' + sunSetDt.getUTCMinutes() : sunSetDt.getUTCMinutes();

      return (
        <>
            <div className="row">
                <div className="col-sm sunSetRise">
                    <img title="Sunrise" alt="Sunrise" src="http://openweathermap.org/img/wn/01d.png" className="img-responsive"  />
                </div>
                <div className="col-sm sunSetRiseTemps">
                    {sunRiseDtString}
                </div>
            </div>
            <div className="row">
                <div className="col-sm sunSetRise">
                    <img title="Sunset" alt="Sunset" src="http://openweathermap.org/img/wn/01n.png" className="img-responsive"  />
                </div>
                <div className="col-sm sunSetRiseTemps">
                    {sunSetDtString}
                </div>
            </div>
            <div className="row">
                <div className="col-sm ">
                <i className="fa fa-2x fa-thermometer-three-quarters"></i>
                </div>
                <div className="col-sm ">
                26
                </div>
            </div>
            <div className="row">
                <div className="col-sm ">
                <i className="fa fa-2x fa-thermometer-three-quarters"></i>
                </div>
                <div className="col-sm ">
                    24
                </div>
            </div>


            
        </>
      )
    }
}

export default SunRiseSet;
