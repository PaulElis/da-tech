import React, { Component } from 'react';
import './index.css'
import username from '../../../../../images/ic_username@2x.png'
import email from '../../../../../images/ic_email@2x.png'
import password from '../../../../../images/ic_password@2x.png'

class Form extends Component {

  state = {
    username: '',
    usernameDisplay: true,
    email: "test@datechnologies.co",
    emailDisplay: true,
    password: 'Test123',
    passwordDisplay: true,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const arr = ['com', 'co', 'org', 'edu']
    const username = this.state.username
    const email = this.state.email
    const password = this.state.password
    const end = email.split('.').length-1

    if(email.includes('@') && email.includes('.')){
      for(let address of arr){
        if(this.props.location.pathname === '/signup' && email.split('.')[end] === address){
          return this.props.signup(username, email, password)
        } else if (this.props.location.pathname === '/login' && email.split('.')[end] === address) {
          return this.props.login()
        }
      }
    } else {
      console.log("Please enter a valid email");
    }
  }

  render() {
    // console.log('props', this.props);
    return (
      <div id='form-container'>
        <form onSubmit={(event) => this.handleSubmit(event)} id='form-input-submit'>

        {this.props.location.pathname === '/signup' ?
          <div className="input-container">
            <input onChange={this.handleChange} className="form-input" type="text" name="username" />
              <img className="input-image" src={username} alt='oh no!' />
              {this.state.username === '' ? <div style={{display: this.state.usernameDisplay ? 'block': 'none'}}
                onClick={() => this.setState({usernameDisplay: false})} className="input-text"> Username </div> : null }
          </div>
          : null }

          <div className="input-container">
            <input onChange={this.handleChange} className="form-input" type="text" name="email" />
              <img className="input-image" src={email} alt='oh no!' />
              {this.state.email === '' ? <div style={{display: this.state.emailDisplay ? 'block': 'none'}}
                onClick={() => this.setState({emailDisplay: false})} className="input-text"> Email </div> : null }
          </div>

          <div className="input-container">
            <input onChange={this.handleChange} className="form-input" type="password" name="password" />
              <img className="input-image" src={password} alt='oh no!' />
              {this.state.password === '' ? <div style={{display: this.state.passwordDisplay ? 'block': 'none'}}
                onClick={() => this.setState({passwordDisplay: false})} className="input-text"> Password </div> : null }
          </div>

          <button className='link' id='form-button'
            type="submit" value="Submit">
            {this.props.location.pathname === '/signup' ? 'SIGN UP' : 'LOGIN' }
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
