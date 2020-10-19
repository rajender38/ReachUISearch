import * as types from './actionTypes';
import * as usersApi from '../../api/userApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadUsersuccess(output,isFetching) {
  debugger;
  return {
    type: types.LOAD_USERS_SUCCESS,
    output,
    isFetching
  };
}

export function GetResults(fields,browse,isFetching,isStaticWebPages) {
  debugger;
  return function (dispatch) {
    debugger;
    dispatch(beginApiCall());
    return usersApi
      .getUsers(fields,browse,isStaticWebPages)
      .then((output) => {
        debugger;
        isFetching=false;
        dispatch(loadUsersuccess(output,isFetching));
      })
      .catch((error) => {
        debugger;
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
