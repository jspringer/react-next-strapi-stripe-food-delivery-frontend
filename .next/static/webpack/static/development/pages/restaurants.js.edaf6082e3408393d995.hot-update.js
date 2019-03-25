webpackHotUpdate("static/development/pages/restaurants.js",{

/***/ "./pages/restaurants.js":
/*!******************************!*\
  !*** ./pages/restaurants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var _components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Cart/Cart */ "./components/Cart/Cart.js");
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");






var _jsxFileName = "/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/pages/restaurants.js";



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      id\n      name\n      dishes {\n        id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* /pages/restaurants.js */









var Restaurants =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Restaurants, _React$Component);

  function Restaurants(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Restaurants);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Restaurants).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Restaurants, [{
    key: "addItem",
    value: function addItem(item) {
      this.props.context.addItem(item);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$data = _this$props.data,
          loading = _this$props$data.loading,
          error = _this$props$data.error,
          restaurant = _this$props$data.restaurant,
          router = _this$props.router,
          context = _this$props.context,
          isAuthenticated = _this$props.isAuthenticated;
      if (error) return "Error Loading Dishes";

      if (restaurant) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            position: "absolute",
            left: "125px",
            top: "13px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          style: {
            fontSize: "1.3rem",
            fontFamily: "'Gothic A1', Roboto, Helvetica, Arial, 'Open Sans'",
            fontWeight: "500"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, " - ", restaurant.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
          style: {
            width: "100%",
            textAlign: "center",
            paddingTop: "2px",
            paddingLeft: "20px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          xs: "9",
          style: {
            padding: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "h-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, restaurant.dishes.map(function (res) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Card"], {
            style: {
              width: "250px",
              margin: "0 10px 30px 10px",
              height: "520px"
            },
            key: res.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardImg"], {
            top: true,
            style: {
              height: 250
            },
            src: res.image.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardBody"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardTitle"], {
            className: "card-title",
            style: {
              textAlign: "left",
              fontSize: "1.3rem",
              color: "black",
              fontFamily: "'Gothic A1', Helvetica, Arial",
              fontWeight: "900"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, res.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardText"], {
            className: "card-description",
            style: {
              textAlign: "left",
              fontSize: "0.9rem",
              color: "black",
              fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'",
              fontWeight: "500"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, res.description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "jsx-2389452981" + " " + "card-footer cardfooter",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              width: "100%",
              alignContent: "center",
              alignItems: "center"
            },
            className: "jsx-2389452981",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
            onClick: _this.addItem.bind(_this, res),
            outline: true,
            color: "primary",
            style: {
              width: "100%",
              textAlign: "center"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "+ Add To Cart ($", res.price, ")")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
            id: "2389452981",
            __self: this
          }, "a.jsx-2389452981{color:white;}a.jsx-2389452981:link{-webkit-text-decoration:none;text-decoration:none;color:white;}.container-fluid.jsx-2389452981{margin-bottom:30px;}.btn-outline-primary.jsx-2389452981{color:#007bff !important;}a.jsx-2389452981:hover{color:white !important;}.cardfooter.jsx-2389452981{position:absolute;bottom:0;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHRqcy1zdHJhcGktc3RyaXBlLWZvb2QtZGVsaXZlcnkvZnJvbnRlbmQvcGFnZXMvcmVzdGF1cmFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0V5QixBQUd5QyxBQUdTLEFBSUYsQUFHTSxBQUdGLEFBR04sWUFmbkIsTUFnQlUsQ0FUVixJQU1BLEVBSEEsRUFPWSxXQUNaLFlBZmMsWUFDZCIsImZpbGUiOiIvVXNlcnMvai9EZXZlbG9wbWVudC9Qcm9qZWN0cy9yZWFjdC1uZXh0anMtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL3BhZ2VzL3Jlc3RhdXJhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL3BhZ2VzL3Jlc3RhdXJhbnRzLmpzICovXG5cbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCB7IHdpdGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGV4dC9BcHBQcm92aWRlclwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29sLFxuICBSb3dcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcnQvQ2FydFwiO1xuaW1wb3J0IGRlZmF1bHRQYWdlIGZyb20gXCIuLi9ob2NzL2RlZmF1bHRQYWdlXCI7XG5cbmNsYXNzIFJlc3RhdXJhbnRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBhZGRJdGVtKGl0ZW0pIHtcbiAgICB0aGlzLnByb3BzLmNvbnRleHQuYWRkSXRlbShpdGVtKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgcmVzdGF1cmFudCB9LFxuICAgICAgcm91dGVyLFxuICAgICAgY29udGV4dCxcbiAgICAgIGlzQXV0aGVudGljYXRlZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChlcnJvcikgcmV0dXJuIFwiRXJyb3IgTG9hZGluZyBEaXNoZXNcIjtcblxuICAgIGlmIChyZXN0YXVyYW50KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgbGVmdDogXCIxMjVweFwiLCB0b3A6IFwiMTNweFwiIH19PlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMS4zcmVtXCIsIGZvbnRGYW1pbHk6IFwiJ0dvdGhpYyBBMScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgJ09wZW4gU2FucydcIiwgZm9udFdlaWdodDogXCI1MDBcIiB9fT4gLSB7cmVzdGF1cmFudC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Um93IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBwYWRkaW5nVG9wOiBcIjJweFwiLCBwYWRkaW5nTGVmdDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICA8Q29sIHhzPVwiOVwiIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9fSBjbGFzc05hbWU9XCJoLTEwMFwiPlxuICAgICAgICAgICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAocmVzID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjI1MHB4XCIsIG1hcmdpbjogXCIwIDEwcHggMzBweCAxMHB4XCIsIGhlaWdodDogXCI1MjBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17cmVzLmlkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRTaXplOiBcIjEuM3JlbVwiLCBjb2xvcjogXCJibGFja1wiLCBmb250RmFtaWx5OiBcIidHb3RoaWMgQTEnLCBIZWx2ZXRpY2EsIEFyaWFsXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCIgfX0+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiwgZm9udFNpemU6IFwiMC45cmVtXCIsIGNvbG9yOiBcImJsYWNrXCIsIGZvbnRGYW1pbHk6IFwiUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCAnT3BlbiBTYW5zJ1wiLCBmb250V2VpZ2h0OiBcIjUwMFwiIH19PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBjYXJkZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRJdGVtLmJpbmQodGhpcywgcmVzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0ICgke3Jlcy5wcmljZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz1cIjNcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJ0IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xuICB9XG59XG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIGlkXG4gICAgICBuYW1lXG4gICAgICBkaXNoZXMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHByaWNlXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbi8vIFRoZSBgZ3JhcGhxbGAgd3JhcHBlciBleGVjdXRlcyBhIEdyYXBoUUwgcXVlcnkgYW5kIG1ha2VzIHRoZSByZXN1bHRzXG4vLyBhdmFpbGFibGUgb24gdGhlIGBkYXRhYCBwcm9wIG9mIHRoZSB3cmFwcGVkIGNvbXBvbmVudCAoUmVzdGF1cmFudExpc3QpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4gIGRlZmF1bHRQYWdlLFxuICB3aXRoQ29udGV4dCxcbiAgZ3JhcGhxbChHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICBvcHRpb25zOiBwcm9wcyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpZDogcHJvcHMucm91dGVyLnF1ZXJ5LmlkXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcbiAgICBwcm9wczogKHsgZGF0YSB9KSA9PiAoeyBkYXRhIH0pXG4gIH0pXG4pKFJlc3RhdXJhbnRzKTsiXX0= */\n/*@ sourceURL=/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/pages/restaurants.js */")));
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          xs: "3",
          style: {
            padding: 0
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_14__["default"], {
          isAuthenticated: isAuthenticated,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        })))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "Loading");
    }
  }]);

  return Restaurants;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var GET_RESTAURANT_DISHES = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()); // The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"], _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_15__["default"], _components_Context_AppProvider__WEBPACK_IMPORTED_MODULE_12__["withContext"], Object(react_apollo__WEBPACK_IMPORTED_MODULE_10__["graphql"])(GET_RESTAURANT_DISHES, {
  options: function options(props) {
    return {
      variables: {
        id: props.router.query.id
      }
    };
  },
  props: function props(_ref) {
    var data = _ref.data;
    return {
      data: data
    };
  }
}))(Restaurants));

/***/ })

})
//# sourceMappingURL=restaurants.js.edaf6082e3408393d995.hot-update.js.map