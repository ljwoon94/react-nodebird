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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
var _s = $RefreshSig$();

// post/[id]sms
// post[1], post[2], post[3] 순서대로 올라감







var Post = function Post() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var id = router.query.id; // return (
  //     <AppLayout>
  //         <PostCard post={singlePost} />
  //     </AppLayout>
  // );
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


_s(Post, "sP8wn12/G/P66EFqz71rMMtIwRA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEscUJBQ1FDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRG5CO0FBQUEsTUFDUEMsVUFETyxnQkFDUEEsVUFETzs7QUFFZixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRmUsTUFHUEMsRUFITyxHQUdBRixNQUFNLENBQUNHLEtBSFAsQ0FHUEQsRUFITyxFQUtmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLENBM0JELEMsQ0E2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdkNNUCxJO1VBQ3FCQyx1RCxFQUNSSyxxRDs7O0tBRmJOLEk7O0FBNERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZmI1YmQ0YmZjNTk4ZjlkNTc3ODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBvc3QvW2lkXXNtc1xyXG4vLyBwb3N0WzFdLCBwb3N0WzJdLCBwb3N0WzNdIOyInOyEnOuMgOuhnCDsmKzrnbzqsJBcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIC8vIHJldHVybiAoXHJcbiAgICAvLyAgICAgPEFwcExheW91dD5cclxuICAgIC8vICAgICAgICAgPFBvc3RDYXJkIHBvc3Q9e3NpbmdsZVBvc3R9IC8+XHJcbiAgICAvLyAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAvLyApO1xyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFwcExheW91dD5cclxuLy8gICAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICAgICAgPHRpdGxlPlxyXG4vLyAgICAgICAgICAgICB7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4vLyAgICAgICAgICAgICDri5jsnZgg6riAXHJcbi8vICAgICAgICAgICAgIDwvdGl0bGU+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuY29udGVudH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuY29udGVudH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuSW1hZ2VzWzBdID8gc2luZ2xlUG9zdC5JbWFnZXNbMF0uc3JjIDogJ2h0dHBzOi8vbm9kZWJpcmQuY29tL2Zhdmljb24uaWNvJ30gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vcG9zdC8ke2lkfWB9IC8+XHJcbi8vICAgICAgICAgPC9IZWFkPlxyXG4vLyAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4vLyAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4vLyAgICAgKTtcclxufTtcclxuXHJcbi8vIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gLy8gICByZXR1cm4ge1xyXG4vLyAvLyAgICAgcGF0aHM6IFtcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcxJyB9IH0sXHJcbi8vIC8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnMicgfSB9LFxyXG4vLyAvLyAgICAgICB7IHBhcmFtczogeyBpZDogJzMnIH0gfSxcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICc0JyB9IH0sXHJcbi8vIC8vICAgICBdLFxyXG4vLyAvLyAgICAgZmFsbGJhY2s6IHRydWUsXHJcbi8vIC8vICAgfTtcclxuLy8gLy8gfVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbiAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9