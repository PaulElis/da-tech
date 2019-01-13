import React, { Component } from 'react';
import './index.css'

class About extends Component {

  render() {
    // console.log('props', this.props);
    return (
      <div id='about-container'>
        <h2 className='about-text' id='about-text1'>
          WHO WE ARE
        </h2>
        <p className='about-text' id='about-text2'>
          D & A Technologies is a NYC-based app development firm that works with Fortune 500 brands, leading retailers, funded startups and more to craft digital products and strategies that solve business problems and drive measurable results. <br />
            <br />
          We're part of your team. That means working together to meet the business challenges you face. From iOS and Android to emerging technologies like VR, AR, and wearables, we do whatever it takes to help you thrive in today's - and tomorrow's - digital ecosystem.
        </p>
      </div>
    );
  }
}

export default About;
