import React, { Component } from 'react';
import './index.css'
import FormComponent from '../Component'


class FormContainer extends Component {

  handleFormClick = () =>{
    this.props.location.pathname === '/signup' ? this.props.signup() : this.props.login()
  }

  divDisappear = () =>{
    console.log('in divDisappear');
  }

  render() {
    // console.log('FormContainer props:', this.props);
    return (
      <div id='formcontainer-container'>
        <FormComponent {...this.props} handleFormClick={this.handleFormClick}
          changeOpacity={this.changeOpacity} divDisappear={this.divDisappear} />
      </div>
    );
  }
}

export default FormContainer;
