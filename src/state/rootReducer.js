import userReducer from "../User/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;
