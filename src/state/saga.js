import { all } from "redux-saga/effects";
import { fetchUser } from "../User/saga";

function* rootSaga() {
  yield all([fetchUser()]);
}

export default rootSaga;
