import { all } from "redux-saga/effects";
import { fetchUser } from "../User/actions";

function* rootSaga() {
  yield all([fetchUser()]);
}

export default rootSaga;
