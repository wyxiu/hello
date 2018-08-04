import {
    GET_POSTS_SUCCESS,
    START_GET_POSTS,
    INCREASE,
    DECREASE
  } from './actionTypes'
import axios from 'axios'

export const increase = (count)=>{
  return{
    type: INCREASE,
    count
  }
}

export const decrease = ()=>{
  return {
    type: DECREASE
  }
}

  const start_get_posts = () =>{
    return{
      type:START_GET_POSTS
    }
  }

const get_posts_success = (data) => {
  return {
    type: GET_POSTS_SUCCESS,
    data
  }
}

  export const getPosts=()=>{
      return dispatch =>{
        dispatch(start_get_posts());
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(resp=>{
          dispatch(get_posts_success(resp.data))
        })
      }

      
  }