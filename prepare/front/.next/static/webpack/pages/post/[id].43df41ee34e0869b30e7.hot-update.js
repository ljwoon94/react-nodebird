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
  var id = router.query.id;

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, _this);
  } //     return (
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJpc0ZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNuQjtBQUNJLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFGZSxNQUdQQyxFQUhPLEdBR0FGLE1BQU0sQ0FBQ0csS0FIUCxDQUdQRCxFQUhPOztBQUtqQixNQUFJRixNQUFNLENBQUNJLFVBQVgsRUFBdUI7QUFDckIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNELEdBUGdCLENBU25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNDLENBekJELEMsQ0EyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBeERNTCxJO1VBRWFFLHFEOzs7S0FGYkYsSTtBQTBEU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9baWRdLjQzZGY0MWVlMzRlMDg2OWIzMGU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwb3N0L1tpZF1zbXNcclxuLy8gcG9zdFsxXSwgcG9zdFsyXSwgcG9zdFszXSDsiJzshJzrjIDroZwg7Jis65286rCQXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcbi8vICAgICBjb25zdCB7IHNpbmdsZVBvc3QgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgfVxyXG5cclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFwcExheW91dD5cclxuLy8gICAgICAgICA8SGVhZD5cclxuLy8gICAgICAgICAgICAgPHRpdGxlPlxyXG4vLyAgICAgICAgICAgICB7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4vLyAgICAgICAgICAgICDri5jsnZgg6riAXHJcbi8vICAgICAgICAgICAgIDwvdGl0bGU+XHJcbi8vICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuY29udGVudH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3NpbmdsZVBvc3QuVXNlci5uaWNrbmFtZX3ri5jsnZgg6rKM7Iuc6riAYH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuY29udGVudH0gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuSW1hZ2VzWzBdID8gc2luZ2xlUG9zdC5JbWFnZXNbMF0uc3JjIDogJ2h0dHBzOi8vbm9kZWJpcmQuY29tL2Zhdmljb24uaWNvJ30gLz5cclxuLy8gICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9ub2RlYmlyZC5jb20vcG9zdC8ke2lkfWB9IC8+XHJcbi8vICAgICAgICAgPC9IZWFkPlxyXG4vLyAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtzaW5nbGVQb3N0fSAvPlxyXG4vLyAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4vLyAgICAgKTtcclxufTtcclxuXHJcbi8vIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuLy8gLy8gICByZXR1cm4ge1xyXG4vLyAvLyAgICAgcGF0aHM6IFtcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICcxJyB9IH0sXHJcbi8vIC8vICAgICAgIHsgcGFyYW1zOiB7IGlkOiAnMicgfSB9LFxyXG4vLyAvLyAgICAgICB7IHBhcmFtczogeyBpZDogJzMnIH0gfSxcclxuLy8gLy8gICAgICAgeyBwYXJhbXM6IHsgaWQ6ICc0JyB9IH0sXHJcbi8vIC8vICAgICBdLFxyXG4vLyAvLyAgICAgZmFsbGJhY2s6IHRydWUsXHJcbi8vIC8vICAgfTtcclxuLy8gLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbi8vICAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuLy8gICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbi8vICAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbi8vICAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbi8vICAgICB9XHJcbi8vICAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbi8vICAgICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbi8vICAgICB9KTtcclxuLy8gICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuLy8gICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbi8vICAgICByZXR1cm4geyBwcm9wczoge30gfTtcclxuLy8gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9