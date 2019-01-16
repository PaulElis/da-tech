import React, { Component } from 'react';
import './index.css'
import logo from '../../../../images/gpc_logo@2x.png'
import Form from './Form'

class FormUpper extends Component {

  render() {
    // console.log('FormUpper props;', this.props);
    return (
      <div id='formcontainer-component'>
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

            <Form {...this.props} />

          </div>
        </div>

      </div>
    );
  }
}

export default FormUpper;
