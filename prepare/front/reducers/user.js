import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "./post";
import produce from 'immer';

export const initialState = {
    logInLoading: false, // 로그인 시도중
    logInDone: false,  // 로그인 유무
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false, // 로그아웃 유무
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,  //
    signUpError: null, //
    changeNicknameLoading: false, //닉네임 변경 시도중
    changeNicknameDone: false,  //
    changeNicknameError: null, //
    me: null,
    signUpData: {},
    loginData: {},
};


export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            })
    }

}

//액션 생성기
export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}



export const logoutRequestAction = (data) => {
    return {
        type: LOG_OUT_REQUEST,
        //로그아웃은 데이터가 필요없다.
    }
}

const dummyUser = (data) => ({
    ...data,
    nickname: '쩡운',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: '오징어' }, { nickname: '명태' }, { nickname: '강아지' }],
    Followers: [{ nickname: '오징어' }, { nickname: '명태' }, { nickname: '강아지' }],
});

// reducer은 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성을 지키면서)
const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOG_IN_REQUEST:
                console.log('reducer logIn');
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
                break;
            case LOG_IN_SUCCESS:
                draft.logInLoading = false;
                draft.logInDone = true;
                draft.me = dummyUser(action.data);
                break;
            case LOG_IN_FAILURE:
                draft.logInLoading = false;
                draft.logInError = action.error;
                break;
            case LOG_OUT_REQUEST:
                draft.logOutLoading = true;
                draft.logOutDone = false;
                draft.logOutError = null;
                break;
            case LOG_OUT_SUCCESS:
                draft.logOutLoading = false;
                draft.logOutDone = true;
                draft.me = null;
                break;
            case LOG_OUT_FAILURE:
                draft.logOutLoading = false;
                draft.logOutError = action.error;
                break;

            case SIGN_UP_REQUEST:
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
                break;
            case SIGN_UP_SUCCESS:
                draft.signUpLoading = false;
                draft.signUpDone = true;
                break;
            case SIGN_UP_FAILURE:
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;

            case CHANGE_NICKNAME_REQUEST:
                draft.changeNicknameLoading = true;
                draft.changeNicknamepDone = false;
                draft.changeNicknameError = null;
                break;
            case CHANGE_NICKNAME_SUCCESS:
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                break;
            case CHANGE_NICKNAME_FAILURE:
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
            case ADD_POST_TO_ME:
                draft.me.Posts.unshift({ id: action.data });
                break;
            // immer를 사용하면 위에 처럼 줄일 수 있다.
            // return {
            //     ...state,
            //     me: {
            //         ...state.me,
            //         Posts: [{ id: action.data }, ...state.me.Posts],
            //     },
            // };
            case REMOVE_POST_OF_ME:
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
                break;
            // immer를 사용하면 위에 처럼 줄일 수 있다.
            // return {
            //     ...state,
            //     me: {
            //         ...state.me,
            //         Posts: state.me.Posts.filter((v) => v.id !== action.data),
            //     },
            // };
            default:
                break;
        }
    });
};

export default reducer;