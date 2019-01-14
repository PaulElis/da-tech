import React, { Component } from 'react';
import './index.css'
import logo from '../../../images/gpc_logo@2x.png'

class Form extends Component {

  render() {
    return (
      <div id='formcontainer-container'>
        <img className='link' src={logo} alt='oh no!' onClick={() => this.props.history.push('/')} />

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
            </form>
            <button id='form-button' type="submit" value="Submit">
            {this.props.location.pathname === '/signup' ? 'SIGN UP' : 'LOGIN' }
            </button>

          </div>
        </div>

      </div>
    );
  }
}

export default Form;
