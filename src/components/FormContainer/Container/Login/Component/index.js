import React, { Component } from 'react';
import './index.css'

class Login extends Component {

  // renderSignUp = () => {
  //   this.props.history.push('/signup')
  // }

  render() {
    // console.log('Login props:', this.props);
    return (
      <div>
          In Login Component
        <p onClick={() => this.props.history.push('/signup')} >
          Go to SignUp
        </p>
      </div>
    );
  }
}

export default Login;
