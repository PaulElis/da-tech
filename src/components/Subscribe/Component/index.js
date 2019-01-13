import React, { Component } from 'react';
import './index.css'

class Subscribe extends Component {

  render() {
    // console.log('Subscribe props:', this.props);
    return (
      <div id='subscribe-container'>
        <p onClick={() => this.props.subscribe()}>
          Subscribe
        </p>
      </div>
    );
  }
}

export default Subscribe;
