import React, { Component } from 'react';
import './index.css'
import Login from './Login/Component'
import SignUp from './SignUp/Component'

class FormContainer extends Component {
  state = { signUp: true }

  render() {
    // console.log('props', this.props);
    return (
      <div>
        FormContainer
        {this.state.signUp ? <SignUp /> : <Login /> }
      </div>
    );
  }
}

export default FormContainer;
