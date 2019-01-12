import React, { Component } from 'react';
import './index.css'
import Landing from '../../Landing/Component'
import About from '../../About/Component'
import Apps from '../../Apps/Component'
import Subscribe from '../../Subscribe/Component'
import Footer from '../../Footer/Component'

class MainPage extends Component {

  render() {
    console.log('MainPage props:', this.props);
    return (
      <div>
        MainPage
          <div onClick={() => this.props.history.push('/login')} >
            Login?
          </div>
          <Landing />
          <About />
          <Apps />
          <Subscribe />
          <Footer />
      </div>
    );
  }
}

export default MainPage;
