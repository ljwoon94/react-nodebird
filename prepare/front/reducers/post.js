import produce from '../util/produce';

export const initialState = {
    mainPosts: [
        // {
        //     id: 1,
        //     User: {
        //         id: 1,
        //         nickname: '이정운',
        //     },
        //     content: '첫 번째 게시글 #해시태크 #익스프레스',
        //     Images: [{
        //         id: shortId.generate(),
        //         src: 'https://3.bp.blogspot.com/-paIvI6xdE2k/WovHemFi6jI/AAAAAAACN20/6hBeNS_XVO0idJlKvTR_hKhDsaob7pdOgCLcBGAs/s1600/3.gif',
        //     }, {
        //         id: shortId.generate(),
        //         src: 'https://coinpan.com/files/attach/images/198/013/866/096/b5a203116c9ff0d11a13d9bb43f7bb39.gif',
        //     }, {
        //         id: shortId.generate(),
        //         src: 'http://t1.daumcdn.net/thumb/R1024x0/?fname=http://cfile271.uf.daum.net/image/276DCA3C5586B77E26FDB2',
        //     }],
        //     Comments: [{
        //         id: shortId.generate(),
        //         User: {
        //             id: shortId.generate(),
        //             nickname: '쩡운'
        //         },
        //         content: '호호호호',
        //     }, {
        //         id: shortId.generate(),
        //         User: {
        //             id: shortId.generate(),
        //             nickname: '쩡훈',
        //         },
        //         content: '헝헝헝헝',
        //     }],
        // }
    ],
    singlePost: [],
    imagePaths: [],
    // imagePaths는 이미지 업로드할때 생기는 경로가 저장
    hasMorePosts: true,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    updatePostLoading: false,
    updatePostDone: false,
    updatePostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,
};

// 이제 안씀
// export const generateDumyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//         //faker 랜덤 닉네임 
//     },
//     content: faker.lorem.paragraph(),
//     //faker 랜덤 문단
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//             //faker 랜덤 닉네임 
//         },
//         content: faker.lorem.sentence(),
//         //faker 랜덤 문장
//     }],
// }));

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

// 이제 안쓴다.
// const dummyPost = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: '이정운',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: '이정운',
//     },
// });


