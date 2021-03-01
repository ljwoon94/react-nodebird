import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from '../reducers';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    return next(action);
};

const configureStore = () => {
    const middlewares = [thunkMiddleware, loggerMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))  //배포용
        : composeWithDevTools(applyMiddleware(...middlewares))   //개발용
    const store = createStore(reducer, enhancer);
    //enhancer 미들웨어 액션기록을 보기위해 사용
    //redux-devtools-extension
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE === 'development',
});
export default wrapper;