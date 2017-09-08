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
  }
  render() {
    return (
      <div className="App">
        <TopBar />
        <Pomodoro {...this.state} />
        <Progress segments={this.state.totalSegments} />
      </div>
    );
  }
}

export default App;
