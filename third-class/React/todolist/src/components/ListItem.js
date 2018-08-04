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
		console.log(this.props);
		const {
			onUpdate,
			todo
		} = this.props;
		onUpdate(todo)
	}
	render() {
		return (
		<lable className={
				classNames(this.props.wrappedClassName, 
				{
					'item-done': this.props.isComplete
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

		</lable>
		)
	}
}