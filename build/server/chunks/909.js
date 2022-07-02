"use strict";
exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 3015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$j": () => (/* reexport */ external_react_redux_.connect),
  "qe": () => (/* reexport */ marketAction),
  "ag": () => (/* reexport */ marketReducer),
  "Dg": () => (/* reexport */ orderAction),
  "Ky": () => (/* reexport */ orderReducer),
  "Yl": () => (/* reexport */ reducer_siteReducer),
  "h": () => (/* reexport */ store/* store */.h),
  "X8": () => (/* reexport */ toggleTheme),
  "L3": () => (/* reexport */ updateSite)
});

// UNUSED EXPORTS: wrapper

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./components/context/store.js
var store = __webpack_require__(5540);
;// CONCATENATED MODULE: ./components/context/actions/siteAction.js
function toggleTheme(theme = false) {
    if (theme === false) {
        return {
            type: "TOGGLE_THEME"
        };
    }
    return {
        type: "CUSTOM_THEME",
        theme: theme
    };
}
function updateSite(payload = false) {
    return {
        type: "UPDATE_SITE",
        payload: payload
    };
}

;// CONCATENATED MODULE: ./components/context/actions/marketAction.js
function marketAction(payload = "") {
    return {
        type: "UPDATE_MARKET_DATA",
        payload: payload
    };
}

;// CONCATENATED MODULE: ./components/context/actions/orderAction.js
function orderAction(payload = {}) {
    // console.log(payload);
    return {
        type: "UPDATE_ORDER_DATA",
        payload
    };
}

;// CONCATENATED MODULE: ./components/context/reducer/siteReducer.js
const initialState = {
    theme: "dark",
    language: "TR",
    currencies: {},
    user: {
        isLogin: false,
        favorites: []
    },
    current: {
        pair: "BTC/TRY",
        tab: "TRY"
    }
};
function siteReducer(state = initialState, action) {
    let data;
    switch(action.type){
        case "TOGGLE_THEME":
            data = {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            };
            return data;
        case "CUSTOM_THEME":
            data = {
                ...state,
                theme: action.theme
            };
            return data;
        case "UPDATE_LANGUAGE":
            data = {
                ...state,
                language: action.value
            };
            return data;
        case "UPDATE_SITE":
            data = {
                ...state,
                ...action.payload
            };
            return data;
        default:
            return state;
    }
}
;
/* harmony default export */ const reducer_siteReducer = (siteReducer);

;// CONCATENATED MODULE: ./components/context/reducer/marketReducer.js
const marketReducer_initialState = {};
function marketReducer(state = marketReducer_initialState, action) {
    let data;
    switch(action.type){
        case "UPDATE_MARKET_DATA":
            data = {
                ...state,
                ...action.payload
            };
            return data;
        case "CUSTOM_MARKET_DATA":
            data = {
                ...action.payload
            };
            return data;
        case "RESET_MARKET_DATA":
            data = {};
            return data;
        default:
            return state;
    }
};
;

;// CONCATENATED MODULE: ./components/context/reducer/orderReducer.js
const orderReducer_initialState = {};
function orderReducer(state = orderReducer_initialState, action) {
    let data;
    switch(action.type){
        case "UPDATE_ORDER_DATA":
            // console.log(action.payload);
            data = {
                ...state,
                ...action.payload
            };
            return data;
        case "RESET_ORDER_DATA":
            data = {};
            return data;
        default:
            return state;
    }
};
;

;// CONCATENATED MODULE: ./components/context/index.js










/***/ }),

/***/ 5540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ wrapper),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8417);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(173);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3015);







const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    site: ___WEBPACK_IMPORTED_MODULE_6__/* .siteReducer */ .Yl,
    market: ___WEBPACK_IMPORTED_MODULE_6__/* .marketReducer */ .ag,
    order: ___WEBPACK_IMPORTED_MODULE_6__/* .orderReducer */ .Ky
});
const persistConfig = {
    key: "context",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),
    blacklist: [
        "ui",
        "market"
    ]
};
// middleware
const middleware = [
    (redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())
];
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistReducer)(persistConfig, rootReducer);
// creating store
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(persistedReducer, (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware)));
// assigning store to next wrapper
const makeStore = ()=>(0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistStore)(store);
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);


/***/ })

};
;