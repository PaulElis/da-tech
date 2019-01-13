import React, { Component } from 'react';
import './index.css'

class Form extends Component {

  render() {
    // console.log('Form props:', this.props);
    return (
      <div id='formcontainer-container'>
        <p className='link' id='home-link' onClick={() => this.props.history.push('/')} >
          Go to Home
        </p>

        <div id='form-container-upper'>
          <div id='form-container'>
            <div id='form-header'>
              <h3 className='link' id='form-headerh3' onClick={() => this.props.history.push('/login')} >
                Login
              </h3>
              <h3 className='link' id='form-headerh3' onClick={() => this.props.history.push('/signup')} >
                SignUp
              </h3>
            </div>

            <form id='form-input-submit'>
              <input type="text" name="name" />
              <input type="text" name="name" />
              {this.props.location.pathname === '/signup' ? <input type="text" name="name" /> : null }
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Form;
