import React, { Component } from 'react';


class Thanks extends Component {
  handleClick = () => {
    this.props.history.push('/')
}
  render() {
    return (

      <div>
        <p>
        Thank you for leaving your feedback!
        </p>
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default Thanks;