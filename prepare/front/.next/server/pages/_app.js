module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


var _jsxFileName = "C:\\job\\react-nodebird\\prepare\\front\\pages\\_app.js";






const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");

 // combineReducer은 리듀서끼리 합치게 해준다.


 //(이전상태, 액션) => 다음상태

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        }); //combinedReducer user와 post가 합친 리듀서 생성

        return combinedReducer(state, action);
      }
  }
}; // const rootReducer = combineReducers({
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


/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
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

const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // 이제 안쓴다.
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
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
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
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
      draft.mainPosts = draft.mainPosts.concat(action.data); //concat 합치기

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
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId); //불변성을 안지키는 거면 draft(immer)을 안쓰는것이 좋다.

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
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginAction, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  removeFollowerLoading: false,
  //팔로워 차단 가져오기
  removeFollowerDone: false,
  removeFollowerError: null,
  loadMyInfoLoading: false,
  //유저정보 가져오기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  // 팔로우 유무
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  // 언팔로우 유무
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  // 로그인 유무
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  // 로그아웃 유무
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  //
  signUpError: null,
  //
  loadFollowersLoading: false,
  // 팔로워 표시 시도중
  loadFollowersDone: false,
  //
  loadFollowersError: null,
  //
  loadFollowingsLoading: false,
  // 팔로잉 표시 시도중
  loadFollowingsDone: false,
  //
  loadFollowingsError: null,
  //
  changeNicknameLoading: false,
  //닉네임 변경 시도중
  changeNicknameDone: false,
  //
  changeNicknameError: null,
  //
  me: null,
  signUpData: {},
  loginData: {}
};
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const loginAction = data => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios.post('/api/login').then(res => {
      dispatch(loginSuccessAction(res.data));
    }).catch(err => {
      dispatch(loginFailureAction(err));
    });
  };
}; //액션 생성기

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST //로그아웃은 데이터가 필요없다.

  };
}; // const dummyUser = (data) => ({
//     ...data,
//     nickname: '쩡운',
//     id: 1,
//     Posts: [{ id: 1 }],
//     Followings: [{ nickname: '오징어' }, { nickname: '명태' }, { nickname: '강아지' }],
//     Followers: [{ nickname: '오징어' }, { nickname: '명태' }, { nickname: '강아지' }],
// });
// reducer은 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성을 지키면서)

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerDone = false;
      draft.removeFollowerError = null;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.removeFollowerDone = true;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.data.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersDone = false;
      draft.loadFollowersError = null;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.loadFollowersDone = true;
      draft.me.Followers = action.data;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.data.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsDone = false;
      draft.loadFollowingsError = null;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsDone = true;
      draft.me.Followings = action.data;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.data.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoDone = false;
      draft.loadMyInfoError = null;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoDone = true;
      draft.me = action.data;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.data.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowDone = false;
      draft.unfollowError = null;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowDone = true;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case LOG_IN_REQUEST:
      console.log('reducer logIn');
      draft.logInLoading = true;
      draft.logInDone = false;
      draft.logInError = null;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.logInDone = true;
      draft.me = action.data;
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
      draft.changeNicknameDone = false;
      draft.changeNicknameError = null;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
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
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065'; //sagas 의 post url를 등록

axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; //쿠기 전달 허용 이제 saga에 공통적으로 적용된다.

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([//all은 함수를 동시에 실행시킴
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"]) // fork는 비동기 함수를 실행하는 것
  // 요청을 보내버리고 결과를 기다리지 않고 다음 것이 실행됨
  // call은 동기 함수를 실행하는 것
  // 결과를 기다렸다 다음 것이 실행됨. 
  ]);
} // generate 함수 function*
// const gen = function*(){
// console.log(1);
// yield;
// console.log(2);
// yield;   
//}
//
// const generator = gen();
// generator.next()  generate함수를 실행시키려면 next()필요
// console.log(1)실행. 다시 generator 함수를 실행하면
// console.log(2)실행 generate는 yield가 나오는 곳에서 멈춤
// 중단점이 있는 함수. 이것이 saga
// done: true가 나오면 멈춤
//
// generate 함수로 무한 표현하기
// let i = 0;
// const gen = function* () {
//     while (true) {
//         yield i++;
//     }
// }
// const g= gen();
// g.next();

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/post/${data}`); // lastId가 null이면 0으로
}

function* loadPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/posts?lastId=${lastId || 0}`); // lastId가 null이면 0으로
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`); // lastId가 null이면 0으로
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`); // lastId가 null이면 0으로
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchLoadPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_POST_REQUEST"], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_1__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_1__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    console.log('saga removeFollower');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    console.log('saga loadFollowers');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    console.log('saga loadFollowings');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    console.log('saga changeNickname');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');
}

function* loadMyInfo() {
  try {
    console.log('saga loadMyInfo');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI); //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
    // npm i passport passport-local 로그인를 다루는 미들웨어

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  } // 성공결과는 result.data
  // 실패결과는 err.response.data
  // put은 디스패치라 생각하면 좋다

}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    console.log('saga follow');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data); //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    console.log('saga unfollow');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn');
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 
    // npm i passport passport-local 로그인를 다루는 미들웨어

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  } // 성공결과는 result.data
  // 실패결과는 err.response.data
  // put은 디스패치라 생각하면 좋다

}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data); //작동순서 프론트 pages의 onSubmit에 데이터(아이디, 닉네임, 비밀번호)가
    //SIGNUPREQ 를 통해 리덕스랑 사가 실행, 데이터 함수는 action으로가
    //signUpAPI의 데이터로 이동 url을 통해 전송

    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn);
} // yield take('LOG_IN_REQUEST');은 LOG_IN_REQUEST이 실행될때까지 기다리겠다.


function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}
;

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined //배포용
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)); //개발용

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], enhancer); //enhancer 미들웨어 액션기록을 보기위해 사용
  //redux-devtools-extension

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]); //sagaTask 서바사이드 렌더링을 하기위해 필요

  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: process.env.NODE === 'development'
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVkUmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwic2luZ2xlUG9zdCIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwibGlrZVBvc3RMb2FkaW5nIiwibGlrZVBvc3REb25lIiwibGlrZVBvc3RFcnJvciIsInVubGlrZVBvc3RMb2FkaW5nIiwidW5saWtlUG9zdERvbmUiLCJ1bmxpa2VQb3N0RXJyb3IiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJldHdlZXRMb2FkaW5nIiwicmV0d2VldERvbmUiLCJyZXR3ZWV0RXJyb3IiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsIkxPQURfVVNFUl9QT1NUU19TVUNDRVNTIiwiTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsIkxPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTIiwiTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJSRVRXRUVUX1JFUVVFU1QiLCJSRVRXRUVUX1NVQ0NFU1MiLCJSRVRXRUVUX0ZBSUxVUkUiLCJSRU1PVkVfSU1BR0UiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImVycm9yIiwiZmlsdGVyIiwidiIsImkiLCJmaW5kIiwiaWQiLCJQb3N0SWQiLCJMaWtlcnMiLCJwdXNoIiwiVXNlcklkIiwiY29uY2F0IiwibGVuZ3RoIiwiQ29tbWVudHMiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MiLCJSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiTE9BRF9NWV9JTkZPX1NVQ0NFU1MiLCJMT0FEX01ZX0lORk9fRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJjYXRjaCIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dlcnMiLCJGb2xsb3dpbmdzIiwidXNlckluZm8iLCJuaWNrbmFtZSIsIlBvc3RzIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInJlc3BvbnNlIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsImxpa2VQb3N0IiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJsb2FkUG9zdEFQSSIsImdldCIsImxvYWRQb3N0IiwibG9hZFBvc3RzQVBJIiwibGFzdElkIiwibG9hZFBvc3RzIiwibG9hZFVzZXJQb3N0c0FQSSIsImxvYWRVc2VyUG9zdHMiLCJsb2FkSGFzaHRhZ1Bvc3RzQVBJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZEhhc2h0YWdQb3N0cyIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaFJldHdlZXQiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaExvYWRVc2VyUG9zdHMiLCJ3YXRjaExvYWRIYXNodGFnUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRNeUluZm9BUEkiLCJsb2FkTXlJbmZvIiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsIndhdGNoTG9hZEZvbGxvd2VycyIsIndhdGNoTG9hZEZvbGxvd2luZ3MiLCJ3YXRjaENoYW5nZU5pY2tuYW1lIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hMb2FkVXNlciIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwibG9nZ2VyTWlkZGxld2FyZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJwcm9jZXNzIiwi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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUNBLE1BQU1DLHFCQUFxQixHQUFHLHVCQUE5QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLE1BQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUVBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUNBLE1BQU1DLDBCQUEwQixHQUFHLDRCQUFuQztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLE1B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Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IHByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbi8vIGNvbWJpbmVSZWR1Y2Vy7J2AIOumrOuTgOyEnOuBvOumrCDtlansuZjqsowg7ZW07KSA64ukLlxyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5cclxuLy8o7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9jb21iaW5lZFJlZHVjZXIgdXNlcuyZgCBwb3N06rCAIO2Vqey5nCDrpqzrk4DshJwg7IOd7ISxXHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vLyBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vICAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuLy8gICAgICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgIC8vIEhZRFJBVEXrpbwg7JyE7ZW0IOyduOuNleyKpCDrpqzrk4DshZjsnYQg7LaU6rCAXHJcbi8vICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuLy8gICAgICAgICAgICAgLy8gZGVmYXVsdDogcmV0dXJuIHN0YXRlO+ulvCDslYjsoIHsnLzrqbQg66as7YS06rCS7J20IHVuZGlmaW5lZOqwgCDrnKzri6QuXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHVzZXIsXHJcbi8vICAgICBwb3N0LFxyXG4vLyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlkOiAxLFxyXG4gICAgICAgIC8vICAgICBVc2VyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogMSxcclxuICAgICAgICAvLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5ztgawgI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgLy8gICAgIEltYWdlczogW3tcclxuICAgICAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBzcmM6ICdodHRwczovLzMuYnAuYmxvZ3Nwb3QuY29tLy1wYUl2STZ4ZEUyay9Xb3ZIZW1GaTZqSS9BQUFBQUFBQ04yMC82aEJlTlNfWFZPMGlkSmxLdlRSX2hLaERzYW9iN3BkT2dDTGNCR0FzL3MxNjAwLzMuZ2lmJyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vY29pbnBhbi5jb20vZmlsZXMvYXR0YWNoL2ltYWdlcy8xOTgvMDEzLzg2Ni8wOTYvYjVhMjAzMTE2YzlmZjBkMTFhMTNkOWJiNDNmN2JiMzkuZ2lmJyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHA6Ly90MS5kYXVtY2RuLm5ldC90aHVtYi9SMTAyNHgwLz9mbmFtZT1odHRwOi8vY2ZpbGUyNzEudWYuZGF1bS5uZXQvaW1hZ2UvMjc2RENBM0M1NTg2Qjc3RTI2RkRCMicsXHJcbiAgICAgICAgLy8gICAgIH1dLFxyXG4gICAgICAgIC8vICAgICBDb21tZW50czogW3tcclxuICAgICAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ+ypoeyatCdcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiAn7Zi47Zi47Zi47Zi4JyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAn7Kmh7ZuIJyxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiAn7Zed7Zed7Zed7ZedJyxcclxuICAgICAgICAvLyAgICAgfV0sXHJcbiAgICAgICAgLy8gfVxyXG4gICAgXSxcclxuICAgIHNpbmdsZVBvc3Q6IFtdLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICAvLyBpbWFnZVBhdGhz64qUIOydtOuvuOyngCDsl4XroZzrk5ztlaDrlYwg7IOd6riw64qUIOqyveuhnOqwgCDsoIDsnqVcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbi8vIOydtOygnCDslYjslIBcclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVteVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgIC8vZmFrZXIg656c642kIOuLieuEpOyehCBcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIC8vZmFrZXIg656c642kIOusuOuLqFxyXG4vLyAgICAgSW1hZ2VzOiBbe1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICAgIH1dLFxyXG4vLyAgICAgQ29tbWVudHM6IFt7XHJcbi8vICAgICAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgICAgICAvL2Zha2VyIOuenOuNpCDri4nrhKTsnoQgXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4vLyAgICAgICAgIC8vZmFrZXIg656c642kIOusuOyepVxyXG4vLyAgICAgfV0sXHJcbi8vIH0pKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG4vLyDsnbTsoJwg7JWI7JO064ukLlxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuLy8gICAgIH0sXHJcbi8vICAgICBJbWFnZXM6IFtdLFxyXG4vLyAgICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmlja25hbWU6ICfsnbTsoJXsmrQnLFxyXG4vLyAgICAgfSxcclxuLy8gfSk7XHJcblxyXG5cclxuLy8gcmVkdWNlcuydgCDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrQg64K064qUIO2VqOyImCjrtojrs4DshLHsnYQg7KeA7YKk66m07IScKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goe2lkOiBhY3Rpb24uZGF0YS5Vc2VySWR9KTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICBwb3N0Lkxpa2Vycz1wb3N0Lkxpa2Vycy5maWx0ZXIoKHYpPT52LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAvL2NvbmNhdCDtlansuZjquLBcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgLy9zaW5nbGVQb3N0IO2VmOuCmOunjCDsoIDsnqXtlaDrlYxcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy/slaHshZjsnYQg64+Z7Iuc7JeQIOyCrOyaqe2VoCDsiJgg7J6I64qUIOqyveyasOuKlFxyXG4gICAgICAgIC8v7ZWc7Y6Y7J207KeA7JeQ7IScIOydtCDslaHshZjsnYQg6rCZ7J20IOyCrOyaqe2VmOuKlOqyjCDslYTri4jrnbzrqbQg6rCA64qlXHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgLy9jb25jYXQg7ZWp7LmY6riwXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgICAgIC8v7JeF66Gc65OcIO2bhCDsnbTrr7jsp4DtjKjsiqQg7LSI6riw7ZmUXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVkdWNlciBwb3N0Jyk7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDslYjsp4DtgqTripQg6rGw66m0IGRyYWZ0KGltbWVyKeydhCDslYjsk7DripTqsoPsnbQg7KKL64ukLlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGltbWVyIOyTsOuptCDsnbTqsoPsnbQg7JyE7JeQIOyymOufvCDqsITri6jtlbTsp4Tri6QuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSwgLy/tjJTroZzsm4wg7LCo64uoIOqwgOyguOyYpOq4sFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJEb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXHJcbiAgICBsb2FkTXlJbmZvTG9hZGluZzogZmFsc2UsIC8v7Jyg7KCA7KCV67O0IOqwgOyguOyYpOq4sFxyXG4gICAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZE15SW5mb0Vycm9yOiBudWxsLFxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICBmb2xsb3dEb25lOiBmYWxzZSwgIC8vIO2MlOuhnOyasCDsnKDrrLRcclxuICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSwgIC8vIOyWuO2MlOuhnOyasCDsnKDrrLRcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLCAgLy8g66Gc6re47J24IOycoOustFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOycoOustFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsICAvL1xyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsIC8vXHJcbiAgICBsb2FkRm9sbG93ZXJzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOybjCDtkZzsi5wg7Iuc64+E7KSRXHJcbiAgICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsICAvL1xyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLCAvL1xyXG4gICAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7J6JIO2RnOyLnCDsi5zrj4TspJFcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsICAvL1xyXG4gICAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCwgLy9cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsICAvL1xyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCwgLy9cclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19SRVFVRVNUID0gJ0xPQURfTVlfSU5GT19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19TVUNDRVNTID0gJ0xPQURfTVlfSU5GT19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfTVlfSU5GT19GQUlMVVJFID0gJ0xPQURfTVlfSU5GT19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfRkFJTFVSRSA9ICdMT0FEX1VTRVJfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL+yVoeyFmCDsg53shLHquLBcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgLy/roZzqt7jslYTsm4PsnYAg642w7J207YSw6rCAIO2VhOyalOyXhuuLpC5cclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICAuLi5kYXRhLFxyXG4vLyAgICAgbmlja25hbWU6ICfsqaHsmrQnLFxyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbi8vICAgICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ+yYpOynleyWtCcgfSwgeyBuaWNrbmFtZTogJ+uqhe2DnCcgfSwgeyBuaWNrbmFtZTogJ+qwleyVhOyngCcgfV0sXHJcbi8vICAgICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn7Jik7KeV7Ja0JyB9LCB7IG5pY2tuYW1lOiAn66qF7YOcJyB9LCB7IG5pY2tuYW1lOiAn6rCV7JWE7KeAJyB9XSxcclxuLy8gfSk7XHJcblxyXG4vLyByZWR1Y2Vy7J2AIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtCDrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5kYXRhLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IGFjdGlvbi5kYXRhLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmRhdGEuZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmRhdGEuZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPQURfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7IFxyXG5cclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9nSW4nKTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7JeQIOyymOufvCDspITsnbwg7IiYIOyeiOuLpC5cclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7JeQIOyymOufvCDspITsnbwg7IiYIOyeiOuLpC5cclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuLy9zYWdhcyDsnZggcG9zdCB1cmzrpbwg65Ox66GdXHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcbi8v7L+g6riwIOyghOuLrCDtl4jsmqkg7J207KCcIHNhZ2Hsl5Ag6rO17Ya17KCB7Jy866GcIOyggeyaqeuQnOuLpC5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICAvL2FsbOydgCDtlajsiJjrpbwg64+Z7Iuc7JeQIOyLpO2WieyLnO2CtFxyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgICAgIC8vIGZvcmvripQg67mE64+Z6riwIO2VqOyImOulvCDsi6TtlontlZjripQg6rKDXHJcbiAgICAgICAgLy8g7JqU7LKt7J2EIOuztOuCtOuyhOumrOqzoCDqsrDqs7zrpbwg6riw64uk66as7KeAIOyViuqzoCDri6TsnYwg6rKD7J20IOyLpO2WieuQqFxyXG4gICAgICAgIC8vIGNhbGzsnYAg64+Z6riwIO2VqOyImOulvCDsi6TtlontlZjripQg6rKDXHJcbiAgICAgICAgLy8g6rKw6rO866W8IOq4sOuLpOuguOuLpCDri6TsnYwg6rKD7J20IOyLpO2WieuQqC4gXHJcbiAgICBdKTtcclxufVxyXG4gICAgLy8gZ2VuZXJhdGUg7ZWo7IiYIGZ1bmN0aW9uKlxyXG4gICAgLy8gY29uc3QgZ2VuID0gZnVuY3Rpb24qKCl7XHJcbiAgICAvLyBjb25zb2xlLmxvZygxKTtcclxuICAgIC8vIHlpZWxkO1xyXG4gICAgLy8gY29uc29sZS5sb2coMik7XHJcbiAgICAvLyB5aWVsZDsgICBcclxuICAgIC8vfVxyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IGdlbmVyYXRvciA9IGdlbigpO1xyXG4gICAgLy8gZ2VuZXJhdG9yLm5leHQoKSAgZ2VuZXJhdGXtlajsiJjrpbwg7Iuk7ZaJ7Iuc7YKk66Ck66m0IG5leHQoKe2VhOyalFxyXG4gICAgLy8gY29uc29sZS5sb2coMSnsi6TtlokuIOuLpOyLnCBnZW5lcmF0b3Ig7ZWo7IiY66W8IOyLpO2Wie2VmOuptFxyXG4gICAgLy8gY29uc29sZS5sb2coMinsi6TtlokgZ2VuZXJhdGXripQgeWllbGTqsIAg64KY7Jik64qUIOqzs+yXkOyEnCDrqYjstqRcclxuICAgIC8vIOykkeuLqOygkOydtCDsnojripQg7ZWo7IiYLiDsnbTqsoPsnbQgc2FnYVxyXG4gICAgLy8gZG9uZTogdHJ1ZeqwgCDrgpjsmKTrqbQg66mI7LakXHJcbiAgICAvL1xyXG4gICAgLy8gZ2VuZXJhdGUg7ZWo7IiY66GcIOustO2VnCDtkZztmITtlZjquLBcclxuICAgIC8vIGxldCBpID0gMDtcclxuICAgIC8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAvLyAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgIC8vICAgICAgICAgeWllbGQgaSsrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnN0IGc9IGdlbigpO1xyXG4gICAgLy8gZy5uZXh0KCk7IiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0ICxjYWxsLCB0aHJvdHRsZX0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSwgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRSxcclxuICAgIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRJbWFnZXNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsZGF0YSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3QvJHtkYXRhfWApO1xyXG4gICAgLy8gbGFzdElk6rCAIG51bGzsnbTrqbQgMOycvOuhnFxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBwb3N0Jyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuICAgIC8vIGxhc3RJZOqwgCBudWxs7J2066m0IDDsnLzroZxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlclBvc3RzQVBJKGRhdGEsIGxhc3RJZCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfS9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuICAgIC8vIGxhc3RJZOqwgCBudWxs7J2066m0IDDsnLzroZxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRVc2VyUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZW5jb2RlVVJJQ29tcG9uZW50KGRhdGEpfT9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuICAgIC8vIGxhc3RJZOqwgCBudWxs7J2066m0IDDsnLzroZxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRIYXNodGFnUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEhhc2h0YWdQb3N0c0FQSSwgYWN0aW9uLmRhdGEsIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsIGxvYWRIYXNodGFnUG9zdHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFVwbG9hZEltYWdlcyksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFLCBGT0xMT1dfUkVRVUVTVCwgRk9MTE9XX1NVQ0NFU1MsIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsIExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsIExPQURfTVlfSU5GT19GQUlMVVJFLCBMT0FEX01ZX0lORk9fUkVRVUVTVCwgTE9BRF9NWV9JTkZPX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvZm9sbG93ZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlRm9sbG93ZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHJlbW92ZUZvbGxvd2VyJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2FkRm9sbG93ZXJzJyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkRm9sbG93ZXJzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2FkRm9sbG93aW5ncycpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJyx7bmlja25hbWU6IGRhdGF9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBjaGFuZ2VOaWNrbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoY2hhbmdlTmlja25hbWVBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTXlJbmZvQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRNeUluZm8oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvYWRNeUluZm8nKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIC8vKCkg7J247J6Q7JeUIOyyq+uyiOynuOuKlCDtlajsiJgg6re4IOyduO2bhOuhoCDrp6Tqsozrs4DsiJjrk6Qg64Sj7J2MLiBcclxuICAgICAgICAvLyBucG0gaSBwYXNzcG9ydCBwYXNzcG9ydC1sb2NhbCDroZzqt7jsnbjrpbwg64uk66Oo64qUIOuvuOuTpOybqOyWtFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDshLHqs7XqsrDqs7zripQgcmVzdWx0LmRhdGFcclxuICAgIC8vIOyLpO2MqOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgLy8gcHV07J2AIOuUlOyKpO2MqOy5mOudvCDsg53qsIHtlZjrqbQg7KKL64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBmdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgXHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIC8vKCkg7J247J6Q7JeUIOyyq+uyiOynuOuKlCDtlajsiJgg6re4IOyduO2bhOuhoCDrp6Tqsozrs4DsiJjrk6Qg64Sj7J2MLiBcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSB1bmZvbGxvdycpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgbG9nSW4nKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8oKSDsnbjsnpDsl5Qg7LKr67KI7Ke464qUIO2VqOyImCDqt7gg7J247ZuE66GgIOunpOqyjOuzgOyImOuTpCDrhKPsnYwuIFxyXG4gICAgICAgIC8vIG5wbSBpIHBhc3Nwb3J0IHBhc3Nwb3J0LWxvY2FsIOuhnOq3uOyduOulvCDri6Tro6jripQg66+465Ok7Juo7Ja0XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDshLHqs7XqsrDqs7zripQgcmVzdWx0LmRhdGFcclxuICAgIC8vIOyLpO2MqOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgLy8gcHV07J2AIOuUlOyKpO2MqOy5mOudvCDsg53qsIHtlZjrqbQg7KKL64ukXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIC8v7J6R64+Z7Iic7IScIO2UhOuhoO2KuCBwYWdlc+ydmCBvblN1Ym1pdOyXkCDrjbDsnbTthLAo7JWE7J2065SULCDri4nrhKTsnoQsIOu5hOuwgOuyiO2YuCnqsIBcclxuICAgICAgICAvL1NJR05VUFJFUSDrpbwg7Ya17ZW0IOumrOuNleyKpOuekSDsgqzqsIAg7Iuk7ZaJLCDrjbDsnbTthLAg7ZWo7IiY64qUIGFjdGlvbuycvOuhnOqwgFxyXG4gICAgICAgIC8vc2lnblVwQVBJ7J2YIOuNsOydtO2EsOuhnCDsnbTrj5kgdXJs7J2EIO2Gte2VtCDsoITshqFcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCwgcmVtb3ZlRm9sbG93ZXIpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgbG9hZEZvbGxvd2luZ3MpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRNeUluZm8oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9VU0VSX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxuICB9XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG4vLyB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcpO+ydgCBMT0dfSU5fUkVRVUVTVOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkRm9sbG93aW5ncyksXHJcbiAgICAgICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZE15SW5mbyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICBdKTtcclxufTtcclxuXHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAgLy/rsLDtj6zsmqlcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgICAvL+qwnOuwnOyaqVxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICAvL2VuaGFuY2VyIOuvuOuTpOybqOyWtCDslaHshZjquLDroZ3snYQg67O06riw7JyE7ZW0IOyCrOyaqVxyXG4gICAgLy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb25cclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIC8vc2FnYVRhc2sg7ISc67CU7IKs7J2065OcIOugjOuNlOungeydhCDtlZjquLDsnITtlbQg7ZWE7JqUXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREUgPT09ICdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=