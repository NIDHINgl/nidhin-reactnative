import {combineReducers} from 'redux';
import products from '../screens/redux/Reducers';


const rootReducer = combineReducers({
    products,
});

export default (state, action) =>
  rootReducer(state,action);
