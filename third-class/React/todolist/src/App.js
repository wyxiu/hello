import React, { Component } from 'react';
import "bulma/css/bulma.css";
import ListItem from './components/ListItem';
import "./App.css"

export default class App extends Component {
  constructor(){
    super();
    this.state=({
      todos:[
        { id: 1, text: "eat", isComplete: true},
        { id: 2, text: "sleep", isComplete: false }

      ],
      valueInput:"",
      id:3
     
    });
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  handleAdd(){
    const { todos, valueInput,id } = this.state;
    this.setState({
      todos:[...todos,{
        id:id,
        text:valueInput,
        isComplete: false
      }],
      id:id+1,
      valueInput:''
  

    });
  
  }

  handleClick(e){
    this.setState({
      valueInput:e.target.value
    })
  }

  delete(index){
    const newtodos = this.state.todos.splice(index, 1);
    console.log(newtodos)
    this.setState({
      todos: newtodos
    })
   
  }

  handleCheckbox(id){
    const {todos}  = this.state;
    const newTodos = todos.map((item)=>{
       return(
         item.id === id
         ?
          {
             ...item,isComplete:!item.isComplete
         }
         :
         item
       )
    });
    this.setState({
      todos:newTodos
    })
  }

  

  render() {
    const count = this.state.todos.length;
    return (
     <div>
        <h3>todoList,
          
          完成的总任务数:{count}</h3>
       <ul>
         {
           this.state.todos.map(
             (item,index) =>{
             return (
               <ListItem 
                 onClick={this.handleCheckbox.bind(this)}
                 onDelete={this.delete.bind(this,index)}
                 id={item.id}
                 isComplete={item.isComplete}
                 key={item.id}
               >
                 {item.text}
               </ListItem>

             )
              
           })
         }
    
       </ul>
        <input value={this.state.valueInput} onChange={this.handleClick} type="text"/>
       <button onClick={this.handleAdd}>Add</button>
     </div>

    );
  }
}


