"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/dist/web3.min.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);\n\nvar web3;\nif ( true && typeof window.ethereum !== \"undefined\") {\n    console.log(1);\n    // We are in the browser and metamask is running.\n    window.ethereum.request({\n        method: \"eth_requestAccounts\"\n    });\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);\n} else {\n    console.log(2);\n    // We are on the server *OR* the user is not running metamask\n    var provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c\");\n    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);\n    console.log(web3.eth.getAccounts());\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (web3);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS93ZWIzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUF3QjtBQUV4QixJQUFJQyxJQUFJO0FBRVIsSUFBSSxLQUE2QixJQUFJLE9BQU9DLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFBRTtJQUN6RUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsaURBQWlEO0lBQ2pESCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0csT0FBTyxDQUFDO1FBQUVDLE1BQU0sRUFBRSxxQkFBcUI7S0FBRSxDQUFDLENBQUM7SUFDM0ROLElBQUksR0FBRyxJQUFJRCw2Q0FBSSxDQUFDRSxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLE9BQU87SUFDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsNkRBQTZEO0lBQzdELElBQU1HLFFBQVEsR0FBRyxJQUFJUixvRUFBMkIsQ0FDOUMsK0RBQStELENBQ2hFO0lBQ0RDLElBQUksR0FBRyxJQUFJRCw2Q0FBSSxDQUFDUSxRQUFRLENBQUMsQ0FBQztJQUM1QkosT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQ1UsR0FBRyxDQUFDQyxXQUFXLEVBQUUsQ0FBQztBQUVuQyxDQUFDO0FBR0QsK0RBQWVYLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ldGhlcmV1bS93ZWIzLmpzPzk2N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcclxuIFxyXG5sZXQgd2ViMztcclxuIFxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjb25zb2xlLmxvZygxKTtcclxuICAvLyBXZSBhcmUgaW4gdGhlIGJyb3dzZXIgYW5kIG1ldGFtYXNrIGlzIHJ1bm5pbmcuXHJcbiAgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6IFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiIH0pO1xyXG4gIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cuZXRoZXJldW0pO1xyXG59IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coMik7XHJcbiAgLy8gV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xyXG4gIGNvbnN0IHByb3ZpZGVyID0gbmV3IFdlYjMucHJvdmlkZXJzLkh0dHBQcm92aWRlcihcclxuICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My8xNWMxZDMyNTgxODk0Yjg4YTkyZDhkOWU1MTllNDc2Y1wiXHJcbiAgKTtcclxuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xyXG5jb25zb2xlLmxvZyh3ZWIzLmV0aC5nZXRBY2NvdW50cygpKVxyXG5cclxufVxyXG5cclxuIFxyXG5leHBvcnQgZGVmYXVsdCB3ZWIzOyJdLCJuYW1lcyI6WyJXZWIzIiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImV0aCIsImdldEFjY291bnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethereum/web3.js\n"));

/***/ })

});