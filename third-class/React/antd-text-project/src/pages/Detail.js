import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Detail extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    )
  }
}
export default withRouter(Detail);