import React from 'react';

class ProgressItem extends React.Component {
  render() {
    const width = (this.props.length - this.props.timeRemaining.split(':')[0]) * 100;
    const style = {
      width: `${width}%`,
      backgroundColor: 'tomato'
    };
    return(
      <div className="segment">
        <div className="segment-fill" style={style}></div>
      </div>
      )
  }
}

export default ProgressItem;