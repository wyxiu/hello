import React, { Component,Fragment } from 'react';
import {
    HeaderOne,
    HeaderTwo
} from './components';

export default class App extends Component {
  constructor (){
      super();
      this.state = {
        list:[
            "eat",
            "sleep"
        ],
        inputValue:""
       
      }
      this.handleChange = this.handleChange.bind(this)
  }
  handleAdd = ()=>{
        this.setState({
            // list:this.state.list.concat("hhh")
            list:[...this.state.list,this.state.inputValue]
        })
      this.state.inputValue = ""
    
  }
  handleChange(e){
        this.setState({
            inputValue:e.target.value
        
        });
     
       
  }

  render() {
    return (
        <Fragment>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
                <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
                <button onClick={this.handleAdd}>点击</button>
            </ul>
        </Fragment> 

    )
  }
}




