import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.onClick}>点击刷新</button>
      </div>
    )
  }
}
