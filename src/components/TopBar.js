import React from 'react';

import Title from './Title';
import Button from './Button';

class TopBar extends React.Component {
  render() {
    const buttonStyle = {
      border: 'none',
      width: '25%',
      backgroundColor: 'tomato',
      color: 'white',
      padding: '.75em'
    }
    return(
      <div>
        <Button text="Settings" style={buttonStyle}/>
        <Title />
      </div>
      )
  }
}

export default TopBar;