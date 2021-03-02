webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
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
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJQb3N0QWRkZWQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwb3N0QWRkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUFDO0FBQ1JDLE1BQUUsRUFBRSxDQURJO0FBRVJDLFFBQUksRUFBRTtBQUNGRCxRQUFFLEVBQUUsQ0FERjtBQUVGRSxjQUFRLEVBQUU7QUFGUixLQUZFO0FBTVJDLFdBQU8sRUFBRSx1QkFORDtBQU9SQyxVQUFNLEVBQUUsQ0FBQztBQUNMQyxTQUFHLEVBQUU7QUFEQSxLQUFELEVBRUw7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FGSyxFQUlMO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBSkssQ0FQQTtBQWNSQyxZQUFRLEVBQUUsQ0FBQztBQUNQTCxVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BREM7QUFJUEMsYUFBTyxFQUFFO0FBSkYsS0FBRCxFQUtQO0FBQ0NGLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEUDtBQUlDQyxhQUFPLEVBQUU7QUFKVixLQUxPO0FBZEYsR0FBRCxDQURhO0FBMkJ4QkksWUFBVSxFQUFFLEVBM0JZO0FBNEJ4QjtBQUNBQyxXQUFTLEVBQUUsS0E3QmEsQ0E4QnhCOztBQTlCd0IsQ0FBckI7QUFpQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDOUJDLFFBQUksRUFBRUwsZ0JBRHdCO0FBRTlCSSxRQUFJLEVBQUpBO0FBRjhCLEdBQVg7QUFBQSxDQUFoQjtBQUtQLElBQU1FLFNBQVMsR0FBRztBQUNkZixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsWUFGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kRSxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFZQSxJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJuQixZQUF5QjtBQUFBLE1BQVhvQixNQUFXOztBQUM5QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDSSxTQUFLSixnQkFBTDtBQUNJLDZDQUNPTyxLQURQO0FBRUlsQixpQkFBUyxHQUFHZ0IsU0FBSCxxSkFBaUJFLEtBQUssQ0FBQ2xCLFNBQXZCLEVBRmI7QUFHSW9CLGlCQUFTLEVBQUU7QUFIZjs7QUFLSjtBQUNJLGFBQU9GLEtBQVA7QUFSUjtBQVVILENBWEQ7O0FBYWVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxMzgyOTA4YTA2MDE5OTVmZmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7J207KCV7Jq0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc7YGsICPsnbXsiqTtlITroIjsiqQnLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly8zLmJwLmJsb2dzcG90LmNvbS8tcGFJdkk2eGRFMmsvV292SGVtRmk2akkvQUFBQUFBQUNOMjAvNmhCZU5TX1hWTzBpZEpsS3ZUUl9oS2hEc2FvYjdwZE9nQ0xjQkdBcy9zMTYwMC8zLmdpZicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2NvaW5wYW4uY29tL2ZpbGVzL2F0dGFjaC9pbWFnZXMvMTk4LzAxMy84NjYvMDk2L2I1YTIwMzExNmM5ZmYwZDExYTEzZDliYjQzZjdiYjM5LmdpZicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzcmM6ICdodHRwOi8vdDEuZGF1bWNkbi5uZXQvdGh1bWIvUjEwMjR4MC8/Zm5hbWU9aHR0cDovL2NmaWxlMjcxLnVmLmRhdW0ubmV0L2ltYWdlLzI3NkRDQTNDNTU4NkI3N0UyNkZEQjInLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+ypoeyatCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogJ+2YuO2YuO2YuO2YuCcsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+ypoe2biCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICftl53tl53tl53tl50nLFxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgLy8gaW1hZ2VQYXRoc+uKlCDsnbTrr7jsp4Ag7JeF66Gc65Oc7ZWg65WMIOyDneq4sOuKlCDqsr3roZzqsIAg7KCA7J6lXHJcbiAgICBQb3N0QWRkZWQ6IGZhbHNlLFxyXG4gICAgLy8g6rCc7LK0IOy2lOqwgOyLnCB0cnVl66GcIOuwlOuAnFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IHtcclxuICAgIGlkOiAyLFxyXG4gICAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsCDsnoXri4jri6QuJyxcclxuICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+ypoeypoe2biCdcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59O1xyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9