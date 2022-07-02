"use strict";
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 9127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vN": () => (/* reexport */ Translate),
  "tj": () => (/* reexport */ switchTheme)
});

// UNUSED EXPORTS: resetMarket, resetOrder, setTheme

// EXTERNAL MODULE: ./components/context/index.js + 6 modules
var context = __webpack_require__(3015);
;// CONCATENATED MODULE: ./components/controllers/siteController.js

const switchTheme = ()=>{
    context/* store.dispatch */.h.dispatch((0,context/* toggleTheme */.X8)());
};
const setTheme = (props)=>{
    store.dispatch({
        type: "CUSTOM_THEME",
        theme: props.payload
    });
};

;// CONCATENATED MODULE: ./components/controllers/marketController.js

const resetMarket = ()=>{
    store.dispatch({
        type: "RESET_MARKET_DATA",
        payload: ""
    });
};

;// CONCATENATED MODULE: ./components/controllers/orderController.js

const resetOrder = ()=>{
    store.dispatch({
        type: "RESET_ORDER_DATA",
        payload: {}
    });
};

;// CONCATENATED MODULE: ./components/data/translate/turkish.json
const turkish_namespaceObject = JSON.parse('{"navbar_gelismis_al_sat":"GELİŞMİŞ AL-SAT","navbar_basit_al_sat":"KOLAY AL-SAT","navbar_yatir":"Yatır","navbar_kripto_yatir":"Kripto Yatır","navbar_tl_yatir":"TL Yatır","navbar_cek":"Çek","navbar_kripto_cek":"Kripto Çek","navbar_tl_cek":"TL Çek","navbar_giris_yap":"ÜYE GİRİŞİ","navbar_yeni_uyelik":"YENİ ÜYELİK","market_table_arama":"Aramaya başla...","market_table_arama_reset":"Aramayı temizle","market_table_favorileri_goster":"Favorileri Göster","market_table_favorileri_gizle":"Favorileri Gizle","market_table_favoriler":"Favoriler","gece_moduna_gec":"Gece Moduna Geç","aydinlik_moda_gec":"Aydınlık Moda Geç","market_table_islem_cifti":"İşlem Çifti","market_table_fiyat":"Fiyat","market_table_degisim":"Değişim","market_table_tab_hepsi":"HEPSİ","sonuc_bulunamadi":"Sonuç bulunamadı"}');
;// CONCATENATED MODULE: ./components/data/translate/english.json
const english_namespaceObject = JSON.parse('{"navbar_gelismis_al_sat":"Advanced Buy-Sell","navbar_basit_al_sat":"Easy Buy-Sell"}');
;// CONCATENATED MODULE: ./components/data/translate/index.js



;// CONCATENATED MODULE: ./components/controllers/translate.js

function Translate(word, language = "turkish") {
    let file = Object(turkish_namespaceObject);
    switch(language){
        case "turkish":
            file = Object(turkish_namespaceObject);
            break;
        case "english":
            file = Object(english_namespaceObject);
            break;
        default:
            return;
    }
    if (file[word]) {
        return file[word];
    }
    return word;
};

;// CONCATENATED MODULE: ./components/controllers/index.js






/***/ }),

/***/ 5845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ component_MarketTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/context/index.js + 6 modules
var context = __webpack_require__(3015);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ./components/controllers/index.js + 7 modules
var controllers = __webpack_require__(9127);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@react-icons/all-files/ri/RiCloseFill"
var RiCloseFill_ = __webpack_require__(3097);
// EXTERNAL MODULE: external "@react-icons/all-files/ti/TiStar"
var TiStar_ = __webpack_require__(5894);
// EXTERNAL MODULE: external "@react-icons/all-files/fi/FiAlertCircle"
var FiAlertCircle_ = __webpack_require__(119);
;// CONCATENATED MODULE: ./components/liblary/component/SonucBulunamadi.js



