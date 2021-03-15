import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import { FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from "../reducers/user";
import axios from 'axios';

function followAPI() {
    return axios.post('/api/follow');
}

function* follow(action) {
    try {
        console.log('saga follow');
        //const result = yield call(logInAPI, action.data);
        //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowAPI() {
    return axios.post('/api/unfollow');
}

function* unfollow(action) {
    try {
        console.log('saga unfollow');
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
}


function logInAPI(data) {
    return axios.post('/user/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn');
        const result = yield call(logInAPI, action.data);
        //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
        // npm i passport passport-local 로그인를 다루는 미들웨어
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }

    // 성공결과는 result.data
    // 실패결과는 err.response.data
    // put은 디스패치라 생각하면 좋다
}

function logOutAPI() {
    return axios.post('/user/logout');
}

function* logOut() {
    try {

        yield call(logOutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    return axios.post('/user', data);
}

function* signUp(action) {
    try {
        const result = yield call(signUpAPI, action.data);
        //작동순서 프론트 pages의 onSubmit에 데이터(아이디, 닉네임, 비밀번호)가
        //SIGNUPREQ 를 통해 리덕스랑 사가 실행, 데이터 함수는 action으로가
        //signUpAPI의 데이터로 이동 url을 통해 전송
        console.log(result);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
// yield take('LOG_IN_REQUEST');은 LOG_IN_REQUEST이 실행될때까지 기다리겠다.
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
};

