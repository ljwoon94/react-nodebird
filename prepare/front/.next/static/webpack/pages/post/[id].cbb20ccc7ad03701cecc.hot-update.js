webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");


var _jsxFileName = "C:\\job\\react-nodebird\\prepare\\front\\pages\\post\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();

// post/[id]sms
// post[1], post[2], post[3] 순서대로 올라감







var Post = function Post() {
  _s();

  //     const { singlePost } = useSelector((state) => state.post);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var id = router.query.id; // if (router.isFallback) {

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [id, "\uBC88 \uAC8C\uC2DC\uAE00"]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 16
  }, _this); // }
  //     return (
  //         <AppLayout>
  //         <Head>
  //             <title>
  //             {singlePost.User.nickname}
  //             님의 글
  //             </title>
  //             <meta name="description" content={singlePost.content} />
  //             <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
  //             <meta property="og:description" content={singlePost.content} />
  //             <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} />
  //             <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
  //         </Head>
  //         <PostCard post={singlePost} />
  //         </AppLayout>
  //     );
}; // // export async function getStaticPaths() {
// //   return {
// //     paths: [
// //       { params: { id: '1' } },
// //       { params: { id: '2' } },
// //       { params: { id: '3' } },
// //       { params: { id: '4' } },
// //     ],
// //     fallback: true,
// //   };
// // }


_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ25CO0FBQ0ksTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUZlLE1BR1BDLEVBSE8sR0FHQUYsTUFBTSxDQUFDRyxLQUhQLENBR1BELEVBSE8sRUFLZjs7QUFDSSxzQkFBTztBQUFBLGVBQU1BLEVBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVAsQ0FOVyxDQU9mO0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQXpCRCxDLENBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztHQXJDTUgsSTtVQUVhRSxxRDs7O0tBRmJGLEk7O0FBMERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uY2JiMjBjY2M3YWQwMzcwMWNlY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBvc3QvW2lkXXNtc1xyXG4vLyBwb3N0WzFdLCBwb3N0WzJdLCBwb3N0WzNdIOyInOyEnOuMgOuhnCDsmKzrnbzqsJBcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIC8vIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PntpZH3rsogg6rKM7Iuc6riAPC9kaXY+XHJcbiAgICAvLyB9XHJcblxyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QXBwTGF5b3V0PlxyXG4vLyAgICAgICAgIDxIZWFkPlxyXG4vLyAgICAgICAgICAgICA8dGl0bGU+XHJcbi8vICAgICAgICAgICAgIHtzaW5nbGVQb3N0LlVzZXIubmlja25hbWV9XHJcbi8vICAgICAgICAgICAgIOuLmOydmCDquIBcclxuLy8gICAgICAgICAgICAgPC90aXRsZT5cclxuLy8gICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17c2luZ2xlUG9zdC5jb250ZW50fSAvPlxyXG4vLyAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4vLyAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17c2luZ2xlUG9zdC5jb250ZW50fSAvPlxyXG4vLyAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17c2luZ2xlUG9zdC5JbWFnZXNbMF0gPyBzaW5nbGVQb3N0LkltYWdlc1swXS5zcmMgOiAnaHR0cHM6Ly9ub2RlYmlyZC5jb20vZmF2aWNvbi5pY28nfSAvPlxyXG4vLyAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL25vZGViaXJkLmNvbS9wb3N0LyR7aWR9YH0gLz5cclxuLy8gICAgICAgICA8L0hlYWQ+XHJcbi8vICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbi8vICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbi8vICAgICApO1xyXG59O1xyXG5cclxuLy8gLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4vLyAvLyAgIHJldHVybiB7XHJcbi8vIC8vICAgICBwYXRoczogW1xyXG4vLyAvLyAgICAgICB7IHBhcmFtczogeyBpZDogJzEnIH0gfSxcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcyJyB9IH0sXHJcbi8vIC8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnMycgfSB9LFxyXG4vLyAvLyAgICAgICB7IHBhcmFtczogeyBpZDogJzQnIH0gfSxcclxuLy8gLy8gICAgIF0sXHJcbi8vIC8vICAgICBmYWxsYmFjazogdHJ1ZSxcclxuLy8gLy8gICB9O1xyXG4vLyAvLyB9XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxuICAgIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=