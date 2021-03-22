webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [// {
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
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
}; // 이제 안씀
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

var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST';
var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
}; // 이제 안쓴다.
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case RETWEET_REQUEST:
        console.log('reducer post');
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
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
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case UPLOAD_IMAGES_REQUEST:
        console.log('reducer post');
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
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

      case LIKE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.Likers.push({
            id: action.data.UserId
          });
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

      case UNLIKE_POST_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Likers = _post.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
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
        draft.mainPosts = draft.mainPosts.concat(action.data); //concat 합치기

        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data; //singlePost 하나만 저장할때

        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        console.log('reducer post');
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data); //concat 합치기

        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = draft.mainPosts.length === 10;
        break;

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
        draft.imagePaths = []; //업로드 후 이미지패스 초기화

        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        console.log('reducer post');
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        }); //불변성을 안지키는 거면 draft(immer)을 안쓰는것이 좋다.

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

      case ADD_COMMENT_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post2.Comments.unshift(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break; // immer 쓰면 이것이 위에 처럼 간단해진다.
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
        }
        ;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJzaW5nbGVQb3N0IiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwidHlwZSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25zb2xlIiwibG9nIiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwidiIsImkiLCJwb3N0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImNvbmNhdCIsImxlbmd0aCIsIkNvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpD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QUFDSWEsYUFBSyxDQUFDMUMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTBDLGFBQUssQ0FBQ3hDLGVBQU4sR0FBd0JzQyxNQUFNLENBQUNNLEtBQS9CO0FBQ0E7O0FBQ0o7QUFDSTtBQWhMUjtBQW1MSCxHQXBMd0QsQ0FBekM7QUFBQSxDQUFoQjs7QUF3TGVSLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW2lkXS45YjEzMTcyMTIzYTRjMGQyYmZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAgICAgLy8gICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgbmlja25hbWU6ICfsnbTsoJXsmrQnLFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnO2BrCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICAvLyAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vMy5icC5ibG9nc3BvdC5jb20vLXBhSXZJNnhkRTJrL1dvdkhlbUZpNmpJL0FBQUFBQUFDTjIwLzZoQmVOU19YVk8waWRKbEt2VFJfaEtoRHNhb2I3cGRPZ0NMY0JHQXMvczE2MDAvMy5naWYnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jb2lucGFuLmNvbS9maWxlcy9hdHRhY2gvaW1hZ2VzLzE5OC8wMTMvODY2LzA5Ni9iNWEyMDMxMTZjOWZmMGQxMWExM2Q5YmI0M2Y3YmIzOS5naWYnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgc3JjOiAnaHR0cDovL3QxLmRhdW1jZG4ubmV0L3RodW1iL1IxMDI0eDAvP2ZuYW1lPWh0dHA6Ly9jZmlsZTI3MS51Zi5kYXVtLm5ldC9pbWFnZS8yNzZEQ0EzQzU1ODZCNzdFMjZGREIyJyxcclxuICAgICAgICAvLyAgICAgfV0sXHJcbiAgICAgICAgLy8gICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAn7Kmh7Jq0J1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICftmLjtmLjtmLjtmLgnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbmlja25hbWU6ICfsqaHtm4gnLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICftl53tl53tl53tl50nLFxyXG4gICAgICAgIC8vICAgICB9XSxcclxuICAgICAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgc2luZ2xlUG9zdDogW10sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIC8vIGltYWdlUGF0aHPripQg7J2066+47KeAIOyXheuhnOuTnO2VoOuVjCDsg53quLDripQg6rK966Gc6rCAIOyggOyepVxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8g7J207KCcIOyViOyUgFxyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgLy9mYWtlciDrnpzrjaQg64uJ64Sk7J6EIFxyXG4vLyAgICAgfSxcclxuLy8gICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgICAgLy9mYWtlciDrnpzrjaQg66y464uoXHJcbi8vICAgICBJbWFnZXM6IFt7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgfV0sXHJcbi8vICAgICBDb21tZW50czogW3tcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgICAgIC8vZmFrZXIg656c642kIOuLieuEpOyehCBcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbi8vICAgICAgICAgLy9mYWtlciDrnpzrjaQg66y47J6lXHJcbi8vICAgICB9XSxcclxuLy8gfSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG4vLyDsnbTsoJwg7JWI7JO064ukLlxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBJbWFnZXM6IFtdLFxyXG4vLyAgICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICfsnbTsoJXsmrQnLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gcmVkdWNlcuydgCDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrQg64K064qUIO2VqOyImCjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2Vycz1wb3N0Lkxpa2Vycy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAvL2NvbmNhdCDtlansuZjquLBcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgLy9zaW5nbGVQb3N0IO2VmOuCmOunjCDsoIDsnqXtlaDrlYxcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIC8vY29uY2F0IO2Vqey5mOq4sFxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgIC8v7JeF66Gc65OcIO2bhCDsnbTrr7jsp4DtjKjsiqQg7LSI6riw7ZmUXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDslYjsp4DtgqTripQg6rGw66m0IGRyYWZ0KGltbWVyKeydhCDslYjsk7DripTqsoPsnbQg7KKL64ukLlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGltbWVyIOyTsOuptCDsnbTqsoPsnbQg7JyE7JeQIOyymOufvCDqsITri6jtlbTsp4Tri6QuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9