import React, { Component } from 'react';
import './index.css'

class Success extends Component {

  state = {
    success: false,
  }

  render() {
    // console.log('Success props:', this.props);
    // console.log('Success state:', this.state.success);
    return (
      <div id='success-container'>
        <div>
          {this.props.success === 'Success!' ? <div>Success</div> : null}
        </div>
      </div>
    );
  }
}

export default Success;
