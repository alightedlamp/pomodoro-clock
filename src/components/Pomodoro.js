import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';

class Pomodoro extends React.Component {
  render() {
    const timeRemaining = this.props.timeRemaining;
    const length = this.props.length;
    const timerOn = this.props.timerOn;
    const toggleTimer = this.props.toggleTimer;
    const addTime = this.props.addTime;
    const subtractTime = this.props.subtractTime;
    const reset = this.props.reset;

    const lessTimeButtonText = '-';
    const moreTimeButtonText = '+';
    const pauseButtonText = timerOn ? 'Pause' : 'Start';

    const buttonStyle = {
      backgroundColor: 'tomato',
      width: '50%',
      padding: '20px',
      fontSize: '1.25em',
      border: '1px solid tomato',
      color: 'white',

      ':hover': {
        backgroundColor: 'white',
        border: '1px solid tomato',
        boxShadow: '3px 3px 0 red',
        textShadow: '2px 2px #eee',
        color: 'red',
        'transition': '.2s'
      }
    }
    const lessTimeButtonStyle = {
      backgroundColor: '#eee',
      border: '1px solid #eee',
      width: '50px',

      ':hover': {
        backgroundColor: 'white',
        boxShadow: '3px 3px 0 black',
        textShadow: '2px 2px #eee',
        border: '1px solid black',
        transition: '.2s'
      }
    }
    const moreTimeButtonStyle = {
      backgroundColor: '#eee',
      border: '1px solid #eee',
      width: '50px',

      ':hover': {
        backgroundColor: 'white',
        boxShadow: '2px 2px 0 black',
        textShadow: '3px 3px #eee',
        border: '1px solid black',
        transition: '.2s'
      }
    }

    // This should be in state, I think
    if (timerOn) {
      lessTimeButtonStyle.disabled = 'disabled';
      moreTimeButtonStyle.disabled = 'disabled';
    }

    return(
      <div>
        <div className="clock">
          <Button
            text={lessTimeButtonText}
            style={lessTimeButtonStyle}
            action={subtractTime}
          />
          <Clock
            timeRemaining={timeRemaining}
            length={length}
            timerOn={timerOn}
          />
          <Button
            text={moreTimeButtonText}
            style={moreTimeButtonStyle}
            action={addTime}
          />
        </div>
        <Ticker
          timeRemaining={timeRemaining}
          length={length}
          timerOn={timerOn}
        />
        <div className="controls">
          <Button
            text={pauseButtonText}
            style={buttonStyle}
            action={toggleTimer}
          />
          <Button
            text="Reset"
            style={buttonStyle}
            action={reset}
          />
        </div>
      </div>
      )
  }
}

export default Pomodoro;