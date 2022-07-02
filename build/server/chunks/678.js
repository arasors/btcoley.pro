exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 96:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dark-logo.0e57e22b.svg","height":140,"width":559});

/***/ }),

/***/ 8010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/light-logo.45fa42b2.svg","height":140,"width":559});

/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ themeClassExits)
/* harmony export */ });
const themeClassExits = (theme)=>{
    if (theme === "light") {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
        }
    } else {
        document.documentElement.classList.add("dark");
    }
};


/***/ }),

/***/ 6480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9526);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);





function Footer(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Logo__WEBPACK_IMPORTED_MODULE_3__/* .Logo */ .T, {
                theme: props.site.theme
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
                title: "Online",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-center gap-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "bg-success w-3 h-3 rounded-full"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-xs font-light select-none pt-0.5",
                            children: "Online"
                        })
                    ]
                })
            })
        ]
    });
}
const mapStateToProps = (state)=>{
    return {
        site: state.site
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Footer));


/***/ }),

/***/ 9403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ liblary_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/context/index.js + 6 modules
var context = __webpack_require__(3015);
// EXTERNAL MODULE: ./components/controllers/index.js + 7 modules
var controllers = __webpack_require__(9127);
;// CONCATENATED MODULE: ./components/data/header.js
const header = {
    settings: {
        left: {
            visible: true,
            align: "start"
        },
        center: {
            visible: true,
            align: "start"
        },
        right: {
            visible: true,
            align: "end"
        }
    },
    grids: {
        left: [
            "LOGO",
            {
                auth: false,
                text: "navbar_gelismis_al_sat",
                to: "/pro",
                ico: "auto",
                dropdown: false
            },
            {
                auth: false,
                text: "navbar_basit_al_sat",
                to: "/basit",
                ico: "auto",
                dropdown: false
            }
        ],
        center: [],
        right: [
            {
                auth: true,
                text: "navbar_yatir",
                to: "/hesabim/yatir",
                ico: "auto",
                variant: "text",
                dropdown_type: "list",
                dropdown: [
                    {
                        auth: true,
                        text: "navbar_kripto_yatir",
                        to: "/hesabim/kripto-yatir",
                        ico: "kripto-yatir"
                    },
                    {
                        auth: true,
                        text: "navbar_tl_yatir",
                        to: "/hesabim/tl-yatir",
                        ico: "tl-yatir"
                    }
                ]
            },
            {
                auth: true,
                text: "navbar_cek",
                to: "/hesabim/cek",
                ico: "auto",
                variant: "text",
                dropdown_type: "list",
                dropdown: [
                    {
                        auth: true,
                        text: "navbar_kripto_cek",
                        to: "/hesabim/kripto-cek",
                        ico: "kripto-cek"
                    },
                    {
                        auth: true,
                        text: "navbar_tl_cek",
                        to: "/hesabim/tl-cek",
                        ico: "tl-cek"
                    }
                ]
            },
            {
                auth: false,
                text: "navbar_giris_yap",
                to: "/auth/giris-yap",
                ico: "auto",
                dropdown: false
            },
            {
                auth: false,
                text: "navbar_yeni_uyelik",
                to: "/auth/yeni-uyelik",
                ico: "auto",
                dropdown: false
            },
            "DIVIDE",
            "THEME_TOGGLE", 
        ]
    }
};

// EXTERNAL MODULE: ./components/liblary/component/Logo.js
var Logo = __webpack_require__(9526);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Switch"
var Switch_ = __webpack_require__(3191);
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);
;// CONCATENATED MODULE: ./components/liblary/component/Switch.js




const MaterialUISwitch = (0,styles_.styled)((Switch_default()))(({ theme  })=>({
        width: 62,
        height: 34,
        padding: 7,
        "& .MuiSwitch-switchBase": {
            margin: 1,
            padding: 0,
            transform: "translateX(6px)",
            "&.Mui-checked": {
                color: "#fff",
                transform: "translateX(22px)",
                "& .MuiSwitch-thumb:before": {
                    backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
                },
                "& + .MuiSwitch-track": {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be"
                }
            }
        },
        "& .MuiSwitch-thumb": {
            backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
            width: 32,
            height: 32,
            "&:before": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("orange")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
            }
        },
        "& .MuiSwitch-track": {
            opacity: 1,
            backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            borderRadius: 20 / 2
        }
    }));
