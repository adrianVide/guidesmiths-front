


function getApiData(action) {
    try {
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (error) {
        console.log(error)
    }
}