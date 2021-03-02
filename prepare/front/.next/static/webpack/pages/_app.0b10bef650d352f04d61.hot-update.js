webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, addPost, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '이정운'
    },
    content: '첫 번째 게시글 #해시태크 #익스프레스',
    Images: [{
      src: 'https://3.bp.blogspot.com/-paIvI6xdE2k/WovHemFi6jI/AAAAAAACN20/6hBeNS_XVO0idJlKvTR_hKhDsaob7pdOgCLcBGAs/s1600/3.gif'
    }, {
      src: 'https://coinpan.com/files/attach/images/198/013/866/096/b5a203116c9ff0d11a13d9bb43f7bb39.gif'
    }, {
      src: 'http://t1.daumcdn.net/thumb/R1024x0/?fname=http://cfile271.uf.daum.net/image/276DCA3C5586B77E26FDB2'
    }],
    Comments: [{
      User: {
        nickname: '쩡운'
      },
      content: '호호호호'
    }, {
      User: {
        nickname: '쩡훈'
      },
      content: '헝헝헝헝'
    }]
  }],
  imagePaths: [],
  // imagePaths는 이미지 업로드할때 생기는 경로가 저장
  PostAdded: false // 개체 추가시 true로 바뀜

};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var dummyPost = {
  id: 2,
  content: '더미데이터 입니다.',
  User: {
    id: 1,
    nickname: '쩡쩡훈'
  },
  Images: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null
};
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return {
        addCommentLoading: false,
        addCommentError: action.error
      };

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return {
        addCommentLoading: false,
        addCommentError: action.error
      };

    default:
      return state;
  }
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

/***/ }),

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


var _marked = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked3 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked4 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked5 = /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);




function addPostAPI(data) {
  return axios.post('/api/addPost', data);
}

function addPost(action) {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return put({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return put({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function addCommentAPI(data) {
  return axios.post("/api/post/".concat(data.postId, "/comment"), data);
}

function addComment(action) {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return put({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"]
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return put({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            data: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function watchAddPost() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchAddComment() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["take"])(ADD_COMMENT_REQUEST, addComment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function postSaga() {
  return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJQb3N0QWRkZWQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJkdW1teVBvc3QiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudEVycm9yIiwiZXJyb3IiLCJhZGRDb21tZW50RG9uZSIsIndhdGNoQWRkUG9zdCIsIndhdGNoQWRkQ29tbWVudCIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImF4aW9zIiwicG9zdCIsImRlbGF5IiwicHV0IiwicmVzdWx0IiwicmVzcG9uc2UiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwidGFrZSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUUsQ0FBQztBQUNSQyxNQUFFLEVBQUUsQ0FESTtBQUVSQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGRTtBQU1SQyxXQUFPLEVBQUUsdUJBTkQ7QUFPUkMsVUFBTSxFQUFFLENBQUM7QUFDTEMsU0FBRyxFQUFF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QztBQUNOdkIsZ0JBQUksRUFBRU8sa0VBREE7QUFFTlIsZ0JBQUksRUFBRSxhQUFJMEIsUUFBSixDQUFhMUI7QUFGYixXQUFELENBQVQ7O0FBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBVWlCLFlBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1ZLCtEQUFJLENBQUNqQywrREFBRCxFQUFtQkcsT0FBbkIsQ0FBVjs7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVbUIsZUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTVcsK0RBQUksQ0FBQ3ZCLG1CQUFELEVBQXNCRyxVQUF0QixDQUFWOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVVLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1XLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2QsWUFBRCxDQURFLEVBRU5jLCtEQUFJLENBQUNiLGVBQUQsQ0FGRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYjEwYmVmNjUwZDM1MmYwNGQ2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ydtOygleyatCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnO2BrCAj7J217Iqk7ZSE66CI7IqkJyxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vMy5icC5ibG9nc3BvdC5jb20vLXBhSXZJNnhkRTJrL1dvdkhlbUZpNmpJL0FBQUFBQUFDTjIwLzZoQmVOU19YVk8waWRKbEt2VFJfaEtoRHNhb2I3cGRPZ0NMY0JHQXMvczE2MDAvMy5naWYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9jb2lucGFuLmNvbS9maWxlcy9hdHRhY2gvaW1hZ2VzLzE5OC8wMTMvODY2LzA5Ni9iNWEyMDMxMTZjOWZmMGQxMWExM2Q5YmI0M2Y3YmIzOS5naWYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cDovL3QxLmRhdW1jZG4ubmV0L3RodW1iL1IxMDI0eDAvP2ZuYW1lPWh0dHA6Ly9jZmlsZTI3MS51Zi5kYXVtLm5ldC9pbWFnZS8yNzZEQ0EzQzU1ODZCNzdFMjZGREIyJyxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICfsqaHsmrQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftmLjtmLjtmLjtmLgnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICfsqaHtm4gnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7Zed7Zed7Zed7ZedJyxcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIC8vIGltYWdlUGF0aHPripQg7J2066+47KeAIOyXheuhnOuTnO2VoOuVjCDsg53quLDripQg6rK966Gc6rCAIOyggOyepVxyXG4gICAgUG9zdEFkZGVkOiBmYWxzZSxcclxuICAgIC8vIOqwnOyytCDstpTqsIDsi5wgdHJ1ZeuhnCDrsJTrgJxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLAg7J6F64uI64ukLicsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsqaHsqaHtm4gnXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCB0YWtlIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9GQUlMVVJFLCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLCBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2FkZFBvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZShBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2UoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIF0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==