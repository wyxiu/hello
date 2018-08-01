import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default class Frame extends Component {
    constructor(){
        super();
        this.state={
            urls:[
                {url:'/home',title:'首页'},
                { url: '/blog', title: '博客'},
                { url: '/aboutus', title: '关于我们' },
            ]
        }
    }
  render() {
    return (
      <div>
         <ul className="nav">
             {
                 this.state.urls.map(item=>{
                     return(
                         <li key={item.url}>
                             <Link to={item.url}>{item.title}</Link>
                         </li>
                     )
                 })
             }
         </ul>
      </div>
    )
  }
}
