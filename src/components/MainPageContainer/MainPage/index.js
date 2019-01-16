import React, { Component } from 'react';
import './index.css'
import Landing from './Landing/Component'
import About from './About/Component'
import Apps from './Apps/Component'
import Subscribe from './Subscribe/Component'
import Footer from './Footer/Component'

class MainPage extends Component {

  render() {
    // console.log('MainPage props:', this.props);
    return (
      <div>
          <Landing {...this.props} />
          <About {...this.props} />
          <Apps {...this.props} />
          <Subscribe {...this.props} />
          <Footer {...this.props} />
      </div>
    );
  }
}

export default MainPage;
