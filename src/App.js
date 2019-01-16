import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPageContainer/MainPage'
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
        <Route exact path="/" render={(props) => <MainPage {...this.props} />} />
        <Route exact path="/login" render={(props) => <FormContainer {...this.props} />} />
        <Route exact path="/signup" render={(props) => <FormContainer {...this.props} />} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    success: state.success,
  }
}

export default withRouter(connect(mapStateToProps, { subscribe, signup, login })(App));
