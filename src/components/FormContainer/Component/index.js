import React, { Component } from 'react';
import './index.css'
import logo from '../../../images/gpc_logo@2x.png'
import username from '../../../images/ic_username@2x.png'
import email from '../../../images/ic_email@2x.png'
import password from '../../../images/ic_password@2x.png'

class Form extends Component {

  render() {
    // <input id='form-input-email' type="text" name="name" />
    // <input id='form-input-password' type="text" name="name" />
    return (
      <div id='formcontainer-container'>
        <div id='formcontainer-home-link'>
          <img className='link' src={logo} alt='oh no!' onClick={() => this.props.history.push('/')} />
        </div>

        <div id='form-container-upper'>
          <div id='form-container'>
            <div id='form-header'>
              <h3 className='link'
                id={this.props.location.pathname === '/signup' ? 'form-headerh3' : 'form-headerh3-opacity'}
                onClick={() => this.props.history.push('/signup')} >
                Sign Up
              </h3>
              <h3 className='link'
                id={this.props.location.pathname === '/login' ? 'form-headerh3' : 'form-headerh3-opacity'}
                onClick={() => this.props.history.push('/login')} >
                Login
              </h3>
            </div>

            <form id='form-input-submit'>

            {this.props.location.pathname === '/signup' ?
              <div className="input-container">
                <input className="form-input" type="text" name="name" />
                <img className="input-image" src={username} />
                <div className="input-text"> Username </div>
              </div> : null }

              <div className="input-container">
                <input className="form-input" type="text" name="name" />
                <img className="input-image" src={email} />
                <div className="input-text"> Email </div>
              </div>

              <div className="input-container">
                <input className="form-input" type="text" name="name" />
                <img className="input-image" src={password} />
                <div className="input-text"> Password </div>
              </div>

            </form>
            <button className='link' id='form-button' type="submit" value="Submit">
              {this.props.location.pathname === '/signup' ? 'SIGN UP' : 'LOGIN' }
            </button>

          </div>
        </div>

      </div>
    );
  }
}

export default Form;
