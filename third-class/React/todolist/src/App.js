import React, {
	Component
} from 'react';
import "bulma/css/bulma.css";
import {
	InputAdd,
	ListItem,
	Header,
	Counter
} from './components';
import "./App.css"

export default class App extends Component {
	constructor() {
		super();
		this.state = ({
			todos: [{
				id: 1,
				text: "eat",
				isComplete: true
			}, {
				id: 2,
				text: "sleep",
				isComplete: false
			}

			],
			id: 3,
			value:''
		});
		this.delete = this.delete.bind(this);
		this.getCounters=this.getCounters.bind(this);
	}
//计算完成和未完成的数量

getCounters(){
const done = this.state.todos.filter(todo=>todo.isComplete).length;
const unDone = this.state.todos.filter(todo=>!todo.isComplete).length;
			return {done,
			        unDone
			}
}

	handleChange(text){
		this.setState({
            value: text
        })
	}

	handleAdd(text) {
		const newtodos = {
			text,
			id:this.state.id+1,
			isComplete: false
		}
		this.setState({
			todos: [...this.state.todos, newtodos],
			id: this.state.id + 1,
			value:''
		});
	}

	delete(item) {
		console.log(item);
		const index = this.state.todos.indexOf(item);
		console.log(index);
		this.state.todos.splice(index, 1);
		this.setState({
			todos: this.state.todos
		})

	}

	handleCheckbox(id) {
		const {
			todos
		} = this.state;
		const newTodos = todos.map((item) => {
			return (
				item.id === id ? {
					...item,
					isComplete: !item.isComplete
				} :
					item
			)
		});
		this.setState({
			todos: newTodos
		})
	}

	handleUpdate(item) {
		console.log(item);
		const newTodos = this.state.todos.map((todo) => {
			return (
				item.id === todo.id ? {
					...todo,
					text:this.state.value
				} :
					todo
			)
		});
		this.setState({
			todos: newTodos,
			value:''		
		})
		
	}
		

	render() {
		
		return (
			<div>
			<Header/>
				<div className="container section">
				<div className="panel">
					<p className="panel-heading">
						{new Date().toLocaleDateString()}
					</p>
					<div className="panel-block">
						<InputAdd text={this.state.value} onSubmit={this.handleAdd.bind(this)} onTextChange={this.handleChange.bind(this)} />
					</div>
						
							{
								this.state.todos.map(
									(item) => {
										return (
											<ListItem onClick={this.handleCheckbox.bind(this)}
												onDelete={this.delete.bind(this)}
												id={item.id}
												isComplete={item.isComplete}
												key={item.id}
												todo={item}
												text={item.text}
												onUpdate={this.handleUpdate.bind(this)}
												wrappedClassName="panel-block"
											>
											</ListItem>
										)
									})
							}
							<Counter counterclassName="panel-heading" counter={this.getCounters()}/>		
						</div> 					
										
				</div>
			</div>
					
	
							
			);
	}
}