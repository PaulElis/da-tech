import React, { Component } from 'react';
import './index.css'

class Subscribe extends Component {

  render() {
    // console.log('Subscribe props:', this.props);
    return (
      <div onClick={() => this.props.subscribe()}>
        Subscribe
      </div>
    );
  }
}

export default Subscribe;
