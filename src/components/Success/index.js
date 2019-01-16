import React, { Component } from 'react';
import './index.css'

class Success extends Component {

  state = {
    success: false,
  }

  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      this.setState({ success: 'Success!' })
    }
  }

  renderSuccess = () => {
    console.log('in renderSuccess');
    setTimeout(this.changeBack, 2000);
    return <div>Success</div>
  }

  changeBack = () => {
    console.log('in changeBack');
    // document.getElementById('favorites-image').style.backgroundColor='#fff'
    this.setState({ success: false })
  }

  render() {
    // console.log('Success props:', this.props.success);
    console.log('Success state:', this.state.success);
    return (
      <div id='success-container'>
        <div>
          {this.state.success === 'Success!' ? this.renderSuccess() : null}
        </div>
      </div>
    );
  }
}

export default Success;
