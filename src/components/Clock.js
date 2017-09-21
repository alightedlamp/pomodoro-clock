import React from 'react';

class Clock extends React.Component {
  render() {
    let time = (this.props.timeRemaining === '00:00' && this.props.timerOn === false)
      ? this.props.length
      : this.props.timeRemaining;

    return (
      <div>
        {time}
      </div>
    )
  }
}

export default Clock;