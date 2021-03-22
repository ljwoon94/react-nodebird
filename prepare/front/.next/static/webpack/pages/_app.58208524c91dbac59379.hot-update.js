webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _marked = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(retweet),
    _marked2 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(uploadImages),
    _marked3 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(likePost),
    _marked4 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unlikePost),
    _marked5 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPost),
    _marked6 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked7 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked8 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked9 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked10 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRetweet),
    _marked11 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUploadImages),
    _marked12 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLikePost),
    _marked13 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnlikePost),
    _marked14 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked15 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPost),
    _marked16 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked17 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked18 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked19 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);






function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/post/".concat(data, "/retweet"));
}

function retweet(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function retweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);

        case 3:
          result = _context.sent;
          console.log('saga post');
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
            data: result.data
          });

        case 7:
          _context.next = 14;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
            error: _context.t0.response.data
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 9]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/post/images', data);
}

function uploadImages(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function uploadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);

        case 3:
          result = _context2.sent;
          console.log('saga post');
          _context2.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
            data: result.data
          });

        case 7:
          _context2.next = 14;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.patch("/post/".concat(data, "/like"));
}

function likePost(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function likePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);

        case 3:
          result = _context3.sent;
          console.log('saga post');
          _context3.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context3.next = 14;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 9]]);
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("/post/".concat(data, "/like"));
}

function unlikePost(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unlikePost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log('saga post');
          _context4.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context4.next = 14;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
            error: _context4.t0.response.data
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 9]]);
}

function loadPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/post/".concat(data)); // lastId가 null이면 0으로
}

function loadPost(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostAPI, action.data);

        case 3:
          result = _context5.sent;
          console.log('saga post');
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context5.next = 14;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            error: _context5.t0.response.data
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/posts?lastId=".concat(lastId || 0)); // lastId가 null이면 0으로
}

function loadPosts(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.lastId);

        case 3:
          result = _context6.sent;
          console.log('saga post');
          _context6.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 7:
          _context6.next = 14;
          break;

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            error: _context6.t0.response.data
          });

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 9]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/post', data);
}

function addPost(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);

        case 3:
          result = _context7.sent;
          console.log('saga post');
          _context7.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context7.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
            data: result.data.id
          });

        case 9:
          _context7.next = 15;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 11]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("/post/".concat(data));
}

function removePost(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data);

        case 3:
          result = _context8.sent;
          console.log('saga post');
          _context8.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
            data: result.data
          });

        case 7:
          _context8.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 9:
          _context8.next = 15;
          break;

        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
            error: _context8.t0.response.data
          });

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 11]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  var result;
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context9.sent;
          _context9.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context9.next = 13;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](0);
          console.error(_context9.t0);
          _context9.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            error: _context9.t0.response.data
          });

        case 13:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9, null, [[0, 8]]);
}

function watchRetweet() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRetweet$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchUploadImages() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUploadImages$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchLikePost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLikePost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchUnlikePost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnlikePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchLoadPosts() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchLoadPost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPost$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchAddPost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchRemovePost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchAddComment() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function postSaga() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJyZXR3ZWV0IiwidXBsb2FkSW1hZ2VzIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0IiwibG9hZFBvc3QiLCJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJwb3N0U2FnYSIsInJldHdlZXRBUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJ0eXBlIiwiUkVUV0VFVF9TVUNDRVNTIiwiZXJyb3IiLCJSRVRXRUVUX0ZBSUxVUkUiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwidW5saWtlUG9zdEFQSSIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwibG9hZFBvc3RBUEkiLCJnZXQiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJsb2FkUG9zdHNBUEkiLCJsYXN0SWQiLCJhZGRQb3N0QVBJIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiUkVUV0VFVF9SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwidGhyb3R0bGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpSkE2QlVBLE87a0pBc0JBQyxZO2tKQXNCQUMsUTtrSkFxQkFDLFU7a0pBc0JBQyxRO2tKQXNCQUMsUztrSkFxQkFDLE87a0pBd0JBQyxVO2tKQXdCQUMsVTttSkFnQkFDLFk7bUpBSUFDLGlCO21KQUlBQyxhO21KQUlBQyxlO21KQUtBQyxjO21KQUlBQyxhO21KQUlBQyxZO21KQUlBQyxlO21KQUtBQyxlO21KQUllQyxROztBQXJRekI7QUFDQTtBQW9CQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFNBQU9DLDRDQUFLLENBQUNDLElBQU4saUJBQW9CRixJQUFwQixjQUFQO0FBQ0g7O0FBR0QsU0FBVXBCLE9BQVYsQ0FBa0J1QixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRXVCLGlCQUFNQywrREFBSSxDQUFDTCxVQUFELEVBQWFJLE1BQU0sQ0FBQ0gsSUFBcEIsQ0FBVjs7QUFGdkI7QUFFY0ssZ0JBRmQ7QUFHUUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFIUjtBQUlRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUVDLDhEQURBO0FBRU5WLGdCQUFJLEVBQUVLLE1BQU0sQ0FBQ0w7QUFGUCxXQUFE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SSxDQUFDN0QsYUFBRCxDQU5FLEVBT042RCwrREFBSSxDQUFDOUQsY0FBRCxDQVBFLEVBUU44RCwrREFBSSxDQUFDM0QsZUFBRCxDQVJFLEVBU04yRCwrREFBSSxDQUFDMUQsZUFBRCxDQVRFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjU4MjA4NTI0YzkxZGJhYzU5Mzc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgLGNhbGwsIHRocm90dGxlfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfRkFJTFVSRSwgQUREX1BPU1RfUkVRVUVTVCwgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIExPQURfUE9TVFNfRkFJTFVSRSwgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBwb3N0Jyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLGRhdGEpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBwb3N0Jyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0LyR7ZGF0YX1gKTtcclxuICAgIC8vIGxhc3RJZOqwgCBudWxs7J2066m0IDDsnLzroZxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxuICAgIC8vIGxhc3RJZOqwgCBudWxs7J2066m0IDDsnLzroZxcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIHBvc3QnKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhZ2EgcG9zdCcpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2FnYSBwb3N0Jyk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTElLRV9QT1NUX1JFUVVFU1QsIGxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hSZXR3ZWV0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9