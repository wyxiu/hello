import React, { Component } from 'react';
import classNames from  'classnames'

export default class ListItem extends Component {
    hanleClick=()=>{
        const {onClick,id} = this.props;
        onClick(id)
    }
    hanleChange=()=>{
        const { onDelete, id } = this.props;
        onDelete(id)
    }
  render() {
    return ( 
            <li  
            className={classNames('item-normal', {'item-done':this.props.isComplete})}
            >
            <input type="checkbox" onClick={this.hanleClick} />
                {this.props.children}
            <button onClick={this.hanleChange}>del</button>
            </li>            
    )
  }
}
