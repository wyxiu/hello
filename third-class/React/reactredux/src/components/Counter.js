import React, { Component } from 'react';
import CounterButton from './CounterButton';
import {connect} from 'react-redux';
import {increase,decrease} from '../action'

 class Counter extends Component {
  render() {
    return (
      <div>
         count:{this.props.counter}
         <CounterButton increase={this.props.increase} decrease={this.props.decrease} />

      </div>
    )
  }
}

const mapState = (state) =>{
    return {
        counter:state.counter
    }
}

const mapDispatch = (dispatch) =>{
    return {
       increase:(num)=>{
           return dispatch(increase(Number.parseInt(5, 10)))       
       },
       decrease: ()=> {
           return dispatch(decrease())
       }
           
    }
}
export default connect(mapState,mapDispatch)(Counter);