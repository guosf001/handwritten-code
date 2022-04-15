/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/_react-dom@18.0.0@react-dom/client.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.8@react-redux/es/index.js");
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app */ "./src/app.jsx");
/* harmony import */ var _src_store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/store/index */ "./src/store/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/_antd@4.19.5@antd/dist/antd.css");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! connected-react-router */ "./node_modules/_connected-react-router@6.9.2@connected-react-router/esm/index.js");







var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
  store: _src_store_index__WEBPACK_IMPORTED_MODULE_4__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(connected_react_router__WEBPACK_IMPORTED_MODULE_6__.ConnectedRouter, {
  history: _src_store_index__WEBPACK_IMPORTED_MODULE_4__.history
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_app__WEBPACK_IMPORTED_MODULE_3__["default"], null))));

/***/ }),

/***/ "./src/Routes.jsx":
/*!************************!*\
  !*** ./src/Routes.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@5.3.0@react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router@5.2.1@react-router/esm/react-router.js");
/* harmony import */ var _components_core_Written__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/core/Written */ "./src/components/core/Written.jsx");
/* harmony import */ var _components_core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/core/Home */ "./src/components/core/Home.jsx");





var RoutesConfig = function RoutesConfig() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/",
    component: _components_core_Home__WEBPACK_IMPORTED_MODULE_2__["default"],
    exact: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
    path: "/written",
    component: _components_core_Written__WEBPACK_IMPORTED_MODULE_1__["default"]
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoutesConfig);

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Routes_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Routes.jsx */ "./src/Routes.jsx");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Routes_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
});

/***/ }),

/***/ "./src/components/core/Home.jsx":
/*!**************************************!*\
  !*** ./src/components/core/Home.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.8@react-redux/es/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/core/Layout.jsx");




var Home = function Home() {
  var state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state;
  });
  console.log('state :>> ', state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Home");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/core/Layout.jsx":
/*!****************************************!*\
  !*** ./src/components/core/Layout.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/_antd@4.19.5@antd/es/layout/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./src/components/core/Navigation.jsx");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/components/core/style.css");


var Header = antd__WEBPACK_IMPORTED_MODULE_1__["default"].Header,
    Content = antd__WEBPACK_IMPORTED_MODULE_1__["default"].Content,
    Footer = antd__WEBPACK_IMPORTED_MODULE_1__["default"].Footer;



var LayoutContent = function LayoutContent(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, {
    style: {
      backgroundColor: '#ffffff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navigation__WEBPACK_IMPORTED_MODULE_2__.Navigation, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Content, {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "site-layout-content"
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "\xA92022 Created by erscheint"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutContent);

/***/ }),

/***/ "./src/components/core/Navigation.jsx":
/*!********************************************!*\
  !*** ./src/components/core/Navigation.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Navigation": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.8@react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/_antd@4.19.5@antd/es/menu/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.7.0@@ant-design/icons/es/icons/HomeFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/_@ant-design_icons@4.7.0@@ant-design/icons/es/icons/FormOutlined.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/_react-router-dom@5.3.0@react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function useActive(current, path) {
  return current === path ? 'ant-menu-item-selected' : '';
}

var Navigation = function Navigation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1'),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var router = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.router;
  });
  var pathname = router.location.pathname;
  var isHome = useActive(pathname, '/');
  var isWritten = useActive(pathname, '/written');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mode: "horizontal",
    selectable: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "1",
    className: isHome,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, "\u9996\u9875")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(antd__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
    key: "2",
    className: isWritten,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/written"
  }, "\u624B\u5199\u9898")));
};

/***/ }),

/***/ "./src/components/core/Written.jsx":
/*!*****************************************!*\
  !*** ./src/components/core/Written.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/_react@18.0.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/_react-redux@7.2.8@react-redux/es/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/components/core/Layout.jsx");




var Written = function Written() {
  var state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state;
  });
  console.log('state :>> ', state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Written");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Written);

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "history": () => (/* binding */ history)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/_redux@4.1.2@redux/es/redux.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/_history@4.10.1@history/esm/history.js");
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/store/reducers/rootReducer.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "./node_modules/_connected-react-router@6.9.2@connected-react-router/esm/middleware.js");




