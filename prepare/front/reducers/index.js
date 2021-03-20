import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
// combineReducer은 리듀서끼리 합치게 해준다.
import user from './user';
import post from './post';

//(이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                user,
                post,
        });
            return combinedReducer(state, action);
        }
    }
};
// const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 console.log('HYDRATE', action);
//                 return {
//                     ...state,
//                     ...action.payload,
//                 };
//             // HYDRATE를 위해 인덕스 리듀션을 추가
//             default: return state;
//             // default: return state;를 안적으면 리턴값이 undifined가 뜬다.
//         }
//     },
//     user,
//     post,
// });

export default rootReducer;