function SonucBulunamadi(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "sonuc-bulunamadi",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(FiAlertCircle_.FiAlertCircle, {
                className: "ico"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: (0,controllers/* Translate */.vN)("sonuc_bulunamadi")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/home/component/MarketTable.js









class MarketTable extends external_react_.Component {
    constructor(props){
        super(props);
    }
    state = {
        search: "",
        showFavorites: false
    };
    componentDidMount() {}
    handleSearchChange = (e)=>{
        this.setState({
            search: e.target.value
        });
    };
    handleSearchReset = (e)=>{
        this.setState({
            search: ""
        });
    };
    handleShowFavorites = ()=>{
        this.setState((state)=>({
                showFavorites: !state.showFavorites
            }));
    };
    handleUpdatePair = (e)=>{
        context/* store.dispatch */.h.dispatch((0,context/* updateSite */.L3)({
            ...this.props.site,
            current: {
                ...this.props.site.current,
                pair: e
            }
        }));
    };
    handleUpdateTab = (e)=>{
        if (this.props.site?.current?.tab === e) return false;
        context/* store.dispatch */.h.dispatch((0,context/* updateSite */.L3)({
            ...this.props.site,
            current: {
                ...this.props.site.current,
                tab: e
            }
        }));
    };
    handleUpdateFavorite = (e)=>{
        let checkExits = this.props.site.user?.favorites && this.props.site.user.favorites.includes(e);
        if (checkExits === true) {
            context/* store.dispatch */.h.dispatch((0,context/* updateSite */.L3)({
                ...this.props.site,
                user: {
                    ...this.props.user,
                    favorites: this.props.site.user.favorites.filter((item)=>item !== e)
                }
            }));
            return true;
        }
        context/* store.dispatch */.h.dispatch((0,context/* updateSite */.L3)({
            ...this.props.site,
            user: {
                ...this.props.user,
                favorites: [
                    ...this.props.site.user.favorites,
                    e
                ]
            }
        }));
    };
    market = ()=>{
        return Object.entries(this.props.market).filter((t)=>{
            if (!JSON.stringify(t).toUpperCase().includes(this.state.search.toUpperCase())) return false;
            if (this.state.showFavorites && (!this.props.site.user?.favorites || !this.props.site.user?.favorites.includes(t[0]))) return false;
            if (this.props.site.current.tab !== "HEPS\u0130" && !t[0].includes(this.props.site.current.tab)) return false;
            return true;
        });
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            id: "market-table",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ToggleButtonGroup, {
                    value: this.props.site.current?.tab || "TRY",
                    id: "tab",
                    onChange: (e)=>this.handleUpdateTab(e.target.value),
                    "aria-label": "outlined button group",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ToggleButton, {
                            value: "TRY",
                            children: "TRY"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ToggleButton, {
                            value: "USDT",
                            children: "USDT"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.ToggleButton, {
                            value: "HEPS\u0130",
                            children: (0,controllers/* Translate */.vN)("market_table_tab_hepsi")
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "search",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Paper, {
                        component: "form",
                        id: "search-form",
                        elevation: 0,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.InputBase, {
                                sx: {
                                    flex: 1
                                },
                                placeholder: (0,controllers/* Translate */.vN)("market_table_arama"),
                                inputProps: {
                                    "aria-label": "search",
                                    "id": "search-input"
                                },
                                autoComplete: "off",
                                value: this.state.search,
                                onChange: this.handleSearchChange
                            }),
                            this.state.search && /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                title: (0,controllers/* Translate */.vN)("market_table_arama_reset"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
                                    type: "button",
                                    id: "search-reset",
                                    onClick: this.handleSearchReset,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RiCloseFill_.RiCloseFill, {
                                        className: "ico"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                title: (0,controllers/* Translate */.vN)(this.state.showFavorites ? "market_table_favorileri_gizle" : "market_table_favorileri_goster"),
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.IconButton, {
                                    type: "button",
                                    id: "favorites",
                                    onClick: this.handleShowFavorites,
                                    className: this.state.showFavorites ? "active" : "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(TiStar_.TiStar, {
                                            className: "ico"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: (0,controllers/* Translate */.vN)("market_table_favoriler")
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ButtonGroup, {
                    orientation: "vertical",
                    "aria-label": "vertical contained button group",
                    variant: "text",
                    id: "market",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                            className: "market-title",
                            disabled: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pair",
                                    children: (0,controllers/* Translate */.vN)("market_table_islem_cifti")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "percentage",
                                    children: (0,controllers/* Translate */.vN)("market_table_degisim")
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "price",
                                    children: (0,controllers/* Translate */.vN)("market_table_fiyat")
                                })
                            ]
                        }),
                        this.props.market && this.market().map((item, key)=>{
                            let pair = item[0], itemPrice = item[1] || {
                                ask: 0,
                                low: 0,
                                high: 0
                            }, changePercentage = (Number(itemPrice.low) / Number(itemPrice.high)).toFixed(2), isCurrent = this.props.site.current?.pair === pair, isFavorite = this.props.site.user?.favorites && this.props.site.user?.favorites.includes(pair);
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Button, {
                                className: external_classnames_default()({
                                    "market-item group": true,
                                    "active": isCurrent,
                                    "favorite": isFavorite
                                }),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "pair",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(TiStar_.TiStar, {
                                                className: "ico",
                                                onClick: ()=>this.handleUpdateFavorite(pair)
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "title",
                                                onClick: ()=>this.handleUpdatePair(pair),
                                                children: pair
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "percentage",
                                        onClick: ()=>this.handleUpdatePair(pair),
                                        children: [
                                            isNaN(changePercentage) ? 0 : changePercentage,
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "price",
                                        onClick: ()=>this.handleUpdatePair(pair),
                                        children: itemPrice.ask || "0,00"
                                    })
                                ]
                            }, key);
                        }),
                        (!this.props.market || this.market().length === 0) && /*#__PURE__*/ jsx_runtime_.jsx(SonucBulunamadi, {})
                    ]
                })
            ]
        });
    }
}
const mapStateToProps = (state)=>{
    return {
        site: state.site,
        market: state.market
    };
};
/* harmony default export */ const component_MarketTable = ((0,context/* connect */.$j)(mapStateToProps)(MarketTable));


/***/ })

};
;