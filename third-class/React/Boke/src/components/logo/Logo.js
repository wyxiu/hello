import React, { Component } from 'react';
import logo from './logo.svg';
import './logo.css';
export default class Logo extends Component {
 
  render() {
    return (
      <div className="logo-bar tada">
          <img className="logo" src={logo} alt="myBlog" />
          <h3>myBlog</h3>
      </div>
    )
  }
}