// reducer은 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성을 지키면서)
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case RETWEET_REQUEST:
            console.log('reducer post');
            draft.retweetLoading = true;
            draft.retweetDone = false;
            draft.retweetError = null;
            break;
        case RETWEET_SUCCESS:{
            draft.retweetLoading = false;
            draft.retweetDone = true;
            draft.mainPosts.unshift(action.data);
            break;
        }
        case RETWEET_FAILURE:
            draft.retweetLoading = false;
            draft.retweetError = action.error;
            break;
        
        case REMOVE_IMAGE:
            draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

        case UPLOAD_IMAGES_REQUEST:
            console.log('reducer post');
            draft.uploadImagesLoading = true;
            draft.uploadImagesDone = false;
            draft.uploadImagesError = null;
            break;
        case UPLOAD_IMAGES_SUCCESS:{
            draft.imagePaths = draft.imagePaths.concat(action.data);
            draft.uploadImagesLoading = false;
            draft.uploadImagesDone = true;
            break;
        }
        case UPLOAD_IMAGES_FAILURE:
            draft.uploadImagesLoading = false;
            draft.uploadImagesError = action.error;
            break;

        case LIKE_POST_REQUEST:
            console.log('reducer post');
            draft.likePostLoading = true;
            draft.likePostDone = false;
            draft.likePostError = null;
            break;
        case LIKE_POST_SUCCESS:{
            const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
            post.Likers.push({id: action.data.UserId});
            draft.likePostLoading = false;
            draft.likePostDone = true;
            break;
        }
        case LIKE_POST_FAILURE:
            draft.likePostLoading = false;
            draft.likePostError = action.error;
            break;
        
        case UNLIKE_POST_REQUEST:
            console.log('reducer post');
            draft.unlikePostLoading = true;
            draft.unlikePostDone = false;
            draft.unlikePostError = null;
            break;
        case UNLIKE_POST_SUCCESS:{
            const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
            post.Likers=post.Likers.filter((v)=>v.id !== action.data.UserId);
            draft.unlikePostLoading = false;
            draft.unlikePostDone = true;
            break;
        }
        case UNLIKE_POST_FAILURE:
            draft.unlikePostLoading = false;
            draft.unlikePostError = action.error;
            break;
        
        case LOAD_POST_REQUEST:
            console.log('reducer post');
            draft.loadPostLoading = true;
            draft.loadPostDone = false;
            draft.loadPostError = null;
            break;
        case LOAD_POST_SUCCESS:
            draft.mainPosts = draft.mainPosts.concat(action.data);
            //concat 합치기
            draft.loadPostLoading = false;
            draft.loadPostDone = true;
            draft.singlePost = action.data;
            //singlePost 하나만 저장할때
            break;
        case LOAD_POST_FAILURE:
            draft.loadPostLoading = false;
            draft.loadPostError = action.error;
            break;    
            
        //액션을 동시에 사용할 수 있는 경우는
        //한페이지에서 이 액션을 같이 사용하는게 아니라면 가능
        case LOAD_USER_POSTS_REQUEST:
        case LOAD_HASHTAG_POSTS_REQUEST:
        case LOAD_POSTS_REQUEST:
            console.log('reducer post');
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            break;
        case LOAD_USER_POSTS_SUCCESS:
        case LOAD_HASHTAG_POSTS_SUCCESS:
        case LOAD_POSTS_SUCCESS:
            draft.mainPosts = draft.mainPosts.concat(action.data);
            //concat 합치기
            draft.loadPostsLoading = false;
            draft.loadPostsDone = true;
            draft.hasMorePosts = draft.mainPosts.length === 10;
            break;
        case LOAD_USER_POSTS_FAILURE:
        case LOAD_HASHTAG_POSTS_FAILURE:
        case LOAD_POSTS_FAILURE:
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;

        case ADD_POST_REQUEST:
            console.log('reducer post');
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
        case ADD_POST_SUCCESS:
            draft.mainPosts.unshift(action.data);
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.imagePaths = [];
            //업로드 후 이미지패스 초기화
            break;
        case ADD_POST_FAILURE:
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;

        case UPDATE_POST_REQUEST:
            console.log('reducer post');
            draft.updatePostLoading = true;
            draft.updatePostDone = false;
            draft.updatePostError = null;
            break;
        case UPDATE_POST_SUCCESS:
            draft.mainPosts.find((v) => v.id === action.data.PostId).content = action.data.content;
            draft.updatePostLoading = false;
            draft.updatePostDone = true;
            break;
        case UPDATE_POST_FAILURE:
            draft.updatePostLoading = false;
            draft.updatePostError = action.error;
            break;

        case REMOVE_POST_REQUEST:
            console.log('reducer post');
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;
        case REMOVE_POST_SUCCESS:
            draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
            //불변성을 안지키는 거면 draft(immer)을 안쓰는것이 좋다.
            draft.removePostLoading = false;
            draft.removePostDone = true;
            break;
        case REMOVE_POST_FAILURE:
            draft.removePostLoading = false;
            draft.removePostError = action.error;
            break;

        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;
        case ADD_COMMENT_SUCCESS: {
            const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
            post.Comments.unshift(action.data);
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            break;
            // immer 쓰면 이것이 위에 처럼 간단해진다.
            // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            // const post = { ...state.mainPosts[postIndex] };
            // post.Comments = [dummyComment(action.data.content), ...post.Comments];
            // const mainPosts = [...state.mainPosts];
            // mainPosts[postIndex] = post;
            // return {
            //     ...state,
            //     mainPosts,
            //     addCommentLoading: false,
            //     addCommentDone: true,
            // };
        };
        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = false;
            draft.addCommentError = action.error;
            break;
        default:
            break;
    }

});



export default reducer;