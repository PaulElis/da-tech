import React, { Component } from 'react';
import './index.css'
import Form from '../Component'


class FormContainer extends Component {

  render() {
    // console.log('FormContainer props:', this.props);
    return (
      <div id='formcontainer-container'>
        <Form {...this.props} />
      </div>
    );
  }
}

export default FormContainer;
