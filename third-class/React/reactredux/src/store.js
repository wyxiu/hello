import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rooterReducer from './reducers'

 const store = createStore(
     rooterReducer,
     applyMiddleware(thunk)

 )
export default store