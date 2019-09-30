import defaultState from "./defaultState";
import { UPDATE_USER } from "./constants";

function userReducer(state = defaultState, action) {
  if (action.type === UPDATE_USER) {
    return [action.newUser, ...state];
  } else {
    return state;
  }
}

export default userReducer;
