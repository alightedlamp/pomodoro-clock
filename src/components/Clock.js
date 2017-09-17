import React from 'react';

class Clock extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.timerOn === true && this.props.length === this.props.timeRemaining) {
      this.props.decrement();
    }
  }

  render() {
    let time;
    if (this.props.timeRemaining === '00:00' && this.props.timerOn === false) {
      time = this.props.length;
    }
    else {
      time = this.props.timeRemaining;
    }
    return (
        <div>
          {time}
        </div>
      )
  }
}

export default Clock;