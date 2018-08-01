import React, { Component,Fragment } from 'react';
import {withRouter} from 'react-router-dom'
 class Blog extends Component {
    constructor(){
        super();
        this.state={
            blogs:[
                { id: 1, title: "博客1"},
                { id: 2, title: "博客2" },
                { id: 3, title: "博客3" }
            ]
        }
    }

    handleDetail(id){
        this.props.history.push(`/blog/detail/${id}`);
    }

    render() {
       
        return (
            <Fragment>
               <ul>
                   {
                     this.state.blogs.map((item) => {
                         return(
                             <li key={item.id} onClick={this.handleDetail.bind(this,item.id)}>
                                 {item.title}
                             </li>
                         )
                            
                     })
                   }
               </ul>
            </Fragment>
        )
    }
}

export default withRouter(Blog);

