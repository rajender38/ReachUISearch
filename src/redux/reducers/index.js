import { combineReducers } from "redux";
import output from "./userReducer";

const rootReducer = combineReducers({
  output,
});

export default rootReducer;