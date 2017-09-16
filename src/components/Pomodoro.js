import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.currentTimer = this.props.currentTimer;
    this.length = this.props.length;
    this.timerOn = this.props.timerOn;
    this.startTimer = this.props.startTimer;
  }

  render() {
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
        <Clock currentTimer={this.currentTimer} length={this.length} timerOn={this.timerOn}/>
        <Ticker currentTimer={this.currentTimer} length={this.length}  timerOn={this.timerOn}/>
        <Button text={buttonText} style={buttonStyle} action={this.startTimer} />
      </div>
      )
  }
}

export default Pomodoro;