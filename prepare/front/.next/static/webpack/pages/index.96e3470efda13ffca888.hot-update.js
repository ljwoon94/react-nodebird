webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");


var _jsxFileName = "C:\\job\\react-nodebird\\prepare\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



 //next에선 import React를 반드시 할 필요가 없다.
//next는 pages 폴더를 인식해서 개별적으로 페이지로 만든다.





var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll() {}

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll); //종료하지 않으면 큰일남.
    };
  }, []); // 스크롤 끝까지 내릴시 로딩 후 이미지 가져오기

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 20
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 39
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this) // AppLayout은 components 폴더에 있다.
  // AppLayout 안에 있는 div는 {children}이 된다. 
  ;
};

_s(Home, "RU5r/EKxJz6rnms26XVqq8AWMmw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home); // npm run dev 라고 입력하면 package.json 에 scripts에 정의해둔
// 스크립트가 실행된다. dev 말고 정의해둔 값을 입력하면 스크립트 실행된다.
// antd, antd icon 따로 설치 
// antd는 ant design으로 중국 디자인 사이트
// antd 안먹히면 @ctrl/tinycolor 3.3.1 추가해라

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDZixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaRixZQUFRLENBQUM7QUFDTEcsVUFBSSxFQUFFQyxpRUFBa0JBO0FBRG5CLEtBQUQsQ0FBUjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUYseURBQVMsQ0FBQyxZQUFNO0FBQ1osYUFBU0csUUFBVCxHQUFvQixDQUVuQjs7QUFDREMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0YsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDVEMsWUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0gsUUFBckMsRUFEUyxDQUVUO0FBQ0gsS0FIRDtBQUlILEdBVFEsRUFTTixFQVRNLENBQVQsQ0FSZSxDQWtCZjs7QUFsQmUscUJBbUJBSSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQW5CWDtBQUFBLE1BbUJQQyxFQW5CTyxnQkFtQlBBLEVBbkJPOztBQUFBLHNCQW9CT0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FwQmxCO0FBQUEsTUFvQlBDLFNBcEJPLGlCQW9CUEEsU0FwQk87O0FBcUJmLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsZUFDS0YsRUFBRSxpQkFBSSxxRUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFgsRUFFS0UsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0YsSUFBRDtBQUFBLDBCQUFXLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRUE7QUFBOUIsU0FBZUEsSUFBSSxDQUFDRyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREosQ0FLSTtBQUNBO0FBTko7QUFRSCxDQTdCRDs7R0FBTWpCLEk7VUFDZUUsdUQsRUFrQkZRLHVELEVBQ09BLHVEOzs7S0FwQnBCVixJO0FBK0JTQSxtRUFBZixFLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NmUzNDcwZWZkYTEzZmZjYTg4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbi8vbmV4dOyXkOyEoCBpbXBvcnQgUmVhY3Trpbwg67CY65Oc7IucIO2VoCDtlYTsmpTqsIAg7JeG64ukLlxyXG4vL25leHTripQgcGFnZXMg7Y+0642U66W8IOyduOyLne2VtOyEnCDqsJzrs4TsoIHsnLzroZwg7Y6Y7J207KeA66GcIOunjOuToOuLpC5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICAgICAgLy/sooXro4ztlZjsp4Ag7JWK7Jy866m0IO2BsOydvOuCqC5cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICAvLyDsiqTtgazroaQg64Gd6rmM7KeAIOuCtOumtOyLnCDroZzrlKkg7ZuEIOydtOuvuOyngCDqsIDsoLjsmKTquLBcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7IG1haW5Qb3N0cyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+ICg8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPikpfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIC8vIEFwcExheW91dOydgCBjb21wb25lbnRzIO2PtOuNlOyXkCDsnojri6QuXHJcbiAgICAgICAgLy8gQXBwTGF5b3V0IOyViOyXkCDsnojripQgZGl264qUIHtjaGlsZHJlbn3snbQg65Cc64ukLiBcclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG5cclxuXHJcbi8vIG5wbSBydW4gZGV2IOudvOqzoCDsnoXroKXtlZjrqbQgcGFja2FnZS5qc29uIOyXkCBzY3JpcHRz7JeQIOygleydmO2VtOuRlFxyXG4vLyDsiqTtgazrpr3tirjqsIAg7Iuk7ZaJ65Cc64ukLiBkZXYg66eQ6rOgIOygleydmO2VtOuRlCDqsJLsnYQg7J6F66Cl7ZWY66m0IOyKpO2BrOumve2KuCDsi6TtlonrkJzri6QuXHJcbi8vIGFudGQsIGFudGQgaWNvbiDrlLDroZwg7ISk7LmYIFxyXG4vLyBhbnRk64qUIGFudCBkZXNpZ27snLzroZwg7KSR6rWtIOuUlOyekOyduCDsgqzsnbTtirhcclxuLy8gYW50ZCDslYjrqLntnojrqbQgQGN0cmwvdGlueWNvbG9yIDMuMy4xIOy2lOqwgO2VtOudvCJdLCJzb3VyY2VSb290IjoiIn0=