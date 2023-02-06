import types from "../types";

let initialState = {
  num : ''
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
     case types.INCREMENT:{
      let data = action.payload;
      console.log("Increament Reducer Call",data);
      return {...state , num : data}
    }
    case types.DECREMENT:{
      let data = action.payload;
        return {...state, num : data}
      } 
      default: 
       return {...state}
  }
}
export default counterReducer;