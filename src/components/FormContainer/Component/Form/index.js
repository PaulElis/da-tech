import React, { Component } from 'react';
import './index.css'
import username from '../../../../images/ic_username@2x.png'
import email from '../../../../images/ic_email@2x.png'
import password from '../../../../images/ic_password@2x.png'

class Form extends Component {

  state = {
    username: '',
    usernameDisplay: true,
    email: '',
    emailDisplay: true,
    password: '',
    passwordDisplay: true,
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    // console.log('props', this.props);
    return (
      <div id='form-container'>
      <form id='form-input-submit'>

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

      </form>
      <button onClick={() => this.props.handleFormClick()}
        className='link' id='form-button' type="submit" value="Submit">
          {this.props.location.pathname === '/signup' ? 'SIGN UP' : 'LOGIN' }
      </button>
      </div>
    );
  }
}

export default Form;
