webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _lib_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/apollo */ "./lib/apollo.js");
/* harmony import */ var _components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);










/* /pages/_app.js */






var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          isAuthenticated = _this$props.isAuthenticated,
          ctx = _this$props.ctx;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        isAuthenticated: isAuthenticated
      }, pageProps), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        className: "jsx-3809951223" + " " + (pageProps.className != null && pageProps.className || "")
      })))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3809951223"
      }, "a{color:blue;}a:link{-webkit-text-decoration:none !important;text-decoration:none !important;color:blue !important;}a:hover{color:DeepSkyBlue;}.card{display:inline-block !important;vertical-align:top !important;margin-bottom:30px;}.card-columns{-webkit-column-count:3;column-count:3;}.footer{margin-top:50px;width:100%;height:50px;line-height:50px;background-color:#313131;text-align:center;font-family:'Gothic A1',Helvetica,Arial;}a:hover{cursor:pointer;color:yellow;}.footer a{color:#fafafa !important;-webkit-text-decoration:none;text-decoration:none;}.footer a:hover{color:#dadada !important;-webkit-text-decoration:none;text-decoration:none;}.midBgColor{background-color:#ffeae4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHQtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJXLEFBRzBCLEFBR3FCLEFBSWQsQUFHYyxBQUtqQixBQUdDLEFBU0QsQUFJVSxBQUlBLEFBS0EsV0F2QzNCLElBMkJlLENBVEYsRUFYYixPQXdCdUIsQUFJQSxBQUt2QixFQXJCYyxDQVNkLElBbEJnQyxNQUtoQyxDQUttQixpQkFDUSxNQVZOLFVBUkcsR0E2QnhCLEFBSUEsTUF4QkEsQUFVb0IsYUFsQnBCLEtBbUI0Qyx3Q0FDNUMiLCJmaWxlIjoiL1VzZXJzL2ovRGV2ZWxvcG1lbnQvUHJvamVjdHMvcmVhY3QtbmV4dC1zdHJhcGktc3RyaXBlLWZvb2QtZGVsaXZlcnkvZnJvbnRlbmQvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9wYWdlcy9fYXBwLmpzICovXG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgd2l0aERhdGEgZnJvbSBcIi4uL2xpYi9hcG9sbG9cIjtcbmltcG9ydCBBcHBQcm92aWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L0FwcFByb3ZpZGVyXCI7XG5pbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgaXNBdXRoZW50aWNhdGVkLCBjdHggfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxBcHBQcm92aWRlcj5cbiAgICAgICAgICA8TGF5b3V0IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSB7Li4ucGFnZVByb3BzfT5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9BcHBQcm92aWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiBEZWVwU2t5Qmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJkLWNvbHVtbnMge1xuICAgICAgICAgICAgICBjb2x1bW4tY291bnQ6IDM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzE7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHb3RoaWMgQTEnLCBIZWx2ZXRpY2EsIEFyaWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXIgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmFmYWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXIgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5taWRCZ0NvbG9yIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWFlNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApOyJdfQ== */\n/*@ sourceURL=/Users/j/Development/Projects/react-next-strapi-stripe-food-delivery/frontend/pages/_app.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_apollo__WEBPACK_IMPORTED_MODULE_10__["default"])(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.9bd11805d30ba2182d38.hot-update.js.map