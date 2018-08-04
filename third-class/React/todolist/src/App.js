import React, {
	Component
} from 'react';
import "bulma/css/bulma.css";
import {
	InputAdd,
	ListItem,
	Header
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
			id: 3

		});
		this.handleAdd = this.handleAdd.bind(this);
<<<<<<< HEAD
		// this.handleClick = this.handleClick.bind(this);
=======
>>>>>>> 48d3c6280eebca3b42246d05dfff8a792e89bae4
		this.delete = this.delete.bind(this);
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

		});

	}

	delete(item) {
		console.log(item);
		//		for (var i = 0; i < this.state.todos.length; i++) {
		//			if (this.state.todos[i].id === id) {
		//				console.log("---" + i);
		//				const newtodos = this.state.todos.splice(i, 1);
		//				console.log(newtodos);
		//				this.setState({
		//					todos: this.state.todos
		//				})
		//			}
		//		}
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
		const newTodos = this.state.todos.map((todo) => {
			return (
				item.id === todo.id ? {
					...todo,
					text:item.value
				} :
					todo
			)
		});
		console.log(newTodos);
		this.setState({
			todos: newTodos,
			value: ''
		})
	}

	render() {
		const count = this.state.todos.length;
		return (
			<div>
			<Header/>
				<div className="container section">
				<div className="panel">
					<p className="panel-heading">
						{new Date().toLocaleDateString()}
					</p>
					<div className="panel-block">
						<InputAdd onSubmit={this.handleAdd} />
					</div>
						
							{
								this.state.todos.map(
									(item) => {
										return (
											<ListItem onClick={this.handleCheckbox.bind(this)}
												onDelete={this.delete.bind(this)}
												onUpdate={this.handleUpdate.bind(this)}
												id={item.id}
												isComplete={item.isComplete}
												key={item.id}
												todo={item}
												text={item.text}
												wrappedClassName="panel-block"
											>
											</ListItem>
										)
									})
							}

						</div> 
				</div>
			</div>
					
	
							
			);
	}
}