import React  from 'react';
import classNames from 'classnames'
import logo from './logo.svg';
import './logo.css';
export default (props)=> {
	console.log(props.vertical);
    return (
      <div className={classNames("swing",{"vertical":props.vertical,"logo-bar":!props.vertical})}>
          <img className="logo" src={logo} alt="myBlog" />
          <h3>myBlog</h3>
      </div>
    )
}
