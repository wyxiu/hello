import { combineReducers } from 'redux';
import blogReducer from './BlogReducer';
import counterReducer from './CounterReducer';
export default combineReducers({
    blog:blogReducer,
    counter:counterReducer
})