import React from 'react';

class Clock extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.timerOn === true && this.props.length === this.props.currentTimer.timeRemaining) {
      this.props.decrement();
    }
  }

  render() {
    return(
      <div className="clock">
        {this.props.currentTimer.timeRemaining}
      </div>
      )
  }
}

export default Clock;