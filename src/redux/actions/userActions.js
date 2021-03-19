import * as types from './actionTypes';
import * as usersApi from '../../api/userApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadUsersuccess(output,isFetching) {
  
  return {
    type: types.LOAD_USERS_SUCCESS,
    output,
    isFetching
  };
}

export function GetResults(fields,browse,isFetching) {
  
  return function (dispatch) {
    
    dispatch(beginApiCall());
    return usersApi
      .getUsers(fields,browse)
      .then((output) => {
        
        isFetching=false;
        dispatch(loadUsersuccess(output,isFetching));
      })
      .catch((error) => {
        
        isFetching=false;
        dispatch(apiCallError(error,isFetching));
        throw error;
      });
  };
}
