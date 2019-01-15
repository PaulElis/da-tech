import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/Component'
import FormContainer from './components/FormContainer/Container'

import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { subscribe, signup, login } from '../src/actions/actions'

class App extends Component {

  render() {
    // console.log('App props:', this.props);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Route exact path="/" render={(props) => <MainPage {...props} subscribe={this.props.subscribe}/>} />
        <Route exact path="/login" render={(props) => <FormContainer {...props} signup={this.props.signup} login={this.props.login} />} />
        <Route exact path="/signup" render={(props) => <FormContainer {...props} signup={this.props.signup} login={this.props.login} />} />
      </div>
    );
  }
}

export default withRouter(connect(null, { subscribe, signup, login })(App));
