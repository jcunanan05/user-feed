import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_USER, UPDATE_USER } from "./constants";
import helpers from "./helpers";
import api from "./api";

function* fetchUser() {
  yield takeEvery(FETCH_USER, getUser);
}

function* getUser() {
  const results = yield call(api.getUser);
  yield put(updateUser(helpers.getAndTrimUser(results)));
}

const updateUser = newUser => {
  return {
    type: UPDATE_USER,
    newUser
  };
};

export { updateUser, fetchUser };
