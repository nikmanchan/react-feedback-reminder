import React, { Component } from 'react';
import NextButton from '../NextButton/NextButton';


class Feeling extends Component {
  render() {
    return (

      <div>
        <p>How are you feeling today?</p>

        <NextButton path={'/2'} 
                            name={'next'}/>
      </div>
      
    );
  }
}

export default Feeling;