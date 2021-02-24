export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이정운',
        },
        content: '첫 번째 게시글 #해시태크 #익스프레스',
        Images: [{
            src: '../images/캡처1.jpg',
        }, {
            src: '../images/캡처2.jpg',
        }, {
            src: '../images/캡처3.jpg',
        }],
        Comments: [{
            User: {
                nickname: '쩡운'
            },
            content: '호호호호',
        }, {
            User: {
                nickname: '쩡훈',
            },
            content: '헝헝헝헝',
        }]
    }],
    imagePaths: [],
    // imagePaths는 이미지 업로드할때 생기는 경로가 저장
    PostAdded: false,
    // 개체 추가시 true로 바뀜
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터 입니다.',
    User: {
        id: 1,
        nickname: '쩡쩡훈'
    },
    Images: [],
    Comments: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
};

export default reducer;