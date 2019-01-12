import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage/Component'
import FormContainer from './components/FormContainer/Container'

class App extends Component {
  state = { formContainer: false }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {this.state.formContainer ? <FormContainer /> : <MainPage /> }
      </div>
    );
  }
}

export default App;
