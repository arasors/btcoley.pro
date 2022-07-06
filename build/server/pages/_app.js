/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/context/actions/marketAction.js":
/*!****************************************************!*\
  !*** ./components/context/actions/marketAction.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"marketAction\": () => (/* binding */ marketAction)\n/* harmony export */ });\nfunction marketAction(payload = \"\") {\n    return {\n        type: \"UPDATE_MARKET_DATA\",\n        payload: payload\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvYWN0aW9ucy9tYXJrZXRBY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLFNBQVNBLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLEVBQUUsRUFBQztJQUV0QyxPQUFNO1FBQ0ZDLElBQUksRUFBRSxvQkFBb0I7UUFDMUJELE9BQU8sRUFBRUEsT0FBTztLQUNuQjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vY29tcG9uZW50cy9jb250ZXh0L2FjdGlvbnMvbWFya2V0QWN0aW9uLmpzP2VhMWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1hcmtldEFjdGlvbihwYXlsb2FkID0gXCJcIil7XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6ICdVUERBVEVfTUFSS0VUX0RBVEEnLFxyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWRcclxuICAgIH1cclxuXHJcbn1cclxuIl0sIm5hbWVzIjpbIm1hcmtldEFjdGlvbiIsInBheWxvYWQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/actions/marketAction.js\n");

/***/ }),

/***/ "./components/context/actions/orderAction.js":
/*!***************************************************!*\
  !*** ./components/context/actions/orderAction.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"orderAction\": () => (/* binding */ orderAction)\n/* harmony export */ });\nfunction orderAction(payload = {}) {\n    // console.log(payload);\n    return {\n        type: \"UPDATE_ORDER_DATA\",\n        payload\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvYWN0aW9ucy9vcmRlckFjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsV0FBVyxDQUFDQyxPQUFPLEdBQUcsRUFBRSxFQUFDO0lBQ3JDLHdCQUF3QjtJQUN4QixPQUFNO1FBQ0ZDLElBQUksRUFBRSxtQkFBbUI7UUFDekJELE9BQU87S0FDVjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vY29tcG9uZW50cy9jb250ZXh0L2FjdGlvbnMvb3JkZXJBY3Rpb24uanM/ZTIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb3JkZXJBY3Rpb24ocGF5bG9hZCA9IHt9KXtcclxuICAgIC8vIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6ICdVUERBVEVfT1JERVJfREFUQScsXHJcbiAgICAgICAgcGF5bG9hZFxyXG4gICAgfVxyXG5cclxufVxyXG4iXSwibmFtZXMiOlsib3JkZXJBY3Rpb24iLCJwYXlsb2FkIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context/actions/orderAction.js\n");

/***/ }),

