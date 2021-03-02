webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginAction, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  // 로그인 유무
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  // 로그아웃 유무
  logOutFailure: null,
  signUpLoading: false,
  //로그아웃 시도중
  signUpDone: false,
  //
  signUpFailure: null,
  //
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var loginAction = function loginAction(data) {
  return function (dispatch, getState) {
    var state = getState();
    dispatch(loginRequestAction());
    axios.post('/api/login').then(function (res) {
      dispatch(loginSuccessAction(res.data));
    })["catch"](function (err) {
      dispatch(loginFailureAction(err));
    });
  };
}; //액션 생성기

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction(data) {
  return {
    type: LOG_OUT_REQUEST //로그아웃은 데이터가 필요없다.

  };
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '쩡운',
    id: 1,
    Posts: [],
    Followings: []
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log('reducer logIn');
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInError: null,
        logInDone: false
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: true
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        isLoggedIn: false,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoggingOut: false,
        me: null
      });

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRGYWlsdXJlIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBGYWlsdXJlIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwibG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsInN0YXRlIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsInJlZHVjZXIiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJpc0xvZ2dpbmdPdXQiLCJpc0xvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsS0FE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QVksRUFBRSxLQUZsQjtBQUdJQyxpQkFBUyxFQUFFLElBSGY7QUFJSVEsVUFBRSxFQUFFaUMsU0FBUyxDQUFDTSxNQUFNLENBQUNwQixJQUFSO0FBSmpCOztBQU1KLFNBQUtkLGNBQUw7QUFDSSw2Q0FDT2lCLEtBRFA7QUFFSS9CLG9CQUFZLEVBQUUsS0FGbEI7QUFHSUUsa0JBQVUsRUFBRThDLE1BQU0sQ0FBQ0c7QUFIdkI7O0FBS0osU0FBS3BDLGVBQUw7QUFDSSw2Q0FDT2dCLEtBRFA7QUFFSXFCLG9CQUFZLEVBQUU7QUFGbEI7O0FBSUosU0FBS3BDLGVBQUw7QUFDSSw2Q0FDT2UsS0FEUDtBQUVJcUIsb0JBQVksRUFBRSxLQUZsQjtBQUdJQyxrQkFBVSxFQUFFLEtBSGhCO0FBSUk1QyxVQUFFLEVBQUU7QUFKUjs7QUFNSixTQUFLUSxlQUFMO0FBQ0ksNkNBQ09jLEtBRFA7QUFFSXFCLG9CQUFZLEVBQUUsS0FGbEI7QUFHSTNDLFVBQUUsRUFBRTtBQUhSOztBQU1KO0FBQ0ksYUFBT3NCLEtBQVA7QUExQ1I7QUE0Q0gsQ0E3Q0Q7O0FBK0NlZ0Isc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDVkMzUyOGNkN2Y1ZjU5MWNmODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLCAgLy8g66Gc6re47J24IOycoOustFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgICBsb2dPdXREb25lOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOycoOustFxyXG4gICAgbG9nT3V0RmFpbHVyZTogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLCAgLy9cclxuICAgIHNpZ25VcEZhaWx1cmU6IG51bGwsIC8vXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8v7JWh7IWYIOyDneyEseq4sFxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICAvL+uhnOq3uOyVhOybg+ydgCDrjbDsnbTthLDqsIAg7ZWE7JqU7JeG64ukLlxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZTogJ+ypoeyatCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbXSxcclxuICAgIEZvbGxvd2luZ3M6IFtdLFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWR1Y2VyIGxvZ0luJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==