var history = (0,history__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)();
var store = (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)((0,_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(history), (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)((0,connected_react_router__WEBPACK_IMPORTED_MODULE_3__["default"])(history)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/store/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/store/reducers/rootReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/_redux@4.1.2@redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connected-react-router */ "./node_modules/_connected-react-router@6.9.2@connected-react-router/esm/index.js");
/* harmony import */ var _test_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.reducer */ "./src/store/reducers/test.reducer.js");




var createRootReducer = function createRootReducer(history) {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    test: _test_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
    router: (0,connected_react_router__WEBPACK_IMPORTED_MODULE_2__.connectRouter)(history)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRootReducer);

/***/ }),

/***/ "./src/store/reducers/test.reducer.js":
/*!********************************************!*\
  !*** ./src/store/reducers/test.reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state;
});

/***/ }),

/***/ "./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/components/core/style.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/components/core/style.css ***!
  \**********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/sourceMaps.js */ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@6.7.1@css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_6_7_1_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_6_7_1_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".site-layout-content {\n  min-height: 500px;\n  padding: 24px;\n  background: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/components/core/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,gBAAA;AACF","sourcesContent":[".site-layout-content {\n  min-height: 500px;\n  padding: 24px;\n  background: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/core/style.css":
/*!***************************************!*\
  !*** ./src/components/core/style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/_style-loader@3.3.1@style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!../../../node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./style.css */ "./node_modules/_css-loader@6.7.1@css-loader/dist/cjs.js!./node_modules/_less-loader@10.2.0@less-loader/dist/cjs.js!./src/components/core/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_3_3_1_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_3_3_1_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_6_7_1_css_loader_dist_cjs_js_node_modules_less_loader_10_2_0_less_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4= ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhandwritten_code"] = self["webpackChunkhandwritten_code"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules___ant-design_icons_4_7_0_ant-design_icons_es_icons_FormOutlined_js-node_-8bd756"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTU8sU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdULDREQUFVLENBQUNNLFNBQUQsQ0FBdkI7QUFFQUcsSUFBSSxDQUFDQyxNQUFMLGVBQ0UsMkRBQUMsaURBQUQ7QUFBVSxPQUFLLEVBQUVQLHdEQUFLQTtBQUF0QixnQkFDRSwyREFBQyxtRUFBRDtBQUFpQixTQUFPLEVBQUVDLHFEQUFPQTtBQUFqQyxnQkFDRSwyREFBQyxnREFBRCxPQURGLENBREYsQ0FERjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLHNCQUNFLDJEQUFDLHdEQUFELHFCQUNFLDJEQUFDLG9EQUFELHFCQUNFLDJEQUFDLG1EQUFEO0FBQU8sUUFBSSxFQUFDLEdBQVo7QUFBZ0IsYUFBUyxFQUFFRCw2REFBM0I7QUFBaUMsU0FBSztBQUF0QyxJQURGLGVBRUUsMkRBQUMsbURBQUQ7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFTLEVBQUVELGdFQUFPQTtBQUF6QyxJQUZGLENBREYsQ0FERjtBQVFELENBVEQ7O0FBV0EsaUVBQWVFLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFFQSxpRUFBZSxZQUFNO0FBQ25CLHNCQUNFLHFGQUNFLDJEQUFDLG1EQUFELE9BREYsQ0FERjtBQUtELENBTkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRCxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQU1JLEtBQUssR0FBR0Ysd0RBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FBekI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsS0FBMUI7QUFDQSxzQkFBTywyREFBQywrQ0FBRCxlQUFQO0FBQ0QsQ0FKRDs7QUFNQSxpRUFBZUosSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQSxJQUFRTyxNQUFSLEdBQW9DSixtREFBcEM7QUFBQSxJQUFnQkssT0FBaEIsR0FBb0NMLG9EQUFwQztBQUFBLElBQXlCTSxNQUF6QixHQUFvQ04sbURBQXBDO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3RDLHNCQUNFLDJEQUFDLDRDQUFEO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGtCQUNFLDJEQUFDLE1BQUQ7QUFBUSxTQUFLLEVBQUU7QUFBRUMsTUFBQUEsZUFBZSxFQUFFO0FBQW5CO0FBQWYsa0JBQ0UsMkRBQUMsbURBQUQsT0FERixDQURGLGVBSUUsMkRBQUMsT0FBRDtBQUFTLFNBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFoQixrQkFDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQXNDRixRQUF0QyxDQURGLENBSkYsZUFPRSwyREFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVHLE1BQUFBLFNBQVMsRUFBRTtBQUFiO0FBQWYscUNBUEYsQ0FERjtBQVdELENBWkQ7O0FBY0EsaUVBQWVKLGFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNVLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTRCQyxJQUE1QixFQUFrQztBQUNoQyxTQUFPRCxPQUFPLEtBQUtDLElBQVosR0FBbUIsd0JBQW5CLEdBQThDLEVBQXJEO0FBQ0Q7O0FBQ00sSUFBTWIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixrQkFBOEJNLCtDQUFRLENBQUMsR0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT00sT0FBUDtBQUFBLE1BQWdCRSxVQUFoQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUd2Qix3REFBVyxDQUFDLFVBQUNFLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNxQixNQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkQsUUFBakM7QUFDQSxNQUFNRSxNQUFNLEdBQUdQLFNBQVMsQ0FBQ0ssUUFBRCxFQUFXLEdBQVgsQ0FBeEI7QUFDQSxNQUFNRyxTQUFTLEdBQUdSLFNBQVMsQ0FBQ0ssUUFBRCxFQUFXLFVBQVgsQ0FBM0I7QUFFQSxzQkFDRSwyREFBQyw0Q0FBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQXdCLGNBQVUsRUFBRTtBQUFwQyxrQkFDRSwyREFBQyxpREFBRDtBQUFXLE9BQUcsRUFBQyxHQUFmO0FBQW1CLGFBQVMsRUFBRUUsTUFBOUI7QUFBc0MsUUFBSSxlQUFFLDJEQUFDLHlEQUFEO0FBQTVDLGtCQUNFLDJEQUFDLGtEQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsb0JBREYsQ0FERixlQUlFLDJEQUFDLGlEQUFEO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBbUIsYUFBUyxFQUFFQyxTQUE5QjtBQUF5QyxRQUFJLGVBQUUsMkRBQUMseURBQUQ7QUFBL0Msa0JBQ0UsMkRBQUMsa0RBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCwwQkFERixDQUpGLENBREY7QUFVRCxDQWxCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFA7QUFDQTtBQUNBOztBQUVBLElBQU05QixPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCLE1BQU1LLEtBQUssR0FBR0Ysd0RBQVcsQ0FBQyxVQUFDRSxLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBQUQsQ0FBekI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsS0FBMUI7QUFDQSxzQkFBTywyREFBQywrQ0FBRCxrQkFBUDtBQUNELENBSkQ7O0FBTUEsaUVBQWVMLE9BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1WLE9BQU8sR0FBRzJDLDBEQUFpQixFQUFqQztBQUVQLElBQU01QyxLQUFLLEdBQUcyQyxrREFBVyxDQUFDRSxpRUFBaUIsQ0FBQzVDLE9BQUQsQ0FBbEIsRUFBNkJ5QyxzREFBZSxDQUFDSSxrRUFBZ0IsQ0FBQzdDLE9BQUQsQ0FBakIsQ0FBNUMsQ0FBekI7QUFFQSxpRUFBZUQsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTTZDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQzVDLE9BQUQ7QUFBQSxTQUN4QjhDLHNEQUFlLENBQUM7QUFDZEcsSUFBQUEsSUFBSSxFQUFFRCxxREFEUTtBQUVkWixJQUFBQSxNQUFNLEVBQUVXLHFFQUFhLENBQUMvQyxPQUFEO0FBRlAsR0FBRCxDQURTO0FBQUEsQ0FBMUI7O0FBTUEsaUVBQWU0QyxpQkFBZjs7Ozs7Ozs7Ozs7Ozs7QUNWQSxpRUFBZSxZQUFlO0FBQUEsTUFBZDdCLEtBQWMsdUVBQU4sQ0FBTTtBQUM1QixTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDa0k7QUFDakI7QUFDakgsOEJBQThCLG9HQUEyQixDQUFDLDZHQUFxQztBQUMvRjtBQUNBLGdFQUFnRSxzQkFBc0Isa0JBQWtCLHFCQUFxQixHQUFHLFNBQVMsZ0dBQWdHLFdBQVcsVUFBVSxXQUFXLCtDQUErQyxzQkFBc0Isa0JBQWtCLHFCQUFxQixHQUFHLHFCQUFxQjtBQUM3WTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QyxNQUF5SDtBQUN6SCxNQUErRztBQUMvRyxNQUFzSDtBQUN0SCxNQUF5STtBQUN6SSxNQUFrSTtBQUNsSSxNQUFrSTtBQUNsSSxNQUE2TDtBQUM3TDtBQUNBOztBQUVBOztBQUVBLDRCQUE0Qix3SEFBbUI7QUFDL0Msd0JBQXdCLHFJQUFhOztBQUVyQyx1QkFBdUIsMEhBQWE7QUFDcEM7QUFDQSxpQkFBaUIsa0hBQU07QUFDdkIsNkJBQTZCLHlIQUFrQjs7QUFFL0MsYUFBYSw2SEFBRyxDQUFDLCtKQUFPOzs7O0FBSXVJO0FBQy9KLE9BQU8saUVBQWUsK0pBQU8sSUFBSSxzS0FBYyxHQUFHLHNLQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvLi9pbmRleC5qcyIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlLy4vc3JjL1JvdXRlcy5qc3giLCJ3ZWJwYWNrOi8vaGFuZHdyaXR0ZW4tY29kZS8uL3NyYy9hcHAuanN4Iiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvLi9zcmMvY29tcG9uZW50cy9jb3JlL0hvbWUuanN4Iiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvLi9zcmMvY29tcG9uZW50cy9jb3JlL0xheW91dC5qc3giLCJ3ZWJwYWNrOi8vaGFuZHdyaXR0ZW4tY29kZS8uL3NyYy9jb21wb25lbnRzL2NvcmUvTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vaGFuZHdyaXR0ZW4tY29kZS8uL3NyYy9jb21wb25lbnRzL2NvcmUvV3JpdHRlbi5qc3giLCJ3ZWJwYWNrOi8vaGFuZHdyaXR0ZW4tY29kZS8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlLy4vc3JjL3N0b3JlL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvLi9zcmMvc3RvcmUvcmVkdWNlcnMvdGVzdC5yZWR1Y2VyLmpzIiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvLi9zcmMvY29tcG9uZW50cy9jb3JlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlLy4vc3JjL2NvbXBvbmVudHMvY29yZS9zdHlsZS5jc3M/YjRkZiIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaGFuZHdyaXR0ZW4tY29kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hhbmR3cml0dGVuLWNvZGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9oYW5kd3JpdHRlbi1jb2RlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vc3JjL2FwcCc7XG5pbXBvcnQgc3RvcmUsIHsgaGlzdG9yeSB9IGZyb20gJy4vc3JjL3N0b3JlL2luZGV4JztcblxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5yb290LnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvbm5lY3RlZFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT5cbiAgICAgIDxBcHAgLz5cbiAgICA8L0Nvbm5lY3RlZFJvdXRlcj5cbiAgPC9Qcm92aWRlcj4sXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEhhc2hSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBXcml0dGVuIGZyb20gJy4vY29tcG9uZW50cy9jb3JlL1dyaXR0ZW4nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2NvcmUvSG9tZSc7XG5cbmNvbnN0IFJvdXRlc0NvbmZpZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8SGFzaFJvdXRlcj5cbiAgICAgIDxTd2l0Y2g+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gZXhhY3QgLz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvd3JpdHRlblwiIGNvbXBvbmVudD17V3JpdHRlbn0gLz5cbiAgICAgIDwvU3dpdGNoPlxuICAgIDwvSGFzaFJvdXRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlc0NvbmZpZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVzQ29uZmlnIGZyb20gJy4vUm91dGVzLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFJvdXRlc0NvbmZpZyAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUpO1xuICBjb25zb2xlLmxvZygnc3RhdGUgOj4+ICcsIHN0YXRlKTtcbiAgcmV0dXJuIDxMYXlvdXQ+SG9tZTwvTGF5b3V0Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgRm9vdGVyIH0gPSBMYXlvdXQ7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnLi9OYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBMYXlvdXRDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwibGF5b3V0XCI+XG4gICAgICA8SGVhZGVyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnIH19PlxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8Q29udGVudCBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxGb290ZXIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT7CqTIwMjIgQ3JlYXRlZCBieSBlcnNjaGVpbnQ8L0Zvb3Rlcj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEZvcm1PdXRsaW5lZCwgSG9tZUZpbGxlZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuZnVuY3Rpb24gdXNlQWN0aXZlKGN1cnJlbnQsIHBhdGgpIHtcbiAgcmV0dXJuIGN1cnJlbnQgPT09IHBhdGggPyAnYW50LW1lbnUtaXRlbS1zZWxlY3RlZCcgOiAnJztcbn1cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnMScpO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm91dGVyKTtcbiAgY29uc3QgcGF0aG5hbWUgPSByb3V0ZXIubG9jYXRpb24ucGF0aG5hbWU7XG4gIGNvbnN0IGlzSG9tZSA9IHVzZUFjdGl2ZShwYXRobmFtZSwgJy8nKTtcbiAgY29uc3QgaXNXcml0dGVuID0gdXNlQWN0aXZlKHBhdGhuYW1lLCAnL3dyaXR0ZW4nKTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0YWJsZT17ZmFsc2V9PlxuICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCIgY2xhc3NOYW1lPXtpc0hvbWV9IGljb249ezxIb21lRmlsbGVkIC8+fT5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+6aaW6aG1PC9MaW5rPlxuICAgICAgPC9NZW51Lkl0ZW0+XG4gICAgICA8TWVudS5JdGVtIGtleT1cIjJcIiBjbGFzc05hbWU9e2lzV3JpdHRlbn0gaWNvbj17PEZvcm1PdXRsaW5lZCAvPn0+XG4gICAgICAgIDxMaW5rIHRvPVwiL3dyaXR0ZW5cIj7miYvlhpnpopg8L0xpbms+XG4gICAgICA8L01lbnUuSXRlbT5cbiAgICA8L01lbnU+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5cbmNvbnN0IFdyaXR0ZW4gPSAoKSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gIGNvbnNvbGUubG9nKCdzdGF0ZSA6Pj4gJywgc3RhdGUpO1xuICByZXR1cm4gPExheW91dD5Xcml0dGVuPC9MYXlvdXQ+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JpdHRlbjtcbiIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVIYXNoSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xuaW1wb3J0IGNyZWF0ZVJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcm9vdFJlZHVjZXInO1xuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuXG5leHBvcnQgY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUhhc2hIaXN0b3J5KCk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY3JlYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSksIGFwcGx5TWlkZGxld2FyZShyb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHRlc3RSZWR1Y2VyIGZyb20gJy4vdGVzdC5yZWR1Y2VyJztcblxuY29uc3QgY3JlYXRlUm9vdFJlZHVjZXIgPSAoaGlzdG9yeSkgPT5cbiAgY29tYmluZVJlZHVjZXJzKHtcbiAgICB0ZXN0OiB0ZXN0UmVkdWNlcixcbiAgICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSksXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb290UmVkdWNlcjtcbiIsImV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IDApID0+IHtcbiAgcmV0dXJuIHN0YXRlO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJANi43LjFAY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDYuNy4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGUtbGF5b3V0LWNvbnRlbnQge1xcbiAgbWluLWhlaWdodDogNTAwcHg7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY29yZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zaXRlLWxheW91dC1jb250ZW50IHtcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAzLjMuMUBzdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDMuMy4xQHN0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDMuMy4xQHN0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAzLjMuMUBzdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDMuMy4xQHN0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDMuMy4xQHN0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckA2LjcuMUBjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9fbGVzcy1sb2FkZXJAMTAuMi4wQGxlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDYuNy4xQGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL19sZXNzLWxvYWRlckAxMC4yLjBAbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2hhbmR3cml0dGVuX2NvZGVcIl0gPSBzZWxmW1wid2VicGFja0NodW5raGFuZHdyaXR0ZW5fY29kZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfX19hbnQtZGVzaWduX2ljb25zXzRfN18wX2FudC1kZXNpZ25faWNvbnNfZXNfaWNvbnNfRm9ybU91dGxpbmVkX2pzLW5vZGVfLThiZDc1NlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiUHJvdmlkZXIiLCJBcHAiLCJzdG9yZSIsImhpc3RvcnkiLCJDb25uZWN0ZWRSb3V0ZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkhhc2hSb3V0ZXIiLCJTd2l0Y2giLCJSb3V0ZSIsIldyaXR0ZW4iLCJIb21lIiwiUm91dGVzQ29uZmlnIiwidXNlU2VsZWN0b3IiLCJMYXlvdXQiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJIZWFkZXIiLCJDb250ZW50IiwiRm9vdGVyIiwiTmF2aWdhdGlvbiIsIkxheW91dENvbnRlbnQiLCJjaGlsZHJlbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJ1c2VTdGF0ZSIsIk1lbnUiLCJGb3JtT3V0bGluZWQiLCJIb21lRmlsbGVkIiwiTGluayIsInVzZUFjdGl2ZSIsImN1cnJlbnQiLCJwYXRoIiwic2V0Q3VycmVudCIsInJvdXRlciIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJpc0hvbWUiLCJpc1dyaXR0ZW4iLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNyZWF0ZUhhc2hIaXN0b3J5IiwiY3JlYXRlUm9vdFJlZHVjZXIiLCJyb3V0ZXJNaWRkbGV3YXJlIiwiY29tYmluZVJlZHVjZXJzIiwiY29ubmVjdFJvdXRlciIsInRlc3RSZWR1Y2VyIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=