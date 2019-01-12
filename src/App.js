import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/Component'
import FormContainer from './components/FormContainer/Container'

import {Route, withRouter} from 'react-router-dom'


class App extends Component {
  // state = { formContainer: false }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <MainPage {...this.props}/>
        <Route exact path="/login" component={FormContainer}/>
        <Route exact path="/signup" component={FormContainer}/>
      </div>
    );
  }
}

export default withRouter(App);