const Android12Switch = (0,styles_.styled)((Switch_default()))(({ theme  })=>({
        padding: 8,
        "& .MuiSwitch-track": {
            borderRadius: 22 / 2,
            "&:before, &:after": {
                content: '""',
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: 16,
                height: 16
            },
            "&:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                left: 12
            },
            "&:after": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(theme.palette.getContrastText(theme.palette.primary.main))}" d="M19,13H5V11H19V13Z" /></svg>')`,
                right: 12
            }
        },
        "& .MuiSwitch-thumb": {
            boxShadow: "none",
            width: 16,
            height: 16,
            margin: 2
        }
    }));
const IOSSwitch = (0,styles_.styled)((props)=>/*#__PURE__*/ jsx_runtime_.jsx((Switch_default()), {
        focusVisibleClassName: ".Mui-focusVisible",
        disableRipple: true,
        ...props
    }))(({ theme  })=>({
        width: 42,
        height: 26,
        padding: 0,
        "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
                transform: "translateX(16px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                    opacity: 1,
                    border: 0
                },
                "&.Mui-disabled + .MuiSwitch-track": {
                    opacity: 0.5
                }
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
                color: "#33cf4d",
                border: "6px solid #fff"
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
                color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600]
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: theme.palette.mode === "light" ? 0.7 : 0.3
            }
        },
        "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 22,
            height: 22
        },
        "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create([
                "background-color"
            ], {
                duration: 500
            })
        }
    }));
const AntSwitch = (0,styles_.styled)((Switch_default()))(({ theme  })=>({
        width: 28,
        height: 16,
        padding: 0,
        display: "flex",
        "&:active": {
            "& .MuiSwitch-thumb": {
                width: 15
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(9px)"
            }
        },
        "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
                transform: "translateX(12px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff"
                }
            }
        },
        "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create([
                "width"
            ], {
                duration: 200
            })
        },
        "& .MuiSwitch-track": {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
            boxSizing: "border-box"
        }
    }));

;// CONCATENATED MODULE: ./components/liblary/index.js



// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./components/liblary/Header.js








class Header extends external_react_.Component {
    constructor(props){
        super(props);
    }
    state = {
        menu: false
    };
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    id: "desktop",
                    children: header.grids && Object.entries(header.grids).map((headerItem, headerKey)=>{
                        if (Object(header.settings)[headerItem[0]].visible === false) return false;
                        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            id: headerItem[0],
                            className: `custom-justify-${Object(header.settings)[headerItem[0]].align}`,
                            children: headerItem[1] && headerItem[1].map((item, key)=>{
                                if (item === "LOGO") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {
                                            theme: this.props.site.theme
                                        })
                                    }, key);
                                }
                                if (item === "DIVIDE") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                        sx: {
                                            height: 28,
                                            m: 0.5
                                        },
                                        orientation: "vertical",
                                        id: "separate"
                                    }, key);
                                }
                                if (item === "THEME_TOGGLE") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        id: "toggle-theme",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                            title: (0,controllers/* Translate */.vN)(this.props.site.theme === "light" ? "gece_moduna_gec" : "aydinlik_moda_gec"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                                                control: /*#__PURE__*/ jsx_runtime_.jsx(MaterialUISwitch, {
                                                    label: ""
                                                }),
                                                checked: this.props.site.theme === "dark",
                                                onChange: controllers/* switchTheme */.tj
                                            })
                                        }, key)
                                    }, key);
                                }
                                if (item.visible === false) return;
                                if (item.auth === true && (this.props.site.user.isLogin === "undefined" || !this.props.site.user.isLogin)) return;
                                if ((typeof item === "object" || Array.isArray(item)) && item.to !== "undefined") {
                                    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: `${item.to}`,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            variant: item.variant || "outlined",
                                            className: "nav-link",
                                            children: (0,controllers/* Translate */.vN)(item.text)
                                        })
                                    }, key);
                                }
                                return false;
                            })
                        }, headerKey);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    id: "mobile",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("section", {
                            className: `custom-justify-center`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* Logo */.T, {
                                            theme: this.props.site.theme
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                            variant: "text",
                                            onClick: ()=>this.setState((state)=>({
                                                        menu: !state.menu
                                                    })),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `menu btn1 ${this.state.menu ? "open" : ""}`,
                                                "data-menu": "1",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-left"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon-right"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "open-menu",
                            className: this.state.menu && "active",
                            children: header.grids && Object.entries(header.grids).map((headerItem, headerKey)=>{
                                if (Object(header.settings)[headerItem[0]].visible === false) return;
                                if (headerItem[1][0] === "LOGO") return false;
                                return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
                                    children: headerItem[1] && headerItem[1].map((item, key)=>{
                                        if (item === "LOGO") return;
                                        if (item === "DIVIDE") {
                                            return /*#__PURE__*/ jsx_runtime_.jsx(material_.Divider, {
                                                sx: {
                                                    height: 28,
                                                    m: 0.5
                                                },
                                                orientation: "horizontal",
                                                id: "separate"
                                            }, key);
                                        }
                                        if (item === "THEME_TOGGLE") {
                                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "toggle-theme",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                                                    title: (0,controllers/* Translate */.vN)(this.props.site.theme === "light" ? "gece_moduna_gec" : "aydinlik_moda_gec"),
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.FormControlLabel, {
                                                        control: /*#__PURE__*/ jsx_runtime_.jsx(MaterialUISwitch, {
                                                            label: ""
                                                        }),
                                                        checked: this.props.site.theme === "dark",
                                                        onChange: controllers/* switchTheme */.tj
                                                    })
                                                }, key)
                                            });
                                        }
                                        if (item.visible === false) return;
                                        if (item.auth === true && (this.props.site.user.isLogin === "undefined" || !this.props.site.user.isLogin)) return;
                                        if ((typeof item === "object" || Array.isArray(item)) && item.to !== "undefined") {
                                            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: `${item.to}`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Button, {
                                                    variant: item.variant || "outlined",
                                                    className: "nav-link",
                                                    children: (0,controllers/* Translate */.vN)(item.text)
                                                })
                                            }, key);
                                        }
                                        return false;
                                    })
                                }, headerKey);
                            })
                        })
                    ]
                })
            ]
        });
    }
}
const mapStateToProps = (state)=>{
    return {
        site: state.site
    };
};
/* harmony default export */ const liblary_Header = ((0,context/* connect */.$j)(mapStateToProps)(Header));


