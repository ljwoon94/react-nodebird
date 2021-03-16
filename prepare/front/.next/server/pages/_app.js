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
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");


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
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(NodeBird)));

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // combineReducer은 리듀서끼리 합치게 해준다.


 //(이전상태, 액션) => 다음상태

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);
      // HYDRATE를 위해 인덕스 리듀션을 추가

      default:
        return state;
      // default: return state;를 안적으면 리턴값이 undifined가 뜬다.
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDumyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



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
const generateDumyPost = number => Array(number).fill().map(() => ({
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
}));
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
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

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data); //불변성을 안지키는 거면 draft(immer)을 안쓰는것이 좋다.

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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginAction, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
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
};

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '쩡운',
  id: 1,
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '오징어'
  }, {
    nickname: '명태'
  }, {
    nickname: '강아지'
  }],
  Followers: [{
    nickname: '오징어'
  }, {
    nickname: '명태'
  }, {
    nickname: '강아지'
  }]
}); // reducer은 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성을 지키면서)


const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followDone = false;
      draft.followError = null;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followDone = true;
      draft.me.Followings.push({
        id: action.data
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
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);






function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('/api/posts', data);
}

function* loadPosts(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDumyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/post', {
    content: data
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    console.log('saga post');
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/api/removePost', data);
}

