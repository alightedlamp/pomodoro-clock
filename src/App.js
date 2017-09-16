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
    this.decrement = this.decrement.bind(this);
  }

  startTimer() {
    let timeRemaining = this.state.length;
    let segment = this.state.currentTimer.segment;

    if (this.state.timerOn === false) {
      let currentTimer = { timeRemaining, segment };
      let timerOn = true;

      // Turns timer on
      this.setState({
        currentTimer,
        timerOn
      });
    }
  }

  decrement() {
    const ticker = setInterval(() => {
      let segment = this.state.currentTimer.segment;

      let min = parseInt(this.state.currentTimer.timeRemaining.split(':')[0]);
      let sec = parseInt(this.state.currentTimer.timeRemaining.split(':')[1]);

      if (sec > 0) {
        sec--;
      }
      else if (sec === 0) {
        min--;
        sec = 59;
      }

      if (min === 0 && sec === 0) {
        clearInterval(ticker);
      }

      let newSegment = 0;
      let timeRemaining = `${min}:${sec}`;
      let currentTimer = {
        timeRemaining,
        segment: newSegment
      }
      this.setState({
        currentTimer
      });
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <TopBar />
        <Pomodoro {...this.state} startTimer={this.startTimer} decrement={this.decrement} />
        <Progress segments={this.state.totalSegments} />
      </div>
    );
  }
}

export default App;
