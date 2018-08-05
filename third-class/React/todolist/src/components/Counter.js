import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
      const {counter} = this.props
    return (
      <div className={this.props.CounterclassName}>
          <div className="field is-grouped is-grouped-multiline">
            <div className="control">
            <div className="tags has-addons">
                <span className="tag is-danger">未完成</span>
                <span className="tag is-primary">{counter.unDone}</span>
            </div>
            </div>
            <div className="control">
            <div className="tags has-addons">
                <span className="tag is-info">已完成</span>
                <span className="tag is-primary">{counter.done}</span>
            </div>
            </div>
</div>




      </div>
    )
  }
}
