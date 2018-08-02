import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import { Breadcrumb} from 'antd';

 class List extends Component {
   constructor(){
       super();
       this.state={
           lists:[
               { id: 1, title:'Home'},
               { id: 2, title: 'Application Center' },
               { id: 3, title: 'Application List' },
               { id: 4, title: 'Application' },
           ]
       }
   }

    hanleListRouter(id){
        this.props.history.push(`/list/detail/${id}`);
    }

  render() {
      return (
          <Breadcrumb >
            {
               this.state.lists.map(item=>{
                   return (
                       <Breadcrumb.Item 
                       onClick={this.hanleListRouter.bind(this, item.id)}
                       key={item.id}
                       >{item.title}</Breadcrumb.Item>
                   )
                      
               }) 
            }
             
          </Breadcrumb>
      )
  }
    
}
export default withRouter(List);