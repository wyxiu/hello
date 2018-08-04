import React, { Component } from 'react'
import Logo from '../components/logo/Logo'
import Nav from '../components/nav/Frame'

export default class All extends Component {
  render() {
    return (
      <div>
          <Logo vertical={this.props.vertical}/>
          <Nav/>
          <div className="main">{this.props.children}</div>
      </div>
    )
  }
}
