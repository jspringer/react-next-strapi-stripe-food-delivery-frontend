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
        className: "jsx-3601181006" + " " + (pageProps.className != null && pageProps.className || "")
      })))), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3601181006"
      }, "a{color:blue;}a:link{-webkit-text-decoration:none !important;text-decoration:none !important;color:blue !important;}a:hover{color:DeepSkyBlue;}.card{display:inline-block !important;vertical-align:top !important;margin-bottom:30px;}.card-columns{-webkit-column-count:3;column-count:3;}.footer{margin-top:50px;width:100%;height:50px;line-height:50px;background-color:#f5f5f5;text-align:center;font-family:'Gothic A1',Helvetica,Arial;}.footer{position:static;width:100%;height:50px;line-height:50px;background-color:#313131;text-align:center;}a:hover{cursor:pointer;color:yellow;}.footer a{color:#fafafa !important;-webkit-text-decoration:none;text-decoration:none;}.footer a:hover{color:#dadada !important;-webkit-text-decoration:none;text-decoration:none;}.midBgColor{background-color:#ffeae4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHQtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJXLEFBRzBCLEFBR3FCLEFBSWQsQUFHYyxBQUtqQixBQUdDLEFBU0EsQUFRRCxBQUlVLEFBSUEsQUFLQSxXQS9DM0IsSUFtQ2UsQ0FqQkYsQUFTQSxFQXBCYixPQWdDdUIsQUFJQSxBQUt2QixFQTdCYyxBQVNBLENBUWQsSUExQmdDLE1BS2hDLENBS21CLEFBU0EsaUJBUlEsQUFTQSxNQW5CTixVQVJHLEdBcUN4QixBQUlBLE1BaENBLEFBVW9CLEFBU0EsYUEzQnBCLEtBbUI0QyxBQVM1Qyx3Q0FSQSIsImZpbGUiOiIvVXNlcnMvai9EZXZlbG9wbWVudC9Qcm9qZWN0cy9yZWFjdC1uZXh0LXN0cmFwaS1zdHJpcGUtZm9vZC1kZWxpdmVyeS9mcm9udGVuZC9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL19hcHAuanMgKi9cblxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB3aXRoRGF0YSBmcm9tIFwiLi4vbGliL2Fwb2xsb1wiO1xuaW1wb3J0IEFwcFByb3ZpZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHQvQXBwUHJvdmlkZXJcIjtcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgcm91dGVyLCBjdHggfSkge1xuICAgIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCBpc0F1dGhlbnRpY2F0ZWQsIGN0eCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEFwcFByb3ZpZGVyPlxuICAgICAgICAgIDxMYXlvdXQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IHsuLi5wYWdlUHJvcHN9PlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8L0FwcFByb3ZpZGVyPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpsaW5rIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6IERlZXBTa3lCbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XG4gICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dvdGhpYyBBMScsIEhlbHZldGljYSwgQXJpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzE7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiB5ZWxsb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyIGEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZhZmFmYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyIGE6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2RhZGFkYSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWlkQmdDb2xvciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhZTQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTsiXX0= */\n/*@ sourceURL=/Users/j/Development/Projects/react-next-strapi-stripe-food-delivery/frontend/pages/_app.js */"));
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
//# sourceMappingURL=_app.js.c46055fd157de9b12e24.hot-update.js.map