/***/ "./components/context/actions/siteAction.js":
/*!**************************************************!*\
  !*** ./components/context/actions/siteAction.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleSelectPair\": () => (/* binding */ toggleSelectPair),\n/* harmony export */   \"toggleTheme\": () => (/* binding */ toggleTheme),\n/* harmony export */   \"updateSite\": () => (/* binding */ updateSite)\n/* harmony export */ });\nfunction toggleTheme(theme = false) {\n    if (theme === false) {\n        return {\n            type: \"TOGGLE_THEME\"\n        };\n    }\n    return {\n        type: \"CUSTOM_THEME\",\n        theme: theme\n    };\n}\nfunction toggleSelectPair(theme = false) {\n    if (theme === false) {\n        return {\n            type: \"TOGGLE_SELECT_PAIR\"\n        };\n    }\n}\nfunction updateSite(payload = false) {\n    return {\n        type: \"UPDATE_SITE\",\n        payload: payload\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvYWN0aW9ucy9zaXRlQWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLFdBQVcsQ0FBQ0MsS0FBSyxHQUFHLEtBQUssRUFBQztJQUV0QyxJQUFHQSxLQUFLLEtBQUcsS0FBSyxFQUFDO1FBQ2IsT0FBTTtZQUNGQyxJQUFJLEVBQUUsY0FBYztTQUN2QjtLQUNKO0lBRUQsT0FBTTtRQUNGQSxJQUFJLEVBQUUsY0FBYztRQUNwQkQsS0FBSyxFQUFFQSxLQUFLO0tBQ2Y7Q0FFSjtBQUNNLFNBQVNFLGdCQUFnQixDQUFDRixLQUFLLEdBQUcsS0FBSyxFQUFDO0lBRTNDLElBQUdBLEtBQUssS0FBRyxLQUFLLEVBQUM7UUFDYixPQUFNO1lBQ0ZDLElBQUksRUFBRSxvQkFBb0I7U0FDN0I7S0FDSjtDQUVKO0FBQ00sU0FBU0UsVUFBVSxDQUFDQyxPQUFPLEdBQUcsS0FBSyxFQUFDO0lBQ3ZDLE9BQU07UUFDRkgsSUFBSSxFQUFFLGFBQWE7UUFDbkJHLE9BQU8sRUFBRUEsT0FBTztLQUNuQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vY29tcG9uZW50cy9jb250ZXh0L2FjdGlvbnMvc2l0ZUFjdGlvbi5qcz81NWNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUaGVtZSh0aGVtZSA9IGZhbHNlKXtcclxuXHJcbiAgICBpZih0aGVtZT09PWZhbHNlKXtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVEhFTUUnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiAnQ1VTVE9NX1RIRU1FJyxcclxuICAgICAgICB0aGVtZTogdGhlbWVcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVNlbGVjdFBhaXIodGhlbWUgPSBmYWxzZSl7XHJcblxyXG4gICAgaWYodGhlbWU9PT1mYWxzZSl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1NFTEVDVF9QQUlSJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNpdGUocGF5bG9hZCA9IGZhbHNlKXtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiAnVVBEQVRFX1NJVEUnLFxyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWRcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ0b2dnbGVUaGVtZSIsInRoZW1lIiwidHlwZSIsInRvZ2dsZVNlbGVjdFBhaXIiLCJ1cGRhdGVTaXRlIiwicGF5bG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/context/actions/siteAction.js\n");

/***/ }),

