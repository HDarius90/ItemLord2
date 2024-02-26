import { all, put, takeEvery } from "redux-saga/effects";
import { stayDay } from "./actions";
import { STAY_DAY } from "./ActionTypes";

export function* stayDaySaga() {
  yield put(stayDay());
}

export function* watchSomeAction() {
  yield takeEvery(STAY_DAY, stayDaySaga);
}

export default function* rootSaga() {
  yield all([watchSomeAction()]);
}
