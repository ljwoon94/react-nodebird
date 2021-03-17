import { all, delay, fork, put, takeLatest ,call} from "redux-saga/effects";
import {
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS,
    REMOVE_POST_FAILURE, REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
} from "../reducers/post";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";
import axios from 'axios';

function loadPostsAPI(data) {
    return axios.get('/posts', data);
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.data);
        console.log('saga post');
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        });
    }
}

function addPostAPI(data) {
    return axios.post('/post', {content:data});
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        console.log('saga post');
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function removePostAPI(data) {
    return axios.post('/api/removePost', data);
}

function* removePost(action) {
    try {
        //const result = yield call(removePostAPI, action.data);
        console.log('saga post');
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}


function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}


function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}