import { UPDATE_USER, FETCH_USER } from "./constants";

const fetchUser = () => {
  return {
    type: FETCH_USER
  };
};

const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    newUser
  };
};

export { updateUser, fetchUser };

export default {
  updateUser,
  fetchUser
};
