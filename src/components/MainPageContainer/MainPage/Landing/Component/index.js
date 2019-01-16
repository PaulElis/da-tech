import React, { Component } from 'react';
import './index.css'
import logo from '../../../../../images/gpc_logo_large@2x.png'

class Landing extends Component {

  render() {
    // console.log('props', this.props);
    return (
      <div className='fade-in' id='landing-container'>
        <p className='link' id='landing-login' onClick={() => this.props.history.push('/login')} >
          Login
        </p>
        <div id='landing-image-header-container'>
          <img id='landing-image' src={logo} alt='oh no!' />
          <h1 id='landing-header'>APP DESIGN & DEVELOPMENT AGENCY</h1>
        </div>
      </div>
    );
  }
}

export default Landing;
