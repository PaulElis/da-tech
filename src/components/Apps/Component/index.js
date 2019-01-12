import React, { Component } from 'react';
import './index.css'

class Apps extends Component {

  render() {
    // console.log('props', this.props);
    return (
      <div>
        <a href='https://movo.me' target="_blank" rel="noopener noreferrer"> Movo </a>
        <a href='https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt=' target="_blank" rel="noopener noreferrer"> Conair </a>
        <a href='https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=8' target="_blank" rel="noopener noreferrer"> Tapping Solution </a>
        <a href='https://www.gotenna.com' target="_blank" rel="noopener noreferrer"> goTenna </a>
      </div>
    );
  }
}

export default Apps;
