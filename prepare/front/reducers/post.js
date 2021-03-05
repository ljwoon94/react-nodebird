import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이정운',
        },
        content: '첫 번째 게시글 #해시태크 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src: 'https://3.bp.blogspot.com/-paIvI6xdE2k/WovHemFi6jI/AAAAAAACN20/6hBeNS_XVO0idJlKvTR_hKhDsaob7pdOgCLcBGAs/s1600/3.gif',
        }, {
            id: shortId.generate(),
            src: 'https://coinpan.com/files/attach/images/198/013/866/096/b5a203116c9ff0d11a13d9bb43f7bb39.gif',
        }, {
            id: shortId.generate(),
            src: 'http://t1.daumcdn.net/thumb/R1024x0/?fname=http://cfile271.uf.daum.net/image/276DCA3C5586B77E26FDB2',
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: '쩡운'
            },
            content: '호호호호',
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: '쩡훈',
            },
            content: '헝헝헝헝',
        }],
    }],
    imagePaths: [],
    // imagePaths는 이미지 업로드할때 생기는 경로가 저장
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'ADD_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const ADD_POST_TO_ME = 'ADD_PPOST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});


const dummyPost = (data) => ({
    id: data.id,
    User: {
        id: 1,
        nickname: '이정운',
    },
    content: data.content,
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '이정운',
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            console.log('reducer post');
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case REMOVE_POST_REQUEST:
            console.log('reducer post');
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            };
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            };
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };

        default:
            return state;
    }
};

export default reducer;