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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Cart_Cart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Cart/Cart */ "./components/Cart/Cart.js");
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");









function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query($id: ID!) {\n    restaurant(id: $id) {\n      _id\n      name\n      dishes {\n        _id\n        name\n        description\n        price\n        image {\n          url\n        }\n      }\n    }\n  }\n"]);

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
            left: "40px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          style: {
            fontSize: "1.6rem",
            fontFamily: "'Gothic A1', Roboto, Helvetica, Arial, 'Open Sans'",
            fontWeight: "900"
          }
        }, restaurant.name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], {
          style: {
            width: "100%",
            textAlign: "center",
            paddingTop: "50px",
            paddingLeft: "20px"
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          xs: "9",
          style: {
            padding: 0
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: "inline-block"
          },
          className: "h-100"
        }, restaurant.dishes.map(function (res) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Card"], {
            style: {
              width: "250px",
              margin: "0 10px 30px 10px",
              height: "520px"
            },
            key: res._id
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardImg"], {
            top: true,
            style: {
              height: 250
            },
            src: res.image.url
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardTitle"], {
            className: "card-title",
            style: {
              textAlign: "left",
              fontSize: "1.3rem",
              color: "black",
              fontFamily: "'Gothic A1', Helvetica, Arial",
              fontWeight: "900"
            }
          }, res.name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["CardText"], {
            className: "card-description",
            style: {
              textAlign: "left",
              fontSize: "0.9rem",
              color: "black",
              fontFamily: "Roboto, Helvetica, Arial, 'Open Sans'",
              fontWeight: "500"
            }
          }, res.description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "jsx-2389452981" + " " + "card-footer cardfooter"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            style: {
              width: "100%",
              alignContent: "center",
              alignItems: "center"
            },
            className: "jsx-2389452981"
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
            onClick: _this.addItem.bind(_this, res),
            outline: true,
            color: "primary",
            style: {
              width: "100%",
              textAlign: "center"
            }
          }, "+ Add To Cart ($", res.price, ")")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
            id: "2389452981"
          }, "a.jsx-2389452981{color:white;}a.jsx-2389452981:link{-webkit-text-decoration:none;text-decoration:none;color:white;}.container-fluid.jsx-2389452981{margin-bottom:30px;}.btn-outline-primary.jsx-2389452981{color:#007bff !important;}a.jsx-2389452981:hover{color:white !important;}.cardfooter.jsx-2389452981{position:absolute;bottom:0;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHQtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL3BhZ2VzL3Jlc3RhdXJhbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFeUIsQUFHeUMsQUFHUyxBQUlGLEFBR00sQUFHRixBQUdOLFlBZm5CLE1BZ0JVLENBVFYsSUFNQSxFQUhBLEVBT1ksV0FDWixZQWZjLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2ovRGV2ZWxvcG1lbnQvUHJvamVjdHMvcmVhY3QtbmV4dC1zdHJhcGktc3RyaXBlLWZvb2QtZGVsaXZlcnkvZnJvbnRlbmQvcGFnZXMvcmVzdGF1cmFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAvcGFnZXMvcmVzdGF1cmFudHMuanMgKi9cblxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tIFwicmVhY3QtYXBvbGxvXCI7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcInJlY29tcG9zZVwiO1xuaW1wb3J0IHsgd2l0aENvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250ZXh0L0FwcFByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBDb2wsXG4gIFJvd1xufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FydC9DYXJ0XCI7XG5pbXBvcnQgZGVmYXVsdFBhZ2UgZnJvbSBcIi4uL2hvY3MvZGVmYXVsdFBhZ2VcIjtcblxuY2xhc3MgUmVzdGF1cmFudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMucHJvcHMuY29udGV4dC5hZGRJdGVtKGl0ZW0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCByZXN0YXVyYW50IH0sXG4gICAgICByb3V0ZXIsXG4gICAgICBjb250ZXh0LFxuICAgICAgaXNBdXRoZW50aWNhdGVkXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGVycm9yKSByZXR1cm4gXCJFcnJvciBMb2FkaW5nIERpc2hlc1wiO1xuXG4gICAgaWYgKHJlc3RhdXJhbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiBcIjQwcHhcIiB9fT5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuNnJlbVwiLCBmb250RmFtaWx5OiBcIidHb3RoaWMgQTEnLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsICdPcGVuIFNhbnMnXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCIgfX0+e3Jlc3RhdXJhbnQubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJvdyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgcGFkZGluZ1RvcDogXCI1MHB4XCIsIHBhZGRpbmdMZWZ0OiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgIDxDb2wgeHM9XCI5XCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiIH19IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgICAgICAge3Jlc3RhdXJhbnQuZGlzaGVzLm1hcChyZXMgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjUwcHhcIiwgbWFyZ2luOiBcIjAgMTBweCAzMHB4IDEwcHhcIiwgaGVpZ2h0OiBcIjUyMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyZXMuX2lkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDI1MCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVzLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRTaXplOiBcIjEuM3JlbVwiLCBjb2xvcjogXCJibGFja1wiLCBmb250RmFtaWx5OiBcIidHb3RoaWMgQTEnLCBIZWx2ZXRpY2EsIEFyaWFsXCIsIGZvbnRXZWlnaHQ6IFwiOTAwXCIgfX0+e3Jlcy5uYW1lfTwvQ2FyZFRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9XCJjYXJkLWRlc2NyaXB0aW9uXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImxlZnRcIiwgZm9udFNpemU6IFwiMC45cmVtXCIsIGNvbG9yOiBcImJsYWNrXCIsIGZvbnRGYW1pbHk6IFwiUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCAnT3BlbiBTYW5zJ1wiLCBmb250V2VpZ2h0OiBcIjUwMFwiIH19PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlciBjYXJkZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGFsaWduQ29udGVudDogXCJjZW50ZXJcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRJdGVtLmJpbmQodGhpcywgcmVzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0ICgke3Jlcy5wcmljZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6bGluayB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz1cIjNcIiBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDYXJ0IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xuICB9XG59XG5cbmNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICByZXN0YXVyYW50KGlkOiAkaWQpIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgZGlzaGVzIHtcbiAgICAgICAgX2lkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgcHJpY2VcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuLy8gVGhlIGBncmFwaHFsYCB3cmFwcGVyIGV4ZWN1dGVzIGEgR3JhcGhRTCBxdWVyeSBhbmQgbWFrZXMgdGhlIHJlc3VsdHNcbi8vIGF2YWlsYWJsZSBvbiB0aGUgYGRhdGFgIHByb3Agb2YgdGhlIHdyYXBwZWQgY29tcG9uZW50IChSZXN0YXVyYW50TGlzdClcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbiAgZGVmYXVsdFBhZ2UsXG4gIHdpdGhDb250ZXh0LFxuICBncmFwaHFsKEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgIG9wdGlvbnM6IHByb3BzID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlkOiBwcm9wcy5yb3V0ZXIucXVlcnkuaWRcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIHByb3BzOiAoeyBkYXRhIH0pID0+ICh7IGRhdGEgfSlcbiAgfSlcbikoUmVzdGF1cmFudHMpOyJdfQ== */\n/*@ sourceURL=/Users/j/Development/Projects/react-next-strapi-stripe-food-delivery/frontend/pages/restaurants.js */")));
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          xs: "3",
          style: {
            padding: 0
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Cart_Cart__WEBPACK_IMPORTED_MODULE_14__["default"], {
          isAuthenticated: isAuthenticated
        })))));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", null, "Loading");
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
//# sourceMappingURL=restaurants.js.589d65a93ee5525fa0cc.hot-update.js.map