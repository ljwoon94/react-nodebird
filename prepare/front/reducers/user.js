export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

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
        type: 'LOG_IN_REQUEST',
        data,
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS',
        //로그아웃은 데이터가 필요없다.
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE',
        //로그아웃은 데이터가 필요없다.
    }
}

export const logoutRequestAction = (data) => {
    return {
        type: 'LOG_OUT_REQUEST',
        //로그아웃은 데이터가 필요없다.
    }
}

export const logoutSuccessAction = (data) => {
    return {
        type: 'LOG_OUT_SUCCESS',
        //로그아웃은 데이터가 필요없다.
    }
}

export const logoutFailureAction = (data) => {
    return {
        type: 'LOG_OUT_FAILURE',
        //로그아웃은 데이터가 필요없다.
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                me: action.data,

            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me: null,

            };
        default:
            return state;
    }
};

export default reducer;