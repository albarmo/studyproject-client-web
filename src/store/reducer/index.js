import { combineReducers } from "redux";
import userReducer from "./userReducer";
import facultyReducer from "./facultyReducer";
import courseReducer from "./courseReducer";

export default combineReducers({
  userReducer,
  facultyReducer,
  courseReducer,
});
