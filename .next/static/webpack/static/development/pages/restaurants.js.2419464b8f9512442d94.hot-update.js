webpackHotUpdate("static/development/pages/restaurants.js",{

/***/ "./components/Cart/Cart.js":
/*!*********************************!*\
  !*** ./components/Cart/Cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _Context_AppProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Context/AppProvider */ "./components/Context/AppProvider.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");





var _jsxFileName = "/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/components/Cart/Cart.js";


/* components/Cart/Cart.js */








var Cart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart, _React$Component);

  function Cart(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Cart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Cart).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Cart, [{
    key: "addItem",
    value: function addItem(item) {
      this.props.context.addItem(item);
    }
  }, {
    key: "removeItem",
    value: function removeItem(item) {
      this.props.context.removeItem(item);
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.props.context.clearItems(items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.context.items;
      var isAuthenticated = this.props.isAuthenticated;
      console.log(isAuthenticated);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Card"], {
        style: {
          padding: "10px 5px"
        },
        className: "cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardTitle"], {
        style: {
          margin: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Your Order:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["CardBody"], {
        style: {
          padding: 10
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginBottom: 6
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Items:")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, items ? items.map(function (item) {
        if (item.quantity > 0) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            style: {
              marginBottom: 15
            },
            key: item.id,
            className: "jsx-3176042969" + " " + "items-one",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            id: "item-price",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, "\xA0 $", item.price), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            id: "item-name",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, "\xA0 ", item.name)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 5,
              marginLeft: 10
            },
            onClick: _this.addItem.bind(_this, item),
            color: "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "+"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 15,
              marginRight: 10
            },
            onClick: _this.removeItem.bind(_this, item),
            color: "link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, "-"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            className: "jsx-3176042969",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, item.quantity, "x")));
        }
      }) : null, this.props.isAuthenticated ? items.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Badge"], {
        style: {
          width: 200,
          padding: 10
        },
        color: "light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        style: {
          fontWeight: 100,
          color: "gray"
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Total:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "$", this.props.context.total)), this.props.router.pathname != "/checkout" ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          marginTop: 10,
          marginRight: 10
        },
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
        href: "/checkout",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          width: "100%"
        },
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Order"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        style: {
          width: "100%"
        },
        color: "primary",
        onClick: this.clearItems.bind(this, items),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Clear Cart"))) : null) : null : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h5", {
        className: "jsx-3176042969",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Login to Order")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3176042969",
        __self: this
      }, "#item-price.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}#item-quantity.jsx-3176042969{font-size:0.95em;padding-bottom:4px;color:rgba(158,158,158,1);}#item-name.jsx-3176042969{font-size:1.3em;color:rgba(97,97,97,1);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHRqcy1zdHJhcGktc3RyaXBlLWZvb2QtZGVsaXZlcnkvZnJvbnRlbmQvY29tcG9uZW50cy9DYXJ0L0NhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0lvQixBQUc2QixBQUlDLEFBS0QsZ0JBUlUsQUFTQSxDQUxQLG1CQUNVLEdBSi9CLEFBU0EsdUJBSkEiLCJmaWxlIjoiL1VzZXJzL2ovRGV2ZWxvcG1lbnQvUHJvamVjdHMvcmVhY3QtbmV4dGpzLXN0cmFwaS1zdHJpcGUtZm9vZC1kZWxpdmVyeS9mcm9udGVuZC9jb21wb25lbnRzL0NhcnQvQ2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvbXBvbmVudHMvQ2FydC9DYXJ0LmpzICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZWZhdWx0UGFnZSBmcm9tIFwiLi4vLi4vaG9jcy9kZWZhdWx0UGFnZVwiO1xuaW1wb3J0IHsgd2l0aENvbnRleHQgfSBmcm9tIFwiLi4vQ29udGV4dC9BcHBQcm92aWRlclwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJyZWNvbXBvc2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIEJhZGdlXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGFkZEl0ZW0oaXRlbSkge1xuICAgIHRoaXMucHJvcHMuY29udGV4dC5hZGRJdGVtKGl0ZW0pO1xuICB9XG5cbiAgcmVtb3ZlSXRlbShpdGVtKSB7XG4gICAgdGhpcy5wcm9wcy5jb250ZXh0LnJlbW92ZUl0ZW0oaXRlbSk7XG4gIH1cblxuICBjbGVhckl0ZW1zKCkge1xuICAgIHRoaXMucHJvcHMuY29udGV4dC5jbGVhckl0ZW1zKGl0ZW1zKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzLmNvbnRleHQ7XG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc29sZS5sb2coaXNBdXRoZW50aWNhdGVkKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4IDVweFwiIH19IGNsYXNzTmFtZT1cImNhcnRcIj5cbiAgICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTAgfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpdGVtc1xuICAgICAgICAgICAgICAgID8gaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4mbmJzcDsgJHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tbmFtZVwiPiZuYnNwOyB7aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmFkZEl0ZW0uYmluZCh0aGlzLCBpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZW1vdmVJdGVtLmJpbmQodGhpcywgaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkID8gKFxuICAgICAgICAgICAgICAgIGl0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2Ugc3R5bGU9e3sgd2lkdGg6IDIwMCwgcGFkZGluZzogMTAgfX0gY29sb3I9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAsIGNvbG9yOiBcImdyYXlcIiB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke3RoaXMucHJvcHMuY29udGV4dC50b3RhbH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5yb3V0ZXIucGF0aG5hbWUgIT0gXCIvY2hlY2tvdXRcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5jbGVhckl0ZW1zLmJpbmQodGhpcyxpdGVtcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkNsZWFyIENhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8aDU+TG9naW4gdG8gT3JkZXI8L2g1PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2l0ZW0tcHJpY2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDk3LCA5NywgOTcsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoOTcsIDk3LCA5NywgMSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoQ29udGV4dCxcbiAgZGVmYXVsdFBhZ2UsXG4gIHdpdGhSb3V0ZXJcbikoQ2FydCk7XG4iXX0= */\n/*@ sourceURL=/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/components/Cart/Cart.js */"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_9__["compose"])(_Context_AppProvider__WEBPACK_IMPORTED_MODULE_8__["withContext"], _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_7__["default"], next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(Cart));

/***/ })

})
//# sourceMappingURL=restaurants.js.2419464b8f9512442d94.hot-update.js.map