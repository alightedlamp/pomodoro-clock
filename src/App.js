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
      currentTimer: {
        timeRemaining: 0,
        segment: 1
      },
      timerOn: false
    }

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    let timeRemaining = this.state.currentTimer;
    let segment = this.state.segment;

    if (this.state.timerOn === false) {
      let currentTimer = { timeRemaining, segment };
      let timerOn = true;

      this.setState({
        currentTimer,
        timerOn
      });
    }
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Pomodoro {...this.state} startTimer={this.startTimer} />
        <Progress segments={this.state.totalSegments} />
      </div>
    );
  }
}

export default App;