/***/ }),

/***/ 9526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);


function Logo(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: "logo",
        src: __webpack_require__(6674)(`./${props.theme}-logo.svg`),
        ...props
    });
}


/***/ }),

/***/ 3508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 6088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ticker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Ticker extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    state = {};
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            id: "ticker"
        });
    }
};


/***/ }),

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_MarketTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5845);
/* harmony import */ var _component_Ticker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6088);




class Home extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {}
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            id: "home",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Ticker__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    id: "advanced",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_MarketTable__WEBPACK_IMPORTED_MODULE_2__["default"], {})
                })
            ]
        });
    }
};


/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9522);
/* harmony import */ var components_liblary_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9403);
/* harmony import */ var components_liblary_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6480);
/* harmony import */ var components_socket_market__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3508);
/* harmony import */ var components_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3015);
/* harmony import */ var components_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_socket_market__WEBPACK_IMPORTED_MODULE_8__]);
components_socket_market__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











class Main extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props){
        super(props);
    }
    state = {};
    componentDidUpdate(prevProps, prevState, snapshot) {
        (0,components_functions__WEBPACK_IMPORTED_MODULE_10__/* .themeClassExits */ .j)(this.props.site.theme);
    }
    componentDidMount() {
        (0,components_functions__WEBPACK_IMPORTED_MODULE_10__/* .themeClassExits */ .j)(this.props.site.theme);
        this.props.socket.on("message", (d)=>{
            components_context__WEBPACK_IMPORTED_MODULE_9__/* .store.dispatch */ .h.dispatch((0,components_context__WEBPACK_IMPORTED_MODULE_9__/* .updateSite */ .L3)({
                ...this.props.site,
                currencies: d.currencies
            }));
        });
    }
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_liblary_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_socket_market__WEBPACK_IMPORTED_MODULE_8__/* .SocketContext.Consumer */ .Jb.Consumer, {
                    children: (socket)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            socket: socket
                        })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_liblary_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
            ]
        });
    }
}
const mapStateToProps = (state)=>{
    return {
        site: state.site
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps)(Main));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./dark-logo.svg": 96,
	"./light-logo.svg": 8010
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6674;

/***/ })

};
;