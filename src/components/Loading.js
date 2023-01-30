import React, { Component } from 'react'
//  import Walk from './Walk.gif'
 import Spinner from './Spinner.gif'
export class Loading extends Component {
  render() {
    return (
      <div>
        <img src={Spinner} alt="Loads" srcset="" />
      </div>
    )
  }
}

export default Loading
