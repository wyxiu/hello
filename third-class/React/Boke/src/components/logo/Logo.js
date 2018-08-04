import React, { Component } from 'react';
import logo from './logo.svg';
import './logo.css';
import classNames from 'classnames'
export default class Logo extends Component {
 
  render() {
    return (
      <div className={classNames("logo-bar", {"logo-vertical":this.props.vertical})}>
          <img className="logo" src={logo} alt="myBlog" />
          <h3>myBlog</h3>
      </div>
    )
  }
}
