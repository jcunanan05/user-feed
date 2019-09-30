import defaultState from "./defaultState";
import { UPDATE_USER } from "./constants";

function userReducer(state = defaultState, action) {
  if (action.type === UPDATE_USER) {
    return [...state, action.newUser];
  } else {
    return state;
  }
}

export default userReducer;
