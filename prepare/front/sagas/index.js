import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
//sagas 의 post url를 등록
//백 서버 아이피 넣기
axios.defaults.withCredentials = true;
//쿠기 전달 허용 이제 saga에 공통적으로 적용된다.
export default function* rootSaga() {
    yield all([
        //all은 함수를 동시에 실행시킴
        fork(postSaga),
        fork(userSaga),
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