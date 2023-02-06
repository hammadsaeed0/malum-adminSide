import types from '../types'

// For Decrement 

export function decrement(data){
  return {
    type: types.DECREMENT,
    payload: data
  }
}