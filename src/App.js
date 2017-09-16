import React, { Component } from 'react';
import './css/styles.css';

import TopBar from './components/TopBar';
import Pomodoro from './components/Pomodoro';
import Progress from './components/Progress';

class App extends Component {
  constructor() {
    super();

    this.state = {
      length: 20,
      totalSegments: 1,
      currentProgress: {
        time: 0,
        segment: 1
      },
      timerOn: false
    }

    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    if (this.state.timerOn === false) {
      let currentProgress = this.state.currentProgress.time = this.state.length;
      let timerOn = true;

      this.setState({
        currentProgress,
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
