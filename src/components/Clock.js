import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.length = this.props.length;
    this.timerOn = this.props.timerOn;
    this.currentProgress = this.props.currentProgress;

    this.tick = this.tick.bind(this);
  }

  tick() {
    while (this.props.timerOn) {
      setTimeout(() => {
        console.log('timer going');
      }, 1)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.timerOn === true) {
      this.tick();
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