/***/ "./components/context/index.js":
/*!*************************************!*\
  !*** ./components/context/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connect\": () => (/* reexport safe */ react_redux__WEBPACK_IMPORTED_MODULE_0__.connect),\n/* harmony export */   \"marketAction\": () => (/* reexport safe */ _actions_marketAction__WEBPACK_IMPORTED_MODULE_3__.marketAction),\n/* harmony export */   \"marketReducer\": () => (/* reexport safe */ _reducer_marketReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"orderAction\": () => (/* reexport safe */ _actions_orderAction__WEBPACK_IMPORTED_MODULE_4__.orderAction),\n/* harmony export */   \"orderReducer\": () => (/* reexport safe */ _reducer_orderReducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"siteReducer\": () => (/* reexport safe */ _reducer_siteReducer__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"store\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.store),\n/* harmony export */   \"toggleSelectPair\": () => (/* reexport safe */ _actions_siteAction__WEBPACK_IMPORTED_MODULE_2__.toggleSelectPair),\n/* harmony export */   \"toggleTheme\": () => (/* reexport safe */ _actions_siteAction__WEBPACK_IMPORTED_MODULE_2__.toggleTheme),\n/* harmony export */   \"updateSite\": () => (/* reexport safe */ _actions_siteAction__WEBPACK_IMPORTED_MODULE_2__.updateSite),\n/* harmony export */   \"useSelector\": () => (/* reexport safe */ react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector),\n/* harmony export */   \"wrapper\": () => (/* reexport safe */ _store__WEBPACK_IMPORTED_MODULE_1__.wrapper)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./components/context/store.js\");\n/* harmony import */ var _actions_siteAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/siteAction */ \"./components/context/actions/siteAction.js\");\n/* harmony import */ var _actions_marketAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions/marketAction */ \"./components/context/actions/marketAction.js\");\n/* harmony import */ var _actions_orderAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/orderAction */ \"./components/context/actions/orderAction.js\");\n/* harmony import */ var _reducer_siteReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducer/siteReducer */ \"./components/context/reducer/siteReducer.js\");\n/* harmony import */ var _reducer_marketReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer/marketReducer */ \"./components/context/reducer/marketReducer.js\");\n/* harmony import */ var _reducer_orderReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducer/orderReducer */ \"./components/context/reducer/orderReducer.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ1Y7QUFFdUM7QUFDM0I7QUFDRjtBQUVXO0FBQ0k7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2J0Yy5wcm8ubmV4dC8uL2NvbXBvbmVudHMvY29udGV4dC9pbmRleC5qcz8yNzViIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y29ubmVjdCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5leHBvcnQge3N0b3JlLCB3cmFwcGVyfSBmcm9tIFwiLi9zdG9yZVwiO1xyXG5cclxuZXhwb3J0IHt0b2dnbGVUaGVtZSwgdG9nZ2xlU2VsZWN0UGFpciwgdXBkYXRlU2l0ZX0gZnJvbSBcIi4vYWN0aW9ucy9zaXRlQWN0aW9uXCJcclxuZXhwb3J0IHttYXJrZXRBY3Rpb259IGZyb20gXCIuL2FjdGlvbnMvbWFya2V0QWN0aW9uXCJcclxuZXhwb3J0IHtvcmRlckFjdGlvbn0gZnJvbSBcIi4vYWN0aW9ucy9vcmRlckFjdGlvblwiXHJcblxyXG5leHBvcnQge2RlZmF1bHQgYXMgc2l0ZVJlZHVjZXJ9IGZyb20gXCIuL3JlZHVjZXIvc2l0ZVJlZHVjZXJcIlxyXG5leHBvcnQge2RlZmF1bHQgYXMgbWFya2V0UmVkdWNlcn0gZnJvbSBcIi4vcmVkdWNlci9tYXJrZXRSZWR1Y2VyXCJcclxuZXhwb3J0IHtkZWZhdWx0IGFzIG9yZGVyUmVkdWNlcn0gZnJvbSBcIi4vcmVkdWNlci9vcmRlclJlZHVjZXJcIiJdLCJuYW1lcyI6WyJjb25uZWN0IiwidXNlU2VsZWN0b3IiLCJzdG9yZSIsIndyYXBwZXIiLCJ0b2dnbGVUaGVtZSIsInRvZ2dsZVNlbGVjdFBhaXIiLCJ1cGRhdGVTaXRlIiwibWFya2V0QWN0aW9uIiwib3JkZXJBY3Rpb24iLCJkZWZhdWx0Iiwic2l0ZVJlZHVjZXIiLCJtYXJrZXRSZWR1Y2VyIiwib3JkZXJSZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/index.js\n");

/***/ }),

/***/ "./components/context/reducer/marketReducer.js":
/*!*****************************************************!*\
  !*** ./components/context/reducer/marketReducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ marketReducer)\n/* harmony export */ });\nconst initialState = {};\nfunction marketReducer(state = initialState, action) {\n    let data;\n    switch(action.type){\n        case \"UPDATE_MARKET_DATA\":\n            data = {\n                ...state,\n                ...action.payload\n            };\n            return data;\n        case \"CUSTOM_MARKET_DATA\":\n            data = {\n                ...action.payload\n            };\n            return data;\n        case \"RESET_MARKET_DATA\":\n            data = {};\n            return data;\n        default:\n            return state;\n    }\n};\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvcmVkdWNlci9tYXJrZXRSZWR1Y2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsRUFBRTtBQUVSLFNBQVNDLGFBQWEsQ0FBQ0MsS0FBSyxHQUFHRixZQUFZLEVBQUVHLE1BQU0sRUFBQztJQUMvRCxJQUFJQyxJQUFJO0lBQ1IsT0FBUUQsTUFBTSxDQUFDRSxJQUFJO1FBQ2YsS0FBSyxvQkFBb0I7WUFDckJELElBQUksR0FBRztnQkFDSCxHQUFHRixLQUFLO2dCQUNSLEdBQUdDLE1BQU0sQ0FBQ0csT0FBTzthQUNwQixDQUFDO1lBQ0YsT0FBT0YsSUFBSSxDQUFDO1FBQ2hCLEtBQUssb0JBQW9CO1lBQ3JCQSxJQUFJLEdBQUc7Z0JBQ0gsR0FBR0QsTUFBTSxDQUFDRyxPQUFPO2FBQ3BCLENBQUM7WUFDRixPQUFPRixJQUFJLENBQUM7UUFDaEIsS0FBSyxtQkFBbUI7WUFDcEJBLElBQUksR0FBRyxFQUFFLENBQUM7WUFDVixPQUFPQSxJQUFJLENBQUM7UUFFaEI7WUFBUyxPQUFPRixLQUFLLENBQUM7S0FDekI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2J0Yy5wcm8ubmV4dC8uL2NvbXBvbmVudHMvY29udGV4dC9yZWR1Y2VyL21hcmtldFJlZHVjZXIuanM/MzU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcmtldFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbil7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgIGNhc2UgXCJVUERBVEVfTUFSS0VUX0RBVEFcIjpcclxuICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgY2FzZSBcIkNVU1RPTV9NQVJLRVRfREFUQVwiOlxyXG4gICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgY2FzZSBcIlJFU0VUX01BUktFVF9EQVRBXCI6XHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYXJrZXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJkYXRhIiwidHlwZSIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/context/reducer/marketReducer.js\n");

/***/ }),

/***/ "./components/context/reducer/orderReducer.js":
/*!****************************************************!*\
  !*** ./components/context/reducer/orderReducer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ orderReducer)\n/* harmony export */ });\nconst initialState = {};\nfunction orderReducer(state = initialState, action) {\n    let data;\n    switch(action.type){\n        case \"UPDATE_ORDER_DATA\":\n            // console.log(action.payload);\n            data = {\n                ...state,\n                ...action.payload\n            };\n            return data;\n        case \"RESET_ORDER_DATA\":\n            data = {};\n            return data;\n        default:\n            return state;\n    }\n};\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvcmVkdWNlci9vcmRlclJlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBRyxFQUFFO0FBRVIsU0FBU0MsWUFBWSxDQUFDQyxLQUFLLEdBQUdGLFlBQVksRUFBRUcsTUFBTSxFQUFDO0lBQzlELElBQUlDLElBQUk7SUFDUixPQUFRRCxNQUFNLENBQUNFLElBQUk7UUFDZixLQUFLLG1CQUFtQjtZQUNwQiwrQkFBK0I7WUFDL0JELElBQUksR0FBRztnQkFDSCxHQUFHRixLQUFLO2dCQUNSLEdBQUdDLE1BQU0sQ0FBQ0csT0FBTzthQUNwQixDQUFDO1lBQ0YsT0FBT0YsSUFBSSxDQUFDO1FBQ2hCLEtBQUssa0JBQWtCO1lBQ25CQSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ1YsT0FBT0EsSUFBSSxDQUFDO1FBRWhCO1lBQVMsT0FBT0YsS0FBSyxDQUFDO0tBQ3pCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGMucHJvLm5leHQvLi9jb21wb25lbnRzL2NvbnRleHQvcmVkdWNlci9vcmRlclJlZHVjZXIuanM/OTI2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGVyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKXtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBcIlVQREFURV9PUkRFUl9EQVRBXCI6XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgY2FzZSBcIlJFU0VUX09SREVSX0RBVEFcIjpcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm9yZGVyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/reducer/orderReducer.js\n");

/***/ }),

/***/ "./components/context/reducer/siteReducer.js":
/*!***************************************************!*\
  !*** ./components/context/reducer/siteReducer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    theme: \"dark\",\n    language: \"TR\",\n    currencies: {},\n    filters: {},\n    user: {\n        isLogin: false,\n        favorites: []\n    },\n    current: {\n        pair: \"BTC/TRY\",\n        tab: \"TRY\",\n        marketDropdown: false\n    }\n};\nfunction siteReducer(state = initialState, action) {\n    let data;\n    switch(action.type){\n        case \"TOGGLE_THEME\":\n            data = {\n                ...state,\n                theme: state.theme === \"light\" ? \"dark\" : \"light\"\n            };\n            return data;\n        case \"CUSTOM_THEME\":\n            data = {\n                ...state,\n                theme: action.theme\n            };\n            return data;\n        case \"UPDATE_LANGUAGE\":\n            data = {\n                ...state,\n                language: action.value\n            };\n            return data;\n        case \"UPDATE_SITE\":\n            data = {\n                ...state,\n                ...action.payload\n            };\n            return data;\n        default:\n            return state;\n    }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (siteReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvcmVkdWNlci9zaXRlUmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHO0lBQ2pCQyxLQUFLLEVBQUUsTUFBTTtJQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxPQUFPLEVBQUUsRUFBRTtJQUNYQyxJQUFJLEVBQUU7UUFDRkMsT0FBTyxFQUFFLEtBQUs7UUFDZEMsU0FBUyxFQUFFLEVBQUU7S0FDaEI7SUFDREMsT0FBTyxFQUFFO1FBQ0xDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLEdBQUcsRUFBRSxLQUFLO1FBQ1ZDLGNBQWMsRUFBRSxLQUFLO0tBQ3hCO0NBQ0o7QUFFRCxTQUFTQyxXQUFXLENBQUNDLEtBQUssR0FBR2IsWUFBWSxFQUFFYyxNQUFNLEVBQUM7SUFDOUMsSUFBSUMsSUFBSTtJQUNSLE9BQVFELE1BQU0sQ0FBQ0UsSUFBSTtRQUNmLEtBQUssY0FBYztZQUNmRCxJQUFJLEdBQUc7Z0JBQ0gsR0FBR0YsS0FBSztnQkFDUlosS0FBSyxFQUFFWSxLQUFLLENBQUNaLEtBQUssS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU87YUFDcEQsQ0FBQztZQUNGLE9BQU9jLElBQUksQ0FBQztRQUNoQixLQUFLLGNBQWM7WUFDZkEsSUFBSSxHQUFHO2dCQUNILEdBQUdGLEtBQUs7Z0JBQ1JaLEtBQUssRUFBRWEsTUFBTSxDQUFDYixLQUFLO2FBQ3RCLENBQUM7WUFDRixPQUFPYyxJQUFJLENBQUM7UUFDaEIsS0FBSyxpQkFBaUI7WUFDbEJBLElBQUksR0FBRztnQkFDSCxHQUFHRixLQUFLO2dCQUNSWCxRQUFRLEVBQUVZLE1BQU0sQ0FBQ0csS0FBSzthQUN6QixDQUFDO1lBQ0YsT0FBT0YsSUFBSSxDQUFDO1FBQ2hCLEtBQUssYUFBYTtZQUNkQSxJQUFJLEdBQUc7Z0JBQ0gsR0FBR0YsS0FBSztnQkFDUixHQUFHQyxNQUFNLENBQUNJLE9BQU87YUFDcEIsQ0FBQztZQUNGLE9BQU9ILElBQUksQ0FBQztRQUVoQjtZQUFTLE9BQU9GLEtBQUssQ0FBQztLQUN6QjtDQUNKOztBQUVELGlFQUFlRCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idGMucHJvLm5leHQvLi9jb21wb25lbnRzL2NvbnRleHQvcmVkdWNlci9zaXRlUmVkdWNlci5qcz8xMTBiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICBsYW5ndWFnZTogJ1RSJyxcclxuICAgIGN1cnJlbmNpZXM6IHt9LFxyXG4gICAgZmlsdGVyczoge30sXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgICAgZmF2b3JpdGVzOiBbXVxyXG4gICAgfSxcclxuICAgIGN1cnJlbnQ6IHtcclxuICAgICAgICBwYWlyOiAnQlRDL1RSWScsXHJcbiAgICAgICAgdGFiOiAnVFJZJyxcclxuICAgICAgICBtYXJrZXREcm9wZG93bjogZmFsc2VcclxuICAgIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHNpdGVSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pe1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIFwiVE9HR0xFX1RIRU1FXCI6XHJcbiAgICAgICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRoZW1lOiBzdGF0ZS50aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgY2FzZSBcIkNVU1RPTV9USEVNRVwiOlxyXG4gICAgICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0aGVtZTogYWN0aW9uLnRoZW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIGNhc2UgXCJVUERBVEVfTEFOR1VBR0VcIjpcclxuICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IGFjdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICBjYXNlIFwiVVBEQVRFX1NJVEVcIjpcclxuICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpdGVSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidGhlbWUiLCJsYW5ndWFnZSIsImN1cnJlbmNpZXMiLCJmaWx0ZXJzIiwidXNlciIsImlzTG9naW4iLCJmYXZvcml0ZXMiLCJjdXJyZW50IiwicGFpciIsInRhYiIsIm1hcmtldERyb3Bkb3duIiwic2l0ZVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImRhdGEiLCJ0eXBlIiwidmFsdWUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/reducer/siteReducer.js\n");

/***/ }),

/***/ "./components/context/store.js":
/*!*************************************!*\
  !*** ./components/context/store.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store),\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ \"./components/context/index.js\");\n\n\n\n\n\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    site: ___WEBPACK_IMPORTED_MODULE_6__.siteReducer,\n    market: ___WEBPACK_IMPORTED_MODULE_6__.marketReducer,\n    order: ___WEBPACK_IMPORTED_MODULE_6__.orderReducer\n});\nconst persistConfig = {\n    key: \"context\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),\n    blacklist: []\n};\n// middleware\nconst middleware = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())\n];\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistReducer)(persistConfig, rootReducer);\n// creating store\nconst store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));\n// assigning store to next wrapper\nconst makeStore = ()=>(0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRleHQvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9FO0FBQ3BDO0FBQytCO0FBQ1o7QUFDVTtBQUNiO0FBRVc7QUFFM0QsTUFBTVksV0FBVyxHQUFHVixzREFBZSxDQUFDO0lBQ2hDVyxJQUFJLEVBQUVKLDBDQUFXO0lBQ2pCSyxNQUFNLEVBQUVKLDRDQUFhO0lBQ3JCSyxLQUFLLEVBQUVKLDJDQUFZO0NBQ3RCLENBQUM7QUFFRixNQUFNSyxhQUFhLEdBQUc7SUFDbEJDLEdBQUcsRUFBRSxTQUFTO0lBQ2RULE9BQU87SUFDUFUsU0FBUyxFQUFFLEVBQUU7Q0FDaEI7QUFDRCxhQUFhO0FBQ2IsTUFBTUMsVUFBVSxHQUFHO0lBQUNoQixvREFBSztDQUFDO0FBRTFCLE1BQU1pQixnQkFBZ0IsR0FBR2IsNkRBQWMsQ0FBQ1MsYUFBYSxFQUFFSixXQUFXLENBQUM7QUFFbkUsaUJBQWlCO0FBQ1YsTUFBTVMsS0FBSyxHQUFHckIsa0RBQVcsQ0FDNUJvQixnQkFBZ0IsRUFDaEJoQiw2RUFBbUIsQ0FBQ0gsc0RBQWUsSUFBSWtCLFVBQVUsQ0FBQyxDQUFDLENBQ3RELENBQUM7QUFFRixrQ0FBa0M7QUFDbEMsTUFBTUcsU0FBUyxHQUFHLElBQU1oQiwyREFBWSxDQUFDZSxLQUFLLENBQUM7QUFFcEMsTUFBTUUsT0FBTyxHQUFHbEIsaUVBQWEsQ0FBQ2lCLFNBQVMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vY29tcG9uZW50cy9jb250ZXh0L3N0b3JlLmpzP2M2ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnN9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSwgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG5cclxuaW1wb3J0IHtzaXRlUmVkdWNlcixtYXJrZXRSZWR1Y2VyLCBvcmRlclJlZHVjZXJ9IGZyb20gXCIuL1wiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgc2l0ZTogc2l0ZVJlZHVjZXIsXHJcbiAgICBtYXJrZXQ6IG1hcmtldFJlZHVjZXIsXHJcbiAgICBvcmRlcjogb3JkZXJSZWR1Y2VyXHJcbn0pO1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogXCJjb250ZXh0XCIsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgYmxhY2tsaXN0OiBbXVxyXG59O1xyXG4vLyBtaWRkbGV3YXJlXHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdO1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuXHJcbi8vIGNyZWF0aW5nIHN0b3JlXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gICAgcGVyc2lzdGVkUmVkdWNlcixcclxuICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4pO1xyXG5cclxuLy8gYXNzaWduaW5nIHN0b3JlIHRvIG5leHQgd3JhcHBlclxyXG5jb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7Il0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwidGh1bmsiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiY3JlYXRlV3JhcHBlciIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwic3RvcmFnZSIsInNpdGVSZWR1Y2VyIiwibWFya2V0UmVkdWNlciIsIm9yZGVyUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwic2l0ZSIsIm1hcmtldCIsIm9yZGVyIiwicGVyc2lzdENvbmZpZyIsImtleSIsImJsYWNrbGlzdCIsIm1pZGRsZXdhcmUiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/context/store.js\n");

/***/ }),

/***/ "./components/socket/socket.js":
/*!*************************************!*\
  !*** ./components/socket/socket.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SocketContext\": () => (/* binding */ SocketContext),\n/* harmony export */   \"socket\": () => (/* binding */ socket),\n/* harmony export */   \"useSocket\": () => (/* binding */ useSocket)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./components/context/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst SOCKET_URL = \"https://nws.btcoley.com\";\nconst SocketContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext();\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect(SOCKET_URL, {\n    transports: [\n        \"websocket\"\n    ]\n});\n// this.props.socket.on(\"message\", d => {\n//     store.dispatch(updateSite({\n//         ...this.props.context,\n//         currencies: d.currencies\n//     }));\n// });\nsocket.on(\"ticker\", (d)=>{\n    _context__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_context__WEBPACK_IMPORTED_MODULE_2__.marketAction)(d));\n});\nsocket.on(\"orderbook\", (d)=>{\n    _context__WEBPACK_IMPORTED_MODULE_2__.store.dispatch((0,_context__WEBPACK_IMPORTED_MODULE_2__.orderAction)(d));\n});\nconst useSocket = ()=>react__WEBPACK_IMPORTED_MODULE_0___default().useContext(SocketContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvY2tldC9zb2NrZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQytCO0FBRXZFLE1BQU1NLFVBQVUsR0FBR0MseUJBQW9CO0FBQ2hDLE1BQU1HLGFBQWEsaUJBQUdWLDBEQUFtQixFQUFFLENBQUM7QUFFNUMsTUFBTVksTUFBTSxHQUFHWCxnRUFBZ0IsQ0FBQ0ssVUFBVSxFQUFFO0lBQUNRLFVBQVUsRUFBRTtRQUFDLFdBQVc7S0FBQztDQUFDLENBQUMsQ0FBQztBQUVoRix5Q0FBeUM7QUFDekMsa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxtQ0FBbUM7QUFDbkMsV0FBVztBQUNYLE1BQU07QUFFTkYsTUFBTSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFQyxDQUFBQSxDQUFDLEdBQUk7SUFDckJkLG9EQUFjLENBQUNDLHNEQUFZLENBQUNhLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDbkMsQ0FBQyxDQUFDO0FBRUhKLE1BQU0sQ0FBQ0csRUFBRSxDQUFDLFdBQVcsRUFBRUMsQ0FBQUEsQ0FBQyxHQUFJO0lBQ3hCZCxvREFBYyxDQUFDRSxxREFBVyxDQUFDWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2xDLENBQUMsQ0FBQztBQUVJLE1BQU1FLFNBQVMsR0FBRyxJQUFNbEIsdURBQWdCLENBQUNVLGFBQWEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vY29tcG9uZW50cy9zb2NrZXQvc29ja2V0LmpzPzAxOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc29ja2V0aW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IHtzdG9yZSwgbWFya2V0QWN0aW9uLCBvcmRlckFjdGlvbiwgdXBkYXRlU2l0ZX0gZnJvbSBcIi4uL2NvbnRleHRcIlxyXG5cclxuY29uc3QgU09DS0VUX1VSTCA9IHByb2Nlc3MuZW52LldTU19IT1NUO1xyXG5leHBvcnQgY29uc3QgU29ja2V0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NrZXQgPSBzb2NrZXRpby5jb25uZWN0KFNPQ0tFVF9VUkwsIHt0cmFuc3BvcnRzOiBbXCJ3ZWJzb2NrZXRcIl19KTtcclxuXHJcbi8vIHRoaXMucHJvcHMuc29ja2V0Lm9uKFwibWVzc2FnZVwiLCBkID0+IHtcclxuLy8gICAgIHN0b3JlLmRpc3BhdGNoKHVwZGF0ZVNpdGUoe1xyXG4vLyAgICAgICAgIC4uLnRoaXMucHJvcHMuY29udGV4dCxcclxuLy8gICAgICAgICBjdXJyZW5jaWVzOiBkLmN1cnJlbmNpZXNcclxuLy8gICAgIH0pKTtcclxuLy8gfSk7XHJcblxyXG5zb2NrZXQub24oXCJ0aWNrZXJcIiwgZCA9PiB7XHJcbiAgICBzdG9yZS5kaXNwYXRjaChtYXJrZXRBY3Rpb24oZCkpO1xyXG59KTtcclxuXHJcbnNvY2tldC5vbihcIm9yZGVyYm9va1wiLCBkID0+IHtcclxuICAgIHN0b3JlLmRpc3BhdGNoKG9yZGVyQWN0aW9uKGQpKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU29ja2V0ID0gKCkgPT4gUmVhY3QudXNlQ29udGV4dChTb2NrZXRDb250ZXh0KTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic29ja2V0aW8iLCJzdG9yZSIsIm1hcmtldEFjdGlvbiIsIm9yZGVyQWN0aW9uIiwidXBkYXRlU2l0ZSIsIlNPQ0tFVF9VUkwiLCJwcm9jZXNzIiwiZW52IiwiV1NTX0hPU1QiLCJTb2NrZXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInNvY2tldCIsImNvbm5lY3QiLCJ0cmFuc3BvcnRzIiwib24iLCJkIiwiZGlzcGF0Y2giLCJ1c2VTb2NrZXQiLCJ1c2VDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/socket/socket.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_context_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/context/store */ \"./components/context/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var components_socket_socket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/socket/socket */ \"./components/socket/socket.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_socket_socket__WEBPACK_IMPORTED_MODULE_6__]);\ncomponents_socket_socket__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: components_context_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_socket_socket__WEBPACK_IMPORTED_MODULE_6__.SocketContext.Provider, {\n            value: components_socket_socket__WEBPACK_IMPORTED_MODULE_6__.socket,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                socket: components_socket_socket__WEBPACK_IMPORTED_MODULE_6__.socket\n            }, void 0, false, {\n                fileName: \"C:\\\\btcOley\\\\btc.pro.next\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\btcOley\\\\btc.pro.next\\\\pages\\\\_app.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\btcOley\\\\btc.pro.next\\\\pages\\\\_app.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (components_context_store__WEBPACK_IMPORTED_MODULE_4__.wrapper.withRedux(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ007QUFDRDtBQUM0QjtBQUNuQjtBQUN3QjtBQUNHO0FBRWxFLFNBQVNRLEtBQUssQ0FBQyxFQUFDQyxTQUFTLEdBQUVDLFNBQVMsR0FBQyxFQUFFO0lBRW5DLHFCQUNJLDhEQUFDUCxpREFBUTtRQUFDRCxLQUFLLEVBQUVBLDJEQUFLO2tCQUNsQiw0RUFBQ0UsNEVBQXNCO1lBQUNPLEtBQUssRUFBRU4sNERBQU07c0JBQ2pDLDRFQUFDSSxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Z0JBQUVMLE1BQU0sRUFBRUEsNERBQU07Ozs7O29CQUFLOzs7OztnQkFDeEI7Ozs7O1lBQ2xCLENBQ2Q7Q0FDSjtBQUVELGlFQUFlSix1RUFBaUIsQ0FBQ08sS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnRjLnByby5uZXh0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0ICcuLi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyB3cmFwcGVyLCBzdG9yZSB9IGZyb20gXCJjb21wb25lbnRzL2NvbnRleHQvc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1NvY2tldENvbnRleHQsIHNvY2tldH0gZnJvbSBcImNvbXBvbmVudHMvc29ja2V0L3NvY2tldFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgY3JlYXRlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgPFNvY2tldENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NvY2tldH0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBzb2NrZXQ9e3NvY2tldH0gIC8+XG4gICAgICAgICAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gICAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcClcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndyYXBwZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwiU29ja2V0Q29udGV4dCIsInNvY2tldCIsIlRoZW1lUHJvdmlkZXIiLCJjcmVhdGVUaGVtZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidmFsdWUiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();