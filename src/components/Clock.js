import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props) {
    }
    this.length = this.props.length;
    this.timerOn = this.props.timerOn;
    this.currentProgress = this.props.currentProgress;

    this.tick = this.tick.bind(this);
  }
  tick() {
    if (this.timerOn) {
      // countdown to zero from `length`
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