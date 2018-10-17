import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thanks extends Component {
  handleClick = () => {
    this.props.dispatch({
      type: 'CLEAR_FEEDBACK'
    });
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

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Thanks);