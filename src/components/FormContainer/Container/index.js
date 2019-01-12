import React, { Component } from 'react';
import './index.css'
import Login from './Login/Component'
import SignUp from './SignUp/Component'

class FormContainer extends Component {

  render() {
    // console.log('FormContainer props:', this.props);
    return (
      <div>
        {this.props.location.pathname === '/signup' ? <SignUp {...this.props} changeSignUpState={this.changeSignUpState} />
          : <Login {...this.props} changeSignUpState={this.changeSignUpState} /> }
      </div>
    );
  }
}

export default FormContainer;
