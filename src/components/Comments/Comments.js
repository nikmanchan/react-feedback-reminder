import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
  state = {
    feedbackToAdd: {
        comments: '',
    }
}
  handleClick = () => {
    this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state.feedbackToAdd });
    this.props.history.push('/5')
}

handleChange = (event) => {
  this.setState({
    feedbackToAdd: {
      comments: event.target.value
    }
  })
}

  render() {
    return (

      <div>
        <p>Any comments you want to leave?</p>
        <input placeholder="comments" value={this.state.feedbackToAdd.comments} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Comments);