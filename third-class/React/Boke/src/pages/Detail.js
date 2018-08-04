import React,{Component} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Loading from '../components/loading/Loading';
import All from '../components/All'
class Detail extends Component {
    constructor(){
        super();
        this.state={
            text:[ ],
            isLoading:true
        }
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`).then(resp => {
            // console.log(resp)
            if (resp.status === 200) {
                this.setState({
                    text: resp.data,
                    isLoading: false
                })
            }
        });
    }
    render() {
        return (
           <All>    
            {
                this.state.isLoading
                ?
                <Loading/>
                :
               <div>
                   <h2>{this.state.text.title}</h2>
                 <p>{this.state.text.body}</p>
               </div>
            }
            </All>
            
        )
    }
}
export default withRouter(Detail);