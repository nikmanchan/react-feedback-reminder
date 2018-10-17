import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class NextButton extends Component {

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_FEEDBACK', payload: this.state });
        this.props.history.push(this.props.path)
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

export default withRouter(NextButton);