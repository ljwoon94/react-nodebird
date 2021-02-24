export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

//액션 생성기
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
        //로그아웃은 데이터가 필요없다.
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,

            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,

            };
        default:
            return state;
    }
};

export default reducer;