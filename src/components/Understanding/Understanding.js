import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Understanding extends Component {
  render() {
    return (

      <div>
        <p>How well are you understanding the content?</p>

                <NextButton path={'/3'} 
                            name={'next'}/>
      </div>
    );
  }
}

export default Understanding;