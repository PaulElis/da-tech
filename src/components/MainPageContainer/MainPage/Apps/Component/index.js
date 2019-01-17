import React, { Component } from 'react';
import './index.css'
import movo from '../../../../../images/logo_movo@2x.png'
import conair from '../../../../../images/logo_conair@2x.png'
import tappingSolution from '../../../../../images/logo_tappingSolution@2x.png'
import goTenna from '../../../../../images/logo_goTenna@2x.png'

class Apps extends Component {

  render() {
    return (
      <div id='apps-container'>
        <h2 id='apps-header'>OUR APPS</h2>
        <div id='apps-images-container'>

          <div className='apps-images-section'>
            <a href='https://movo.me' target="_blank" rel="noopener noreferrer">
              <img className='app-images' src={movo} alt='oh no!' />
            </a><h5 className='app-images-label'>Movo</h5>
          </div>

          <div className='apps-images-section'>
            <a href='https://itunes.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126?mt=' target="_blank" rel="noopener noreferrer">
              <img className='app-images' src={conair} alt='oh no!' />
            </a><h5 className='app-images-label'>Conair WeightWatchers</h5>
          </div>

          <div className='apps-images-section'>
            <a href='https://itunes.apple.com/us/app/the-tapping-solution/id1419815487?mt=8' target="_blank" rel="noopener noreferrer">
              <img className='app-images' src={tappingSolution} alt='oh no!' />
            </a><h5 className='app-images-label'>Tapping Solution</h5>
          </div>

          <div className='apps-images-section'>
            <a href='https://www.gotenna.com' target="_blank" rel="noopener noreferrer">
              <img className='app-images' src={goTenna} alt='oh no!' />
            </a><h5 className='app-images-label'>goTenna</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Apps;
