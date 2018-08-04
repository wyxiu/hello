import React, { Component } from 'react'


export default class InputAdd extends Component {
  constructor(){
      super();
        this.state={
            value:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
  }

    handleClick(e) {
        this.setState({
            value: e.target.value
        })

    }

    handleAdd(){
        const {onSubmit} = this.props;
        // 如果不存在，就不往外传值
        this.state.value && onSubmit(this.state.value)
        this.setState({
            value:''
        })
    }
  render() {
    return (
        <div className="field has-addons">
            <div className="control">
        < input value={this.state.valueInput}
            onChange={this.handleClick}
            type="text"
            className="input is-primary"
             />
            </div>
            <div className="control">
            <button onClick={this.handleAdd} className="button is-primary">
            Add
         </button>
         </div>
      </div>
    )
  }
}
