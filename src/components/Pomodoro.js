import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';

class Pomodoro extends React.Component {
  render() {
    const currentTimer = this.props.currentTimer;
    const length = this.props.length;
    const timerOn = this.props.timerOn;
    const startTimer = this.props.startTimer;
    const decrement = this.props.decrement;

    const buttonText = this.timerOn ? 'Pause' : 'Start';
    const buttonStyle = {
      backgroundColor: 'tomato',
      width: '100%',
      padding: '20px',
      fontSize: '1.25em',
      border: '1px solid tomato',
      color: 'white',

      ':hover': {
        backgroundColor: 'white',
        'transition': '.2s',
        border: '1px solid tomato',
        color: 'red',
        boxShadow: '3px 3px 0 red'
      }
    }

    return(
      <div>
        <Clock currentTimer={currentTimer} length={length} timerOn={timerOn} decrement={decrement} />
        <Ticker currentTimer={currentTimer} length={length} timerOn={timerOn} />
        <Button text={buttonText} style={buttonStyle} action={startTimer} />
      </div>
      )
  }
}

export default Pomodoro;