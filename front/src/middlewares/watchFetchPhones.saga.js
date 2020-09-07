import { takeLatest, put, call } from "redux-saga/effects";
import { phoneListError, phoneListSuccess } from "../actions/actions";
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
// export function* workerFetchPhones() {
//     try {
//         const resp = yield call(axios.get, 'http://localhost:3001/phones');
//         yield put(phoneListSuccess(resp.data))
//     } catch (error) {
//         yield put(phoneListError(error.message))
//     }
// }

//watcher function
export function* watchFetchPhones() {
  yield takeLatest("PHONE_LIST_START", workerFetchPhones);
}
