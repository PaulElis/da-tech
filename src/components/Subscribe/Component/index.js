import React, { Component } from 'react';
import './index.css'

class Subscribe extends Component {

  render() {
    // console.log('Subscribe props:', this.props);
    return (
      <div id='subscribe-container'>
        <h2 id='subscribe-header' onClick={() => this.props.subscribe()}>
          Subscribe
        </h2>

        <div id='subscribe-form-container'>
          <form>
            <input id='subscribe-form-input' type="text" name="name" />
          </form>
          <button id='subscribe-form-button' type="submit" value="Submit">
            SUBSCRIBE
          </button>
        </div>
      </div>
    );
  }
}

export default Subscribe;
