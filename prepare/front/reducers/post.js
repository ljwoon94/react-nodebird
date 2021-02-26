export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이정운',
        },
        content: '첫 번째 게시글 #해시태크 #익스프레스',
        Images: [{
            src: 'https://3.bp.blogspot.com/-paIvI6xdE2k/WovHemFi6jI/AAAAAAACN20/6hBeNS_XVO0idJlKvTR_hKhDsaob7pdOgCLcBGAs/s1600/3.gif',
        }, {
            src: 'https://coinpan.com/files/attach/images/198/013/866/096/b5a203116c9ff0d11a13d9bb43f7bb39.gif',
        }, {
            src: 'http://t1.daumcdn.net/thumb/R1024x0/?fname=http://cfile271.uf.daum.net/image/276DCA3C5586B77E26FDB2',
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