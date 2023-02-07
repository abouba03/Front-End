import React, { Component } from 'react';

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>{this.props.buttonText}</button>
    );
  }
}

export default CustomButton;