import { call, all } from 'redux-saga/effects' 
import { watchFetchPhones } from "./watchFetchPhones.saga";

export function* rootSaga() {
    yield all([call(watchFetchPhones)])
}