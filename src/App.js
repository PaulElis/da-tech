import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/Component'
import FormContainer from './components/FormContainer/Container'

import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { subscribe } from '../src/Actions/actions'

class App extends Component {

  render() {
    // console.log('App props:', this.props);
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Route exact path="/" render={(props) => <MainPage {...props} subscribe={this.props.subscribe}/>} />
        <Route exact path="/login" component={FormContainer}/>
        <Route exact path="/signup" component={FormContainer}/>
      </div>
    );
  }
}

export default withRouter(connect(null, { subscribe })(App));