function* removePost(action) {
  try {
    //const result = yield call(removePostAPI, action.data);
    console.log('saga post');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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




function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/follow');
}

function* follow(action) {
  try {
    console.log('saga follow'); //const result = yield call(logInAPI, action.data);
    //() 인자엔 첫번째는 함수 그 인후론 매게변수들 넣음. 

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/unfollow');
}

function* unfollow(action) {
  try {
    console.log('saga unfollow');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      data: action.data
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
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

  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__["default"]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

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

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImNvbnRlbnQiLCJsb3JlbSIsInBhcmFncmFwaCIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiQ29tbWVudHMiLCJzZW50ZW5jZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwiZmluZCIsIlBvc3RJZCIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJjYXRjaCIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJwdXNoIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsImRlbGF5IiwicHV0IiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicmVzdWx0IiwiY2FsbCIsInJlbW92ZVBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsIndhdGNoTG9hZFBvc3RzIiwidGFrZUxhdGVzdCIsIndhdGNoQWRkUG9zdCIsIndhdGNoUmVtb3ZlUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJsb2dnZXJNaWRkbGV3YXJlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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QUFjLEdBQUcsTUFBTTtBQUN6QixRQUFNQyxjQUFjLEdBQUdDLGlEQUFvQixFQUEzQztBQUNBLFFBQU1DLFdBQVcsR0FBRyxDQUFDRixjQUFELEVBQWlCSCxnQkFBakIsQ0FBcEI7QUFDQSxRQUFNTSxRQUFRLEdBQUcsUUFDWEMsU0FEVyxDQUMrQjtBQUQvQixJQUVYQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBRnpCLENBSHlCLENBS29DOztBQUM3RCxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUN4SCxpREFBRCxFQUFVbUgsUUFBVixDQUF6QixDQU55QixDQU96QjtBQUNBOztBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQm5ELDhDQUFuQixDQUFqQjtBQUNBLFNBQU9nRCxLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxNQUFNMUwsT0FBTyxHQUFHOEwsd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUMxQ2EsT0FBSyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixLQUFxQjtBQURjLENBQWpCLENBQTdCO0FBR2VsTSxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSdcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IHByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7IiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuLy8gY29tYmluZVJlZHVjZXLsnYAg66as65OA7ISc64G866asIO2Vqey5mOqyjCDtlbTspIDri6QuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gSFlEUkFUReulvCDsnITtlbQg7J24642V7IqkIOumrOuTgOyFmOydhCDstpTqsIBcclxuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAvLyBkZWZhdWx0OiByZXR1cm4gc3RhdGU766W8IOyViOyggeycvOuptCDrpqzthLTqsJLsnbQgdW5kaWZpbmVk6rCAIOucrOuLpC5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXNlcixcclxuICAgIHBvc3QsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7IiwiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGlkOiAxLFxyXG4gICAgICAgIC8vICAgICBVc2VyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZDogMSxcclxuICAgICAgICAvLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5ztgawgI+ydteyKpO2UhOugiOyKpCcsXHJcbiAgICAgICAgLy8gICAgIEltYWdlczogW3tcclxuICAgICAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBzcmM6ICdodHRwczovLzMuYnAuYmxvZ3Nwb3QuY29tLy1wYUl2STZ4ZEUyay9Xb3ZIZW1GaTZqSS9BQUFBQUFBQ04yMC82aEJlTlNfWFZPMGlkSmxLdlRSX2hLaERzYW9iN3BkT2dDTGNCR0FzL3MxNjAwLzMuZ2lmJyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHBzOi8vY29pbnBhbi5jb20vZmlsZXMvYXR0YWNoL2ltYWdlcy8xOTgvMDEzLzg2Ni8wOTYvYjVhMjAzMTE2YzlmZjBkMTFhMTNkOWJiNDNmN2JiMzkuZ2lmJyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIHNyYzogJ2h0dHA6Ly90MS5kYXVtY2RuLm5ldC90aHVtYi9SMTAyNHgwLz9mbmFtZT1odHRwOi8vY2ZpbGUyNzEudWYuZGF1bS5uZXQvaW1hZ2UvMjc2RENBM0M1NTg2Qjc3RTI2RkRCMicsXHJcbiAgICAgICAgLy8gICAgIH1dLFxyXG4gICAgICAgIC8vICAgICBDb21tZW50czogW3tcclxuICAgICAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgLy8gICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBuaWNrbmFtZTogJ+ypoeyatCdcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiAn7Zi47Zi47Zi47Zi4JyxcclxuICAgICAgICAvLyAgICAgfSwge1xyXG4gICAgICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAvLyAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOiAn7Kmh7ZuIJyxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBjb250ZW50OiAn7Zed7Zed7Zed7ZedJyxcclxuICAgICAgICAvLyAgICAgfV0sXHJcbiAgICAgICAgLy8gfVxyXG4gICAgXSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgLy8gaW1hZ2VQYXRoc+uKlCDsnbTrr7jsp4Ag7JeF66Gc65Oc7ZWg65WMIOyDneq4sOuKlCDqsr3roZzqsIAg7KCA7J6lXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgLy9mYWtlciDrnpzrjaQg64uJ64Sk7J6EIFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgLy9mYWtlciDrnpzrjaQg66y464uoXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgICAgIC8vZmFrZXIg656c642kIOuLieuEpOyehCBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgLy9mYWtlciDrnpzrjaQg66y47J6lXHJcbiAgICB9XSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8g7J207KCcIOyViOyTtOuLpC5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgICBpZDogZGF0YS5pZCxcclxuLy8gICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuaWNrbmFtZTogJ+ydtOygleyatCcsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgSW1hZ2VzOiBbXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBjb250ZW50OiBkYXRhLFxyXG4vLyAgICAgVXNlcjoge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuLy8gICAgIH0sXHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIHJlZHVjZXLsnYAg7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTtcclxuICAgICAgICAgICAgLy9jb25jYXQg7ZWp7LmY6riwXHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIHBvc3QnKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgcG9zdCcpO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDslYjsp4DtgqTripQg6rGw66m0IGRyYWZ0KGltbWVyKeydhCDslYjsk7DripTqsoPsnbQg7KKL64ukLlxyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIGltbWVyIOyTsOuptCDsnbTqsoPsnbQg7JyE7JeQIOyymOufvCDqsITri6jtlbTsp4Tri6QuXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLCAgLy8g7YyU66Gc7JqwIOycoOustFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLCAgLy8g7Ja47YyU66Gc7JqwIOycoOustFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICAgIGxvZ0luRG9uZTogZmFsc2UsICAvLyDroZzqt7jsnbgg7Jyg66y0XHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Jyg66y0XHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSwgIC8vXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCwgLy9cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8v64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsICAvL1xyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCwgLy9cclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8v7JWh7IWYIOyDneyEseq4sFxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICAvL+uhnOq3uOyVhOybg+ydgCDrjbDsnbTthLDqsIAg7ZWE7JqU7JeG64ukLlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ypoeyatCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn7Jik7KeV7Ja0JyB9LCB7IG5pY2tuYW1lOiAn66qF7YOcJyB9LCB7IG5pY2tuYW1lOiAn6rCV7JWE7KeAJyB9XSxcclxuICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfsmKTsp5XslrQnIH0sIHsgbmlja25hbWU6ICfrqoXtg5wnIH0sIHsgbmlja25hbWU6ICfqsJXslYTsp4AnIH1dLFxyXG59KTtcclxuXHJcbi8vIHJlZHVjZXLsnYAg7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja0IOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZHVjZXIgbG9nSW4nKTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7JeQIOyymOufvCDspITsnbwg7IiYIOyeiOuLpC5cclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBpbW1lcuulvCDsgqzsmqntlZjrqbQg7JyE7JeQIOyymOufvCDspITsnbwg7IiYIOyeiOuLpC5cclxuICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgbWU6IHtcclxuICAgICAgICAvLyAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgIC8vICAgICAgICAgUG9zdHM6IHN0YXRlLm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuLy9zYWdhcyDsnZggcG9zdCB1cmzrpbwg65Ox66GdXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIC8vYWxs7J2AIO2VqOyImOulvCDrj5nsi5zsl5Ag7Iuk7ZaJ7Iuc7YK0XHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICAgICAgLy8gZm9ya+uKlCDruYTrj5nquLAg7ZWo7IiY66W8IOyLpO2Wie2VmOuKlCDqsoNcclxuICAgICAgICAvLyDsmpTssq3snYQg67O064K067KE66as6rOgIOqysOqzvOulvCDquLDri6Trpqzsp4Ag7JWK6rOgIOuLpOydjCDqsoPsnbQg7Iuk7ZaJ65CoXHJcbiAgICAgICAgLy8gY2FsbOydgCDrj5nquLAg7ZWo7IiY66W8IOyLpO2Wie2VmOuKlCDqsoNcclxuICAgICAgICAvLyDqsrDqs7zrpbwg6riw64uk66C464ukIOuLpOydjCDqsoPsnbQg7Iuk7ZaJ65CoLiBcclxuICAgIF0pO1xyXG59XHJcbiAgICAvLyBnZW5lcmF0ZSDtlajsiJggZnVuY3Rpb24qXHJcbiAgICAvLyBjb25zdCBnZW4gPSBmdW5jdGlvbiooKXtcclxuICAgIC8vIGNvbnNvbGUubG9nKDEpO1xyXG4gICAgLy8geWllbGQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZygyKTtcclxuICAgIC8vIHlpZWxkOyAgIFxyXG4gICAgLy99XHJcbiAgICAvL1xyXG4gICAgLy8gY29uc3QgZ2VuZXJhdG9yID0gZ2VuKCk7XHJcbiAgICAvLyBnZW5lcmF0b3IubmV4dCgpICBnZW5lcmF0Ze2VqOyImOulvCDsi6Ttlonsi5ztgqTroKTrqbQgbmV4dCgp7ZWE7JqUXHJcbiAgICAvLyBjb25zb2xlLmxvZygxKeyLpO2WiS4g64uk7IucIGdlbmVyYXRvciDtlajsiJjrpbwg7Iuk7ZaJ7ZWY66m0XHJcbiAgICAvLyBjb25zb2xlLmxvZygyKeyLpO2WiSBnZW5lcmF0ZeuKlCB5aWVsZOqwgCDrgpjsmKTripQg6rOz7JeQ7IScIOupiOy2pFxyXG4gICAgLy8g7KSR64uo7KCQ7J20IOyeiOuKlCDtlajsiJguIOydtOqyg+ydtCBzYWdhXHJcbiAgICAvLyBkb25lOiB0cnVl6rCAIOuCmOyYpOuptCDrqYjstqRcclxuICAgIC8vXHJcbiAgICAvLyBnZW5lcmF0ZSDtlajsiJjroZwg66y07ZWcIO2RnO2YhO2VmOq4sFxyXG4gICAgLy8gbGV0IGkgPSAwO1xyXG4gICAgLy8gY29uc3QgZ2VuID0gZnVuY3Rpb24qICgpIHtcclxuICAgIC8vICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICB5aWVsZCBpKys7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgZz0gZ2VuKCk7XHJcbiAgICAvLyBnLm5leHQoKTsiLCJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgLGNhbGx9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIGdlbmVyYXRlRHVteVBvc3QsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsIExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogZ2VuZXJhdGVEdW15UG9zdCgxMCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIHtjb250ZW50OmRhdGF9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9yZW1vdmVQb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmVtb3ZlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHsgYWxsLCBjYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSwgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2ZvbGxvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBmb2xsb3cnKTtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvLygpIOyduOyekOyXlCDssqvrsojsp7jripQg7ZWo7IiYIOq3uCDsnbjtm4TroaAg66ek6rKM67OA7IiY65OkIOuEo+ydjC4gXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS91bmZvbGxvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHVuZm9sbG93Jyk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBsb2dJbicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvLygpIOyduOyekOyXlCDssqvrsojsp7jripQg7ZWo7IiYIOq3uCDsnbjtm4TroaAg66ek6rKM67OA7IiY65OkIOuEo+ydjC4gXHJcbiAgICAgICAgLy8gbnBtIGkgcGFzc3BvcnQgcGFzc3BvcnQtbG9jYWwg66Gc6re47J2466W8IOuLpOujqOuKlCDrr7jrk6Tsm6jslrRcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOyEseqzteqysOqzvOuKlCByZXN1bHQuZGF0YVxyXG4gICAgLy8g7Iuk7Yyo6rKw6rO864qUIGVyci5yZXNwb25zZS5kYXRhXHJcbiAgICAvLyBwdXTsnYAg65SU7Iqk7Yyo7LmY6528IOyDneqwge2VmOuptCDsoovri6RcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy/snpHrj5nsiJzshJwg7ZSE66Gg7Yq4IHBhZ2Vz7J2YIG9uU3VibWl07JeQIOuNsOydtO2EsCjslYTsnbTrlJQsIOuLieuEpOyehCwg67mE67CA67KI7Zi4KeqwgFxyXG4gICAgICAgIC8vU0lHTlVQUkVRIOulvCDthrXtlbQg66as642V7Iqk656RIOyCrOqwgCDsi6TtloksIOuNsOydtO2EsCDtlajsiJjripQgYWN0aW9u7Jy866Gc6rCAXHJcbiAgICAgICAgLy9zaWduVXBBUEnsnZgg642w7J207YSw66GcIOydtOuPmSB1cmzsnYQg7Ya17ZW0IOyghOyGoVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG4vLyB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcpO+ydgCBMT0dfSU5fUkVRVUVTVOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pO1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKVxyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpICAvL+uwsO2PrOyaqVxyXG4gICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAgIC8v6rCc67Cc7JqpXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIC8vZW5oYW5jZXIg66+465Ok7Juo7Ja0IOyVoeyFmOq4sOuhneydhCDrs7TquLDsnITtlbQg7IKs7JqpXHJcbiAgICAvL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvblxyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9