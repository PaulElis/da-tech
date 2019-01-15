import React, { Component } from 'react';
import './index.css'

class Subscribe extends Component {

  state = { email: '' }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // console.log('Subscribe props:', this.props);
    return (
      <div id='subscribe-container'>
        <h2 id='subscribe-header'>
          SUBSCRIBE TO NEWSLETTER
        </h2>

        <div id='subscribe-form-container'>
          <form>
            <input onChange={this.handleChange} name='email'
              placeholder='Your email' id='subscribe-form-input' type="text" />
          </form>
          <button
            onClick={() => this.props.subscribe()}
            className='link' id='subscribe-form-button' name='email' type="submit" value="Submit">
              SUBSCRIBE
          </button>
        </div>
      </div>
    );
  }
}

export default Subscribe;
