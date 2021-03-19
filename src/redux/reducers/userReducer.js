import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState, action) {
    
  switch (action.type) {
      case types.LOAD_USERS_SUCCESS:
        return {
          ...state, 
          output:action.output,
          isFetching:action.isFetching
        };
      case types.BEGIN_API_CALL:
        return {
          ...state, 
          output:[],
          isFetching:true
        };
      default:
        return state;
    }
  }