import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Select from 'react-select-plus';


class Feeling extends Component {
  state = {
    feedbackToAdd: {
        feeling: '',
    }
}

handleChange = (event) => {
  this.setState({
    feedbackToAdd: {
      feelingRank: event.target.value
    }
  })
}

handleClick = () => {
  this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedbackToAdd });
  this.props.history.push('/2')
}

  render() {
    return (

      <div>
        <p>How are you feeling today?</p>
        <select value={this.state.feedbackToAdd.feelingRank} onChange={this.handleChange}>
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

export default connect(mapStateToProps)(Feeling);