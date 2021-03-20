webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSidesProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSidesProps", function() { return getServerSidesProps; });
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");




var _jsxFileName = "C:\\job\\react-nodebird\\prepare\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



 //next에선 import React를 반드시 할 필요가 없다.
//next는 pages 폴더를 인식해서 개별적으로 페이지로 만든다.







var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading,
      retweetError = _useSelector2.retweetError;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function onScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_POSTS_REQUEST"],
            lastId: lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll); //종료하지 않으면 큰일남.
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts]); // 스크롤 끝까지 내릴시 로딩 후 이미지 가져오기

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 20
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 39
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, _this) // AppLayout은 components 폴더에 있다.
  // AppLayout 안에 있는 div는 {children}이 된다. 
  ;
};

_s(Home, "djuFENDcsI0GwSBhrXT69nwI2y0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = Home;
var getServerSidesProps = _store_configureStore__WEBPACK_IMPORTED_MODULE_10__["default"].getServerSidesProps( /*#__PURE__*/function () {
  var _ref = Object(C_job_react_nodebird_prepare_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return C_job_react_nodebird_prepare_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context.store.dispatch({
              type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOAD_MY_INFO_REQUEST"]
            });
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["LOAD_POSTS_REQUEST"]
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ __webpack_exports__["default"] = (Home); // npm run dev 라고 입력하면 package.json 에 scripts에 정의해둔
// 스크립트가 실행된다. dev 말고 정의해둔 값을 입력하면 스크립트 실행된다.
// antd, antd icon 따로 설치 
// antd는 ant design으로 중국 디자인 사이트
// antd 안먹히면 @ctrl/tinycolor 3.3.1 추가해라
// next를 사용하는 이유는 서버사이드 렌더링 때문

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJyZXR3ZWV0RXJyb3IiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uU2Nyb2xsIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiZ2V0U2VydmVyU2lkZXNQcm9wcyIsIndyYXBwZXIiLCJjb250ZXh0Iiwic3RvcmUiLCJMT0FEX01ZX0lORk9fUkVRVUVTVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGUscUJBRUFDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlg7QUFBQSxNQUVQQyxFQUZPLGdCQUVQQSxFQUZPOztBQUFBLHNCQUdxREgsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIaEU7QUFBQSxNQUdQQyxTQUhPLGlCQUdQQSxTQUhPO0FBQUEsTUFHSUMsWUFISixpQkFHSUEsWUFISjtBQUFBLE1BR2tCQyxnQkFIbEIsaUJBR2tCQSxnQkFIbEI7QUFBQSxNQUdvQ0MsWUFIcEMsaUJBR29DQSxZQUhwQzs7QUFLZkMseURBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBR0QsWUFBSCxFQUFnQjtBQUNaRSxXQUFLLENBQUNGLFlBQUQsQ0FBTDtBQUNIO0FBQ0osR0FKUSxFQUlQLENBQUNBLFlBQUQsQ0FKTyxDQUFUO0FBT0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaLGFBQVNFLFFBQVQsR0FBb0I7QUFDaEIsVUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTlDLEdBQTZERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBQXpHLEVBQThHO0FBQzFHLFlBQUlYLFlBQVksSUFBSSxDQUFDQyxnQkFBckIsRUFBdUM7QUFBQTs7QUFDbkMsY0FBTVcsTUFBTSxpQkFBR2IsU0FBUyxDQUFDQSxTQUFTLENBQUNjLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBWiwrQ0FBRyxXQUFpQ0MsRUFBaEQ7QUFDQXRCLGtCQUFRLENBQUM7QUFDTHVCLGdCQUFJLEVBQUVDLGlFQUREO0FBRUxKLGtCQUFNLEVBQU5BO0FBRkssV0FBRCxDQUFSO0FBSUg7QUFDSjtBQUNKOztBQUNETixVQUFNLENBQUNXLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDWixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUQyxZQUFNLENBQUNZLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDYixRQUFyQyxFQURTLENBRVQ7QUFDSCxLQUhEO0FBSUgsR0FqQlEsRUFpQk4sQ0FBQ0wsWUFBRCxFQUFlQyxnQkFBZixFQUFpQ0YsU0FBakMsQ0FqQk0sQ0FBVCxDQVplLENBOEJmOztBQUVBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsZUFDS0YsRUFBRSxpQkFBSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFgsRUFFS0UsU0FBUyxDQUFDb0IsR0FBVixDQUFjLFVBQUNyQixJQUFEO0FBQUEsMEJBQVcscUVBQUMsNERBQUQ7QUFBd0IsWUFBSSxFQUFFQTtBQUE5QixTQUFlQSxJQUFJLENBQUNnQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosQ0FLSTtBQUNBO0FBTko7QUFRSCxDQXhDRDs7R0FBTXZCLEk7VUFDZUUsdUQsRUFDRkMsdUQsRUFDcURBLHVEOzs7S0FIbEVILEk7QUEwQ0MsSUFBTTZCLG1CQUFtQixHQUFHQyw4REFBTyxDQUFDRCxtQkFBUjtBQUFBLDRSQUE0QixpQkFBT0UsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNEQSxtQkFBTyxDQUFDQyxLQUFSLENBQWMvQixRQUFkLENBQXVCO0FBQ25CdUIsa0JBQUksRUFBRVMsbUVBQW9CQTtBQURQLGFBQXZCO0FBR0FGLG1CQUFPLENBQUNDLEtBQVIsQ0FBYy9CLFFBQWQsQ0FBdUI7QUFDbkJ1QixrQkFBSSxFQUFFQyxpRUFBa0JBO0FBREwsYUFBdkI7O0FBSjJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTVCOztBQUFBO0FBQUE7QUFBQTtBQUFBLElBQTVCO0FBU1F6QixtRUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNjN2RjYTU1NjBlMDM1M2MwNzFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuLy9uZXh07JeQ7ISgIGltcG9ydCBSZWFjdOulvCDrsJjrk5zsi5wg7ZWgIO2VhOyalOqwgCDsl4bri6QuXHJcbi8vbmV4dOuKlCBwYWdlcyDtj7TrjZTrpbwg7J247Iud7ZW07IScIOqwnOuzhOyggeycvOuhnCDtjpjsnbTsp4DroZwg66eM65Og64ukLlxyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgcmV0d2VldEVycm9yIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHJldHdlZXRFcnJvcil7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJldHdlZXRFcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICAgICAgLy/sooXro4ztlZjsp4Ag7JWK7Jy866m0IO2BsOydvOuCqC5cclxuICAgICAgICB9O1xyXG4gICAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzXSk7XHJcbiAgICAvLyDsiqTtgazroaQg64Gd6rmM7KeAIOuCtOumtOyLnCDroZzrlKkg7ZuEIOydtOuvuOyngCDqsIDsoLjsmKTquLBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pKX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICAvLyBBcHBMYXlvdXTsnYAgY29tcG9uZW50cyDtj7TrjZTsl5Ag7J6I64ukLlxyXG4gICAgICAgIC8vIEFwcExheW91dCDslYjsl5Ag7J6I64qUIGRpduuKlCB7Y2hpbGRyZW597J20IOuQnOuLpC4gXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVzUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVzUHJvcHMoYXN5bmMgKGNvbnRleHQpPT57XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcblxyXG4vLyBucG0gcnVuIGRldiDrnbzqs6Ag7J6F66Cl7ZWY66m0IHBhY2thZ2UuanNvbiDsl5Agc2NyaXB0c+yXkCDsoJXsnZjtlbTrkZRcclxuLy8g7Iqk7YGs66a97Yq46rCAIOyLpO2WieuQnOuLpC4gZGV2IOunkOqzoCDsoJXsnZjtlbTrkZQg6rCS7J2EIOyeheugpe2VmOuptCDsiqTtgazrpr3tirgg7Iuk7ZaJ65Cc64ukLlxyXG4vLyBhbnRkLCBhbnRkIGljb24g65Sw66GcIOyEpOy5mCBcclxuLy8gYW50ZOuKlCBhbnQgZGVzaWdu7Jy866GcIOykkeq1rSDrlJTsnpDsnbgg7IKs7J207Yq4XHJcbi8vIGFudGQg7JWI66i57Z6I66m0IEBjdHJsL3Rpbnljb2xvciAzLjMuMSDstpTqsIDtlbTrnbxcclxuLy8gbmV4dOulvCDsgqzsmqntlZjripQg7J207Jyg64qUIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4Eg65WM66y4XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=