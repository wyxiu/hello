 import {
     START_GET_POSTS,
     GET_POSTS_SUCCESS
 } from '../action/actionTypes'

const initState = {
    isLoading:false,
    list:[ ]
}
const blogReduce = (state=initState,action)=>{
    switch (action.type) {
        case START_GET_POSTS:
            return Object.assign({},state,{
                isLoading:true
            });
         
        case GET_POSTS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                list:action.data
            });
        
    
        default:
            return state;
    }
 
};
export default blogReduce;

