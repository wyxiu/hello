import React, { Component } from 'react';
import loading from './loading.svg'

export default class Loading extends Component {
  render() {
    return (
      <div>
         <img src={loading} alt="loading"/>
      </div>
    )
  }
}
