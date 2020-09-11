import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";

//worker function
export function* workerFetchPhones() {
  try {
    const resp = yield call(axios.get, "http://localhost:3001/phones");
    yield put({ type: "PHONE_LIST_SUCCESS", payload: { phones: resp.data } });
  } catch (error) {
    yield put({
      type: "PHONE_LIST_ERROR",
      payload: { error },
    });
  }
}


//watcher function
export function* watchFetchPhones() {
  yield takeLatest("PHONE_LIST_START", workerFetchPhones);
}
