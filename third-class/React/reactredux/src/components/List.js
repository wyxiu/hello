import React, { Component } from 'react';
import ListItem from './ListItem'

export default class List extends Component {
  render() {
    return (
      <div>
        {
            this.props.data.map(item=>{
                return(
                    <ListItem key={item.id}>{item.title}</ListItem>
                )
                    
            })
        }
      </div>
    )
  }
}
