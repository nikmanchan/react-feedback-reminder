import React, { Component } from 'react';


class Comments extends Component {
  handleClick = () => {
    this.props.history.push('/5')
}

  render() {
    return (

      <div>
        <p>Any comments you want to leave?</p>
        <input placeholder="comments"></input>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Comments;