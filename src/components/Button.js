import React from 'react';
import Radium from 'radium';

class Button extends React.Component {
  render() {
    const text = this.props.text;
    const style = this.props.style;
    const action = this.props.action;

    return(
      <button className="button" style={style} onClick={() => action()}>{text}</button>
      )
  }
}

export default Radium(Button);