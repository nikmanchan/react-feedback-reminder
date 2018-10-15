import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';

class Support extends Component {
  render() {
    return (

      <div>
        <p>How well are you being supported?</p>

                <NextButton path={'/4'} 
                            name={'next'}/>
      </div>
    );
  }
}

export default Support;