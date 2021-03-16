webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDumyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDumyPost", function() { return generateDumyPost; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



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
  imagePaths: [],
  // imagePaths는 이미지 업로드할때 생기는 경로가 저장
  hasMorePosts: true,
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
  addCommentError: null
};
var generateDumyPost = function generateDumyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName() //faker 랜덤 닉네임 

      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      //faker 랜덤 문단
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName() //faker 랜덤 닉네임 

        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence() //faker 랜덤 문장

      }]
    };
  });
};
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        console.log('reducer post');
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts); //concat 합치기

        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = draft.mainPosts.length < 50;
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
          return v.id !== action.data;
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
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVteVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJv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QUFvRkgsR0FyRndELENBQXpDO0FBQUEsQ0FBaEI7O0FBeUZlVCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIxMjJmNmU5ZDQ1MjdjODc4YTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW1xyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgaWQ6IDEsXHJcbiAgICAgICAgLy8gICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgIC8vICAgICAgICAgbmlja25hbWU6ICfsnbTsoJXsmrQnLFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnO2BrCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICAvLyAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vMy5icC5ibG9nc3BvdC5jb20vLXBhSXZJNnhkRTJrL1dvdkhlbUZpNmpJL0FBQUFBQUFDTjIwLzZoQmVOU19YVk8waWRKbEt2VFJfaEtoRHNhb2I3cGRPZ0NMY0JHQXMvczE2MDAvMy5naWYnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jb2lucGFuLmNvbS9maWxlcy9hdHRhY2gvaW1hZ2VzLzE5OC8wMTMvODY2LzA5Ni9iNWEyMDMxMTZjOWZmMGQxMWExM2Q5YmI0M2Y3YmIzOS5naWYnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgc3JjOiAnaHR0cDovL3QxLmRhdW1jZG4ubmV0L3RodW1iL1IxMDI0eDAvP2ZuYW1lPWh0dHA6Ly9jZmlsZTI3MS51Zi5kYXVtLm5ldC9pbWFnZS8yNzZEQ0EzQzU1ODZCNzdFMjZGREIyJyxcclxuICAgICAgICAvLyAgICAgfV0sXHJcbiAgICAgICAgLy8gICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAn7Kmh7Jq0J1xyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICftmLjtmLjtmLjtmLgnLFxyXG4gICAgICAgIC8vICAgICB9LCB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbmlja25hbWU6ICfsqaHtm4gnLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIGNvbnRlbnQ6ICftl53tl53tl53tl50nLFxyXG4gICAgICAgIC8vICAgICB9XSxcclxuICAgICAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICAvLyBpbWFnZVBhdGhz64qUIOydtOuvuOyngCDsl4XroZzrk5ztlaDrlYwg7IOd6riw64qUIOqyveuhnOqwgCDsoIDsnqVcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAvL2Zha2VyIOuenOuNpCDri4nrhKTsnoQgXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAvL2Zha2VyIOuenOuNpCDrrLjri6hcclxuICAgIEltYWdlczogW3tcclxuICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgICAgLy9mYWtlciDrnpzrjaQg64uJ64Sk7J6EIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgICAgICAvL2Zha2VyIOuenOuNpCDrrLjsnqVcclxuICAgIH1dLFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG4vLyDsnbTsoJwg7JWI7JO064ukLlxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBJbWFnZXM6IFtdLFxyXG4vLyAgICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICfsnbTsoJXsmrQnLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gcmVkdWNlcuydgCDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrQg64K064qUIO2VqOyImCjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAvL2NvbmNhdCDtlansuZjquLBcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIC8v67aI67OA7ISx7J2EIOyViOyngO2CpOuKlCDqsbDrqbQgZHJhZnQoaW1tZXIp7J2EIOyViOyTsOuKlOqyg+ydtCDsoovri6QuXHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGltbWVyIOyTsOuptCDsnbTqsoPsnbQg7JyE7JeQIOyymOufvCDqsITri6jtlbTsp4Tri6QuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9