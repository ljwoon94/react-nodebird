import { all, call, fork, put, take } from 'redux-saga/effects';
import axios from 'axios';


function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(logInAPI, action.data);
        //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data,
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
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/api/addPost', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data,
        });
    }
}

function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn);
}
// yield take('LOG_IN_REQUEST');은 LOG_IN_REQUEST이 실행될때까지 기다리겠다.
function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}


export default function* rootSaga() {
    yield all([
        //all은 함수를 동시에 실행시킴
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
        // fork는 비동기 함수를 실행하는 것
        // 요청을 보내버리고 결과를 기다리지 않고 다음 것이 실행됨
        // call은 동기 함수를 실행하는 것
        // 결과를 기다렸다 다음 것이 실행됨. 
    ]);
}
    // generate 함수 function*
    // const gen = function*(){
    // console.log(1);
    // yield;
    // console.log(2);
    // yield;   
    //}
    //
    // const generator = gen();
    // generator.next()  generate함수를 실행시키려면 next()필요
    // console.log(1)실행. 다시 generator 함수를 실행하면
    // console.log(2)실행 generate는 yield가 나오는 곳에서 멈춤
    // 중단점이 있는 함수. 이것이 saga
    // done: true가 나오면 멈춤
    //
    // generate 함수로 무한 표현하기
    // let i = 0;
    // const gen = function* () {
    //     while (true) {
    //         yield i++;
    //     }
    // }
    // const g= gen();
    // g.next();