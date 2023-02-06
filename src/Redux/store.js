import {applyMiddleware, createStore} from 'redux'
import appReducer from './Reducers';

const store = createStore(appReducer); 

export default store