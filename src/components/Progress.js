import React from 'react';

import ProgressItem from './ProgressItem';

class Progress extends React.Component {
  render() {
    return(
      <div className="progress">
        <ProgressItem />
      </div>
      )
  }
}

export default Progress;