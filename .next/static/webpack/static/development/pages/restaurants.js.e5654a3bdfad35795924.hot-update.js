webpackHotUpdate("static/development/pages/restaurants.js",{

/***/ "./components/Context/AppProvider.js":
/*!*******************************************!*\
  !*** ./components/Context/AppProvider.js ***!
  \*******************************************/
/*! exports provided: withContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);










var _jsxFileName = "/Users/j/Development/Projects/react-nextjs-strapi-stripe-food-delivery/frontend/components/Context/AppProvider.js";

/* /components/Context/AppProvider */


/* First we will make a new context */

var AppContext = react__WEBPACK_IMPORTED_MODULE_10___default.a.createContext();
/* Then create a provider Component */

var AppProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AppProvider, _React$Component);

  function AppProvider(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AppProvider);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AppProvider).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "addItem", function (item) {
      var items = _this.state.items; //check for item already in cart
      //if not in cart, add item if item is found increase quanity ++

      var newItem = items.find(function (i) {
        return i.id === item.id;
      });

      if (!newItem) {
        //set quantity property to 1
        item.quantity = 1;

        _this.setState({
          items: _this.state.items.concat(item),
          total: _this.state.total + item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("cart", _this.state.items);
        });
      } else {
        _this.setState({
          items: _this.state.items.map(function (item) {
            return item.id === newItem.id ? _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
              quantity: item.quantity + 1
            }) : item;
          }),
          total: _this.state.total + item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("cart", _this.state.items);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "removeItem", function (item) {
      var items = _this.state.items; //check for item already in cart
      //if not in cart, add item if item is found increase quanity ++

      var newItem = items.find(function (i) {
        return i.id === item.id;
      });

      if (newItem.quantity > 1) {
        _this.setState({
          items: _this.state.items.map(function (item) {
            return item.id === newItem.id ? _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, item, {
              quantity: item.quantity - 1
            }) : item;
          }),
          total: _this.state.total - item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("cart", _this.state.items);
        });
      } else {
        var _items = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.items);

        var index = _items.findIndex(function (i) {
          return i.id === newItem.id;
        });

        _items.splice(index, 1);

        _this.setState({
          items: _items,
          total: _this.state.total - item.price
        }, function () {
          return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("cart", _this.state.items);
        });
      }
    });

    _this.state = {
      items: [],
      total: null
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AppProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var cart = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.getJSON("cart"); //if items in cart, set items and total from cookie

      console.log(cart);
      var total;

      if (cart) {
        cart.forEach(function (item) {
          total = item.price * item.quantity;

          _this2.setState({
            items: cart,
            total: total
          });
        });
      }
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      var _this3 = this;

      var items = this.state.items; //check for item already in cart
      //if not in cart, add item if item is found increase quanity ++

      this.setState({
        items: [],
        total: 0
      }, function () {
        return js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("cart", _this3.state.items);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AppContext.Provider, {
        value: {
          items: this.state.items,
          addItem: this.addItem,
          removeItem: this.removeItem,
          clearItems: this.clearItems,
          total: this.state.total
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);
/* then make a consumer which will surface it as an HOC */
// This function takes a component...


function withContext(Component) {
  // ...and returns another component...
  return function ContextComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(AppContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, function (context) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        context: context,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }));
    });
  };
}
/* harmony default export */ __webpack_exports__["default"] = (AppProvider);

/***/ })

})
//# sourceMappingURL=restaurants.js.e5654a3bdfad35795924.hot-update.js.map