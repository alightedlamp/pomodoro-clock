import React, { Component } from 'react';
import './css/styles.css';

import TopBar from './components/TopBar';
import Pomodoro from './components/Pomodoro';
import Progress from './components/Progress';

class App extends Component {
  constructor() {
    super();

    this.state = {
      length: '20:00',
      totalSegments: 1,
      timeRemaining: '00:00',
      segmentsRemaining: 1,
      timerOn: false
    }

    this.addTime = this.addTime.bind(this);
    this.substractTime = this.subtractTime.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  addTime() {
    let m = parseInt(this.state.length.split(':')[0]) + 1;
    let length = `${m}:00`;
    this.setState({ length });
  }

  subtractTime() {
    let m = parseInt(this.state.length.split(':')[0]) - 1;
    let length = `${m}:00`;
    this.setState({ length });
  }

  toggleTimer() {
    if (!this.state.timerOn) {
      let timerOn = !timerOn;
      if (timerOn) {
        const timeRemaining = this.state.length;
        this.setState({ timeRemaining });
      }
      this.setState({ timerOn });
    }
  }

  decrement() {
    const ticker = setInterval(() => {
      let segment = this.state.segmentsRemaining;
      if (timeRemaining === '00:00') {
        clearInterval(ticker);
      }

      let m = parseInt(this.state.timeRemaining.split(':')[0]);
      let s = parseInt(this.state.timeRemaining.split(':')[1]);

      if (s > 0) {
        s--;
        if (s < 10) {
          s = `0${s}`;
        }
      }
      else if (s === 0) {
        m--;
        s = 59;
      }

      let timeRemaining = `${m}:${s}`;
      this.setState({ timeRemaining });
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Pomodoro
          {...this.state}
          toggleTimer={this.toggleTimer}
          decrement={this.decrement}
          addTime={this.addTime}
          subtractTime={this.subtractTime}
        />
        <Progress segments={this.state.totalSegments} />
      </div>
    );
  }
}

export default App;
