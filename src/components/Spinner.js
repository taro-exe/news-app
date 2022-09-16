import React, { Component } from 'react'
import loading from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center' style={{height: '10rem', margin: '5rem auto'}}>
        <img src={loading} alt='loading' style={{height: '100%'}}/>
      </div>
    )
  }
}
