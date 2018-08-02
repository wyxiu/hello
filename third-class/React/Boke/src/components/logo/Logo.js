import React  from 'react';
import classNames from 'classnames'
import logo from './logo.svg';
import './logo.css';
export default (props)=> {
    return (
        <div className={classNames('logo-bar',{'logo-vertical':props.vertical})}>
          <img className="logo" src={logo} alt="myBlog" />
          <h3>myBlog</h3>
      </div>
    )
}
