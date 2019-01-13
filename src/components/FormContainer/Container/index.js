import React, { Component } from 'react';
import './index.css'
import Form from './Form/Component'
// import Login from './Login/Component'
// import SignUp from './SignUp/Component'

class FormContainer extends Component {

  render() {
    // console.log('FormContainer props:', this.props);
    // {this.props.location.pathname === '/signup' ? <SignUp {...this.props} changeSignUpState={this.changeSignUpState} />
    //   : <Login {...this.props} changeSignUpState={this.changeSignUpState} /> }
    return (
      <div id='formcontainer-container'>
        <div>
          <Form {...this.props} />
        </div>
      </div>
    );
  }
}

export default FormContainer;
