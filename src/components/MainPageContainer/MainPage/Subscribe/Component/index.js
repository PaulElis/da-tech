import React, { Component } from 'react';
import './index.css'

class Subscribe extends Component {

  state = {
    email: "test@datechnologies.co",
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const arr = ['com', 'co', 'org', 'edu']
    const email = this.state.email
    const end = email.split('.').length-1

    if(email.includes('@') && email.includes('.')){
      for(let address of arr){
        if(email.split('.')[end] === address){
          this.props.subscribe(email)
        }
      }
    } else {
      console.log("Please enter a valid email");
    }
  }

  render() {
    // console.log('Subscribe state:', this.state);
    return (
      <div id='subscribe-container'>
        <h2 id='subscribe-header'>
          SUBSCRIBE TO NEWSLETTER
        </h2>

        <div id='subscribe-form-container'>
          <form onSubmit={(event) => this.handleSubmit(event)} >
            <input onChange={this.handleChange} name='email'
              placeholder='Your email' id='subscribe-form-input' type="text" />
            <button className='link' id='subscribe-form-button'
              name='email' type="submit" value="Submit">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
