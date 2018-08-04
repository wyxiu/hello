import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/loading/Loading';
import All from '../components/All'
 class Blog extends Component {
    constructor(){
        super();
        this.state={
            blogs:[],
            isLoading: true
        }
       
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts').then(resp=>{
            // console.log(resp)
           if(resp.status===200){
                this.setState({
                    blogs:resp.data,
                    isLoading: false
                })
           }
        });
    }

    handleDetail(id){
        this.props.history.push(`/blog/detail/${id}`);
    }

    render() {
        return (
            <All>
                {
                    this.state.isLoading
                    ?
                    <Loading />
                    :
                    <ul>
                        {
                            this.state.blogs.map((item) => {
                                return (
                                    <li key={item.id} onClick={this.handleDetail.bind(this, item.id)}>
                                        {item.id}.{item.title}
                                    </li>
                                )

                            })
                        }
                    </ul>
                }             
            </All>
        )
    }
}

export default withRouter(Blog);

