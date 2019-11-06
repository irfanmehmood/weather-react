import React from "react";

class Icon extends React.Component {
  
    render() {
      const size = (this.props.sizeSmall === true ? '' : '@2x')
      return <img className={`icon ${this.props.extraClassName}`} alt={this.props.title} title={this.props.title} src={`http://openweathermap.org/img/wn/${this.props.icon}${size}.png`}/>;
    }
}

export default Icon;