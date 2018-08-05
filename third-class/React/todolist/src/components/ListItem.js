import React, {
	Component
} from 'react';
import classNames from 'classnames'

export default class ListItem extends Component {
	hanleClicks = () => {
		const {
			onClick,
			id
		} = this.props;
		onClick(id)
	}
	hanleDelete = () => {
		console.log(this.props);
		const {
			onDelete,
			todo
		} = this.props;

		onDelete(todo)
	}
	hanleUpdate = () => {
		const {
			onUpdate,
			todo
		} = this.props;
		onUpdate(todo)
	}
	render() {
		return (
		<div className={
				classNames(this.props.wrappedClassName, 
				{
					'has-text-primary': !this.props.isComplete,
					'has-text-danger': this.props.isComplete
				})
		} >
			< input type="checkbox"
				onClick={
					this.hanleClicks
				}
			/>
			{
				this.props.text
			}
			<button onClick={
				this.hanleDelete
			} 
			>
			 del
			</button>
			<button onClick={
				this.hanleUpdate
			}
			 > 
			update 
			</button>

		</div>
		)
	}
}