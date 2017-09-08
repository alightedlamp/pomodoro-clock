import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';

class Pomodoro extends React.Component {
  render() {
    const currentProgress = this.props.currentProgress;
    const length = this.props.length;
    const timerOn = this.props.timerOn;

    const buttonText = timerOn ? 'Pause' : 'Start';
    const buttonStyle = {
      backgroundColor: 'white',
      width: '100%',
      padding: '20px',
      fontSize: '1.25em',
      border: '1px solid black'
    }

    return(
      <div>
        <Clock currentProgress={currentProgress} length={length} />
        <Ticker currentProgress={currentProgress} length={length} />
        <Button text={buttonText} style={buttonStyle} />
      </div>
      )
  }
}

export default Pomodoro;