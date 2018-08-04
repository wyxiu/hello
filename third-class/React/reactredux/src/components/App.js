import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Button from './Button';
import Loading from './Loading';
import List from './List';
import { getPosts } from '../action';

 class App extends Component {
  render() {
    return (
        <Fragment>
         <Button onClick={this.props.FreshData}/>
         {this.props.isLoading && <Loading />}
         <List data={this.props.list}/>
       </Fragment>
    )
  }
}

const mapStateToProps=(state)=>{
    return state.blog
    
}

const mapDispatch = (dispatch)=>{
    return{
        FreshData:()=>{
            dispatch(getPosts())
        }
       
    }
}
export default connect(mapStateToProps, mapDispatch)(App);