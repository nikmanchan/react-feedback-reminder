import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    feedbackToAdd: {
        understandingRank: '',
    }
}

handleChange = (event) => {
  this.setState({
    feedbackToAdd: {
      understanding: event.target.value
    }
  })
}

handleClick = () => {
  this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedbackToAdd });
  this.props.history.push('/3')
}

  render() {
    return (

      <div>
        <p>How well are you understanding the content?</p>
        <select value={this.state.feedbackToAdd.understandingRank} onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option defaultValue="selected" value="5">5</option>
        </select>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Understanding);