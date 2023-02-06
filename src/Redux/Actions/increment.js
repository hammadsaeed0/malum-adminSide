import store from '../store';
import types from '../types'


// For Increment 
export function increment(data){
  console.log("Increament Function Call",data);
  return{
  type: types.INCREMENT,
  payload: data,
  }
} 
