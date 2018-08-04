import React, { Component } from 'react'

export default class CounterButton extends Component {
  render() {
    return (
      <div>
         <button onClick={this.props.increase}>增加</button>
         <button onClick={this.props.decrease}>减少</button>
      </div>
    )
  }
}
