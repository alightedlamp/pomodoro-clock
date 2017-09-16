import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.length = this.props.length;
    this.timerOn = this.props.timerOn;
    this.currentTimer = this.props.currentTimer;

    this.decrement = this.decrement.bind(this);
  }

  decrement() {
    console.log('starting clock')
    while (this.props.timerOn && this.currentTimer.timeRemaining > 0) {
      setInterval(() => {
        let timeRemaining = this.currentTimer.timeRemaining;
        let segment = this.currentTimer.segment;

        let min = this.currentTimer.timeRemaining.split(':')[0];
        let sec = this.currentTimer.timeRemaining.split(':')[1];

        if (sec > 0) sec--;
        else if (sec === 0) sec = 59;

        if (min > 0) min--;
        if (min === 0 && sec === 0) {
          // decrement segment and reset timer
        }

        let newSegment = 0;
        let currentTimer = {
          timeRemaining: `${min}:${sec}`,
          segment: newSegment
        }
        this.setState({
          currentTimer
        });
      }, 1000)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('start timer button clicked')
    if (this.props.timerOn === true) {
      this.decrement();
    }
  }

  render() {
    return(
      <div className="clock">
        {this.props.length}
      </div>
      )
  }
}

export default Clock;