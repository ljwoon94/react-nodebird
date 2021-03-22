webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");


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
    children: "Loading..."
  }, void 0, false, {
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
// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     const cookie = context.req ? context.req.headers.cookie : '';
//     console.log(context);
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     context.store.dispatch({
//         type: LOAD_MY_INFO_REQUEST,
//     });
//     context.store.dispatch({
//         type: LOAD_POST_REQUEST,
//         data: context.params.id,
//     });
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//     return { props: {} };
// });


_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Post;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ25CO0FBQ0ksTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUZlLE1BR1BDLEVBSE8sR0FHQUYsTUFBTSxDQUFDRyxLQUhQLENBR1BELEVBSE8sRUFLZjs7QUFDSSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQLENBTlcsQ0FPZjtBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0F6QkQsQyxDQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F4RE1ILEk7VUFFYUUscUQ7OztLQUZiRixJO0FBMERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uMzZjZWE5YjJlZGM3NTc0NDhlMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBvc3QvW2lkXXNtc1xyXG4vLyBwb3N0WzFdLCBwb3N0WzJdLCBwb3N0WzNdIOyInOyEnOuMgOuhnCDsmKzrnbzqsJBcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIC8vIGlmIChyb3V0ZXIuaXNGYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgIC8vIH1cclxuXHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbi8vICAgICAgICAgPEhlYWQ+XHJcbi8vICAgICAgICAgICAgIDx0aXRsZT5cclxuLy8gICAgICAgICAgICAge3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX1cclxuLy8gICAgICAgICAgICAg64uY7J2YIOq4gFxyXG4vLyAgICAgICAgICAgICA8L3RpdGxlPlxyXG4vLyAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaW5nbGVQb3N0LmNvbnRlbnR9IC8+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHtzaW5nbGVQb3N0LlVzZXIubmlja25hbWV964uY7J2YIOqyjOyLnOq4gGB9IC8+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaW5nbGVQb3N0LmNvbnRlbnR9IC8+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtzaW5nbGVQb3N0LkltYWdlc1swXSA/IHNpbmdsZVBvc3QuSW1hZ2VzWzBdLnNyYyA6ICdodHRwczovL25vZGViaXJkLmNvbS9mYXZpY29uLmljbyd9IC8+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbm9kZWJpcmQuY29tL3Bvc3QvJHtpZH1gfSAvPlxyXG4vLyAgICAgICAgIDwvSGVhZD5cclxuLy8gICAgICAgICA8UG9zdENhcmQgcG9zdD17c2luZ2xlUG9zdH0gLz5cclxuLy8gICAgICAgICA8L0FwcExheW91dD5cclxuLy8gICAgICk7XHJcbn07XHJcblxyXG4vLyAvLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbi8vIC8vICAgcmV0dXJuIHtcclxuLy8gLy8gICAgIHBhdGhzOiBbXHJcbi8vIC8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnMScgfSB9LFxyXG4vLyAvLyAgICAgICB7IHBhcmFtczogeyBpZDogJzInIH0gfSxcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICczJyB9IH0sXHJcbi8vIC8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnNCcgfSB9LFxyXG4vLyAvLyAgICAgXSxcclxuLy8gLy8gICAgIGZhbGxiYWNrOiB0cnVlLFxyXG4vLyAvLyAgIH07XHJcbi8vIC8vIH1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4vLyAgICAgY29uc29sZS5sb2coY29udGV4dCk7XHJcbi8vICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4vLyAgICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4vLyAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IExPQURfUE9TVF9SRVFVRVNULFxyXG4vLyAgICAgICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbi8vICAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4vLyAgICAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==