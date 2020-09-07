import {takeLatest} from 'redux-saga/effects'
//worker function
function* workerFetchPhones()



//watcher function
function* watchFetchPhones() {
    yield takeLatest('FETCH_PHONES', workerFetchPhones)
}