import React from 'react';

class Button extends React.Component {
  render() {
    const text = this.props.text;
    const style = this.props.style;

    return(
      <button className="button" style={style}>{text}</button>
      )
  }
}

export default Button;