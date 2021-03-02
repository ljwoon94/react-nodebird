import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
        //const result = yield call(logInAPI, action.data);
        //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }

    // 성공결과는 result.data
    // 실패결과는 err.response.data
    // put은 디스패치라 생각하면 좋다
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut() {
    try {

        //const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_OUT_SUCCESS',
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}
// yield take('LOG_IN_REQUEST');은 LOG_IN_REQUEST이 실행될때까지 기다리겠다.
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ]);
};