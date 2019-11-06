import React from "react";
class ExtraInfo extends React.Component {
    render() {
      return (
            <>
                <p>Humidity: {this.props.weatherData.main.humidity}%</p>
                                        <p>Visibility: {this.props.weatherData.visibility / 1000} miles</p>
                                        <p>Presseure: {this.props.weatherData.main.pressure} hpa</p>
                                            
            </>

      );
    }
}

export default ExtraInfo;