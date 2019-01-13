import React, { Component } from 'react';
import './index.css'

class Landing extends Component {

  render() {
    // console.log('props', this.props);
    return (
      <div id='landing-container'>
        <p id='landing-login' onClick={() => this.props.history.push('/login')} >
          Login
        </p>
      </div>
    );
  }
}

export default Landing;
