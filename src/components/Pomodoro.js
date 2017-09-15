import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.currentProgress = this.props.currentProgress;
    this.length = this.props.length;
    this.timerOn = this.props.timerOn;

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.setState({
      currentProgress.time: length,
      timerOn: true
    });
  }

  render() {
    const buttonText = timerOn ? 'Pause' : 'Start';
    const buttonStyle = {
      backgroundColor: 'white',
      width: '100%',
      padding: '20px',
      fontSize: '1.25em',
      border: '1px solid black',

      ':hover': {
        backgroundColor: 'tomato',
        'transition': '.2s'
      }
    }

    return(
      <div>
        <Clock currentProgress={this.currentProgress} length={this.length} timerOn={this.timerOn}/>
        <Ticker currentProgress={this.currentProgress} length={this.length}  timerOn={this.timerOn}/>
        <Button text={buttonText} style={buttonStyle} action={this.startTimer}/>
      </div>
      )
  }
}

export default Pomodoro;