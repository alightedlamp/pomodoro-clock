import React, { Component } from 'react';
import './css/styles.css';

import TopBar from './components/TopBar';
import Pomodoro from './components/Pomodoro';

class App extends Component {
  constructor() {
    super();

    this.state = {
      length: '25:00',
      totalSegments: 1,
      timeRemaining: '00:00',
      segmentsRemaining: 1,
      timerOn: false,
      ticker: false
    }

    this.addTime = this.addTime.bind(this);
    this.subtractTime = this.subtractTime.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  addTime() {
    let m = parseInt(this.state.length.split(':')[0], 10) + 1;
    m = m > 9 ? m : '0' + m;
    let length = `${m}:00`;
    this.setState({ length });
  }

  subtractTime() {
    let m = parseInt(this.state.length.split(':')[0], 10) - 1;
    m = m > 9 ? m : '0' + m;
    let length = `${m}:00`;
    this.setState({ length });
  }

  reset() {
    let timeRemaining = '00:00';
    let segmentsRemaining = 0;
    let timerOn = false;
    let ticker = false;

    clearInterval(this.state.ticker);

    this.setState({
      timeRemaining,
      segmentsRemaining,
      timerOn,
      ticker
    });
  }

  toggleTimer() {
    let timerOn = !this.state.timerOn;

    if (this.state.ticker) {
      clearInterval(this.state.ticker);
      this.setState({ ticker: false });
    }
    else if (!this.state.ticker && timerOn) {
      // Set remaining time to chosen Pomodoro length if at the end of a segment or just beginning
      if (this.state.timeRemaining === '00:00') {
        const timeRemaining = this.state.length;
        this.setState({ timeRemaining });
      }

      const ticker = setInterval(() => {
        // let segment = this.state.segmentsRemaining;
        let m = parseInt(this.state.timeRemaining.split(':')[0], 10);
        let s = parseInt(this.state.timeRemaining.split(':')[1], 10);

        if (s > 0) {
          s--;
        }
        else if (s === 0) {
          m--;
          s = 59;
        }

        s = s > 9 ? s : '0' + s;
        m = m > 9 ? m : '0' + m;

        let timeRemaining = `${m}:${s}`;
        if (timeRemaining === '00:00') {
          this.reset();
        }
        this.setState({ timeRemaining });
      }, 1000);

      this.setState({ ticker });
    }

    this.setState({ timerOn });
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Pomodoro
          {...this.state}
          toggleTimer={this.toggleTimer}
          addTime={this.addTime}
          subtractTime={this.subtractTime}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
