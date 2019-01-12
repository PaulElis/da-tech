import React, { Component } from 'react';
import './index.css'

class Login extends Component {

  render() {
    // console.log('Login props:', this.props);
    return (
      <div>
        <p onClick={() => this.props.history.push('/')} >
          Go to Home
        </p>
          In Login Component
        <p onClick={() => this.props.history.push('/signup')} >
          Go to SignUp
        </p>
      </div>
    );
  }
}

export default Login;
