
import {
    INCREASE,
    DECREASE
} from '../action/actionTypes'
const counterReducer = (state = 10,action) => {
    switch (action.type) {
        case INCREASE:
            const count = action.count || 1;
            return state + count;
        case DECREASE:
            return state -1; 
        default:
           return state;
    }
}

export default counterReducer;