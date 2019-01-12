import React, { Component } from 'react';
import './index.css'

class SignUp extends Component {

  render() {
    // console.log('props', this.props);
    return (
      <div>
        <p onClick={() => this.props.history.push('/')} >
          Go to Home
        </p>
        In SignUp Component
        <p onClick={() => this.props.history.push('/login')} >
          Go to Login
        </p>
      </div>
    );
  }
}

export default SignUp;
