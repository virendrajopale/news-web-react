import React, { Component } from 'react'

import loading from './spinn.gif'

export class Spinner extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
