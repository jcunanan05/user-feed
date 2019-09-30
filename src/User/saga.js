import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_USER } from "./constants";
import api from "./api";
import helpers from "./helpers";
import actions from "./actions";

function* fetchUser() {
  yield takeEvery(FETCH_USER, getUser);
}

function* getUser() {
  const results = yield call(api.getUser);
  yield put(actions.updateUser(helpers.getAndTrimUser(results)));
}

export { fetchUser };

export default {
  fetchUser
};
