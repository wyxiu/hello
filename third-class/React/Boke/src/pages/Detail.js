import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Detail extends Component {
    constructor(){
        super();
        this.state={
            text:[
                {id:1,context:"hsdfjhjkasdhf"},
                { id: 2, context: "点击附件奥斯" },
                { id: 3, context: "驾驶的咖啡机" }
            ]
        }
    }
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}
export default withRouter(Detail);