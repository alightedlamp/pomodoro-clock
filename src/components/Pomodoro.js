import React from 'react';

import Clock from './Clock';
import Ticker from './Ticker';
import Button from './Button';
// import Progress from './Progress';

class Pomodoro extends React.Component {
  render() {
    const length = this.props.length;
    const timeRemaining = this.props.timeRemaining;
    // const totalSegments = this.props.totalSegments;
    // const segmentsRemaining = this.props.segmentsRemaining;
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
      boxShadow: '1px 1px 0 red',
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
      boxShadow: '1px 1px 0 black',
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
      boxShadow: '1px 1px 0 black',
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
        <div className="clock-row">
          <Button
            text={lessTimeButtonText}
            style={lessTimeButtonStyle}
            action={subtractTime}
          />
          <div className="clock">
            <Clock
              timeRemaining={timeRemaining}
              length={length}
              timerOn={timerOn}
            />
          </div>
          <Button
            text={moreTimeButtonText}
            style={moreTimeButtonStyle}
            action={addTime}
          />
        </div>
        <div className="length">
          Length: {length}
        </div>
        <Ticker
          timeRemaining={timeRemaining}
          length={length}
          timerOn={timerOn}
        />
        {/*<Progress
          length={length}
          timeRemaining={timeRemaining}
          segmentsRemaining={segmentsRemaining}
          totalSegments={totalSegments}
        />*/}
        <div className="controls">
          <Button
            text="Reset"
            style={buttonStyle}
            action={reset}
          />
          <Button
            text={pauseButtonText}
            style={buttonStyle}
            action={toggleTimer}
          />
        </div>
      </div>
      )
  }
}

export default Pomodoro;