import React from 'react';

import ProgressItem from './ProgressItem';

class Progress extends React.Component {
  render() {
    const length = this.props.length;
    const timeRemaining = this.props.timeRemaining;
    const totalSegments = this.props.totalSegments;
    const segmentsRemaining = this.props.segmentsRemaining;

    const segments = [];

    for (let i = 0; i < 10; i++) {
      segments.push(
        <ProgressItem
          length={length}
          segmentsRemaining={segmentsRemaining}
          timeRemaining={timeRemaining}
          key={Date.now()}
        />
      );
    }
    return(
      <div className="progress">
        {segments}
      </div>
      )
  }
}

export default Progress;