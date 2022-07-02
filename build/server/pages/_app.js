"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jb": () => (/* binding */ SocketContext),
/* harmony export */   "Wb": () => (/* binding */ socket)
/* harmony export */ });
/* unused harmony export useSocket */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);
socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SOCKET_URL = "https://nws.btcoley.com";
const SocketContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"].connect(SOCKET_URL, {
    transports: [
        "websocket"
    ]
});
// this.props.socket.on("message", d => {
//     store.dispatch(updateSite({
//         ...this.props.context,
//         currencies: d.currencies
//     }));
// });
socket.on("ticker", (d)=>{
    _context__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch((0,_context__WEBPACK_IMPORTED_MODULE_2__/* .marketAction */ .qe)(d));
});
socket.on("orderbook", (d)=>{
    _context__WEBPACK_IMPORTED_MODULE_2__/* .store.dispatch */ .h.dispatch((0,_context__WEBPACK_IMPORTED_MODULE_2__/* .orderAction */ .Dg)(d));
});
const useSocket = ()=>React.useContext(SocketContext);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8510:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5540);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_socket_market__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3508);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_socket_market__WEBPACK_IMPORTED_MODULE_4__]);
_components_socket_market__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
        store: components_context_store__WEBPACK_IMPORTED_MODULE_2__/* .store */ .h,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_socket_market__WEBPACK_IMPORTED_MODULE_4__/* .SocketContext.Provider */ .Jb.Provider, {
            value: _components_socket_market__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .Wb,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps,
                socket: _components_socket_market__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .Wb
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (components_context_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ 4161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 8936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 8417:
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [909], () => (__webpack_exec__(8510)));
module.exports = __webpack_exports__;

})();