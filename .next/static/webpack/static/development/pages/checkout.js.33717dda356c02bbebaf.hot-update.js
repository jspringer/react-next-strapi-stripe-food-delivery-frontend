webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./components/Checkout/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/Checkout/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardSection */ "./components/Checkout/CardSection.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-stripe-elements */ "./node_modules/react-stripe-elements/es/index.js");
/* harmony import */ var react_stripe_elements__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_stripe_elements__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "./node_modules/strapi-sdk-javascript/build/main/index.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);








/* /components/Checkout/CheckoutForm.js */






var apiUrl = process.env.API_URL || "http://localhost:1337";
var strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_11___default.a(apiUrl);
/* components/Checkout/CheckoutForm.js */

var CheckoutForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CheckoutForm, _React$Component);

  function CheckoutForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CheckoutForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CheckoutForm).call(this, props));
    _this.state = {
      data: {
        address: "",
        city: "",
        state: "",
        stripe_id: ""
      },
      error: ""
    };
    _this.submitOrder = _this.submitOrder.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CheckoutForm, [{
    key: "onChange",
    value: function onChange(propertyName, e) {
      var data = this.state.data;
      data[propertyName] = e.target.value;
      this.setState({
        data: data
      });
    }
  }, {
    key: "submitOrder",
    value: function submitOrder() {
      var _this2 = this;

      var context = this.props.context;
      var data = this.state.data;
      console.log(context);
      console.log(this.props.stripe.createToken());
      this.props.stripe.createToken().then(function (res) {
        strapi.createEntry("orders", {
          amount: context.total,
          dishes: context.items,
          address: data.address,
          city: data.city,
          state: data.state,
          token: res.token.id
        }).then(next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/"));
      }).catch(function (err) {
        return _this2.setState({
          error: err
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-360943117" + " " + "paper"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "jsx-360943117"
      }, "Your information:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "jsx-360943117"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        style: {
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          flex: "0.90",
          marginRight: 10
        },
        className: "jsx-360943117"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], null, "Address"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        onChange: this.onChange.bind(this, "address")
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], {
        style: {
          display: "flex"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          flex: "0.65",
          marginRight: "6%"
        },
        className: "jsx-360943117"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], null, "City"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        onChange: this.onChange.bind(this, "city")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          flex: "0.25",
          marginRight: 0
        },
        className: "jsx-360943117"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], null, "State"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        onChange: this.onChange.bind(this, "state")
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_CardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        context: this.props.context,
        data: this.state.data,
        submitOrder: this.submitOrder
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "360943117"
      }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fafafa;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHQtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL2NvbXBvbmVudHMvQ2hlY2tvdXQvQ2hlY2tvdXRGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGVyxBQUcwQyxBQVdsQixBQUdhLEFBSUcsQUFLWCxBQVFBLEFBTUEsQUFLSyxBQXNCQSxBQUtSLEFBU0csQUFjQSxBQUt3QixBQU01QixVQUNaLENBbENpQixHQTlDQyxBQVFBLEFBTUEsQUF5Q0ssQUFjdkIsS0FsRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsS0F5Q1AsR0FuQ0ssQ0FqQ3ZCLEFBc0RrQyxDQTlDeUIsT0FNMUMsSUE4Q1ksQUFTVCxDQS9DSixPQVlGLEdBbkJFLElBUWhCLEdBK0NnQixFQW5DRyxBQW9CbkIsS0F2Q1ksTUFzRXdCLENBZk8sR0F0RDNDLEVBbUJpQixNQTNCakIsU0E2QmlDLGFBaURMLE9BZFksZ0JBakZ6QixBQW9DZixLQWtDaUMsUUFyRWxCLGFBQ00sT0E2Q1IsSUFpRGIsT0FoRG9CLENBN0NBLGlCQThDSCxDQTdDQyxFQThFUCxTQVhYLEFBWVksR0FqQ00sRUE3Q2xCLEtBK0VvQixTQWpDTyxTQWtDUixnQkFqQ00sQ0FrQ3pCLDRHQWpDMkIseUJBQ0osa0RBQ2Esa0NBQ1IsNERBQ1YsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9qL0RldmVsb3BtZW50L1Byb2plY3RzL3JlYWN0LW5leHQtc3RyYXBpLXN0cmlwZS1mb29kLWRlbGl2ZXJ5L2Zyb250ZW5kL2NvbXBvbmVudHMvQ2hlY2tvdXQvQ2hlY2tvdXRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogL2NvbXBvbmVudHMvQ2hlY2tvdXQvQ2hlY2tvdXRGb3JtLmpzICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IENhcmRTZWN0aW9uIGZyb20gXCIuL0NhcmRTZWN0aW9uXCI7XG5cbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBGb3JtVGV4dCwgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgaW5qZWN0U3RyaXBlIH0gZnJvbSBcInJlYWN0LXN0cmlwZS1lbGVtZW50c1wiO1xuaW1wb3J0IFN0cmFwaSBmcm9tIFwic3RyYXBpLXNkay1qYXZhc2NyaXB0L2J1aWxkL21haW5cIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIjtcbmNvbnN0IHN0cmFwaSA9IG5ldyBTdHJhcGkoYXBpVXJsKTtcbi8qIGNvbXBvbmVudHMvQ2hlY2tvdXQvQ2hlY2tvdXRGb3JtLmpzICovXG5jbGFzcyBDaGVja291dEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICBzdGF0ZTogXCJcIixcbiAgICAgICAgc3RyaXBlX2lkOiBcIlwiXG4gICAgICB9LFxuICAgICAgZXJyb3I6IFwiXCJcbiAgICB9O1xuICAgIHRoaXMuc3VibWl0T3JkZXIgPSB0aGlzLnN1Ym1pdE9yZGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNoYW5nZShwcm9wZXJ0eU5hbWUsIGUpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG4gICAgZGF0YVtwcm9wZXJ0eU5hbWVdID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIH1cblxuICBzdWJtaXRPcmRlcigpIHtcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc3RyaXBlLmNyZWF0ZVRva2VuKCkpXG4gICAgdGhpcy5wcm9wcy5zdHJpcGUuY3JlYXRlVG9rZW4oKVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBzdHJhcGlcbiAgICAgICAgLmNyZWF0ZUVudHJ5KFwib3JkZXJzXCIsIHtcbiAgICAgICAgICBhbW91bnQ6IGNvbnRleHQudG90YWwsXG4gICAgICAgICAgZGlzaGVzOiBjb250ZXh0Lml0ZW1zLFxuICAgICAgICAgIGFkZHJlc3M6IGRhdGEuYWRkcmVzcyxcbiAgICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgICAgc3RhdGU6IGRhdGEuc3RhdGUsXG4gICAgICAgICAgdG9rZW46IHJlcy50b2tlbi5pZFxuICAgICAgICB9KVxuICAgICAgICAudGhlbihSb3V0ZXIucHVzaChcIi9cIikpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB0aGlzLnNldFN0YXRlKHsgZXJyb3I6IGVycn0pKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjkwXCIsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgIDxMYWJlbD5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIFwiYWRkcmVzc1wiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNjVcIiwgbWFyZ2luUmlnaHQ6IFwiNiVcIiB9fT5cbiAgICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIFwiY2l0eVwiKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC4yNVwiLCBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAgICAgIDxMYWJlbD5TdGF0ZTwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcInN0YXRlXCIpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Q2FyZFNlY3Rpb25cbiAgICAgICAgICBjb250ZXh0PXt0aGlzLnByb3BzLmNvbnRleHR9XG4gICAgICAgICAgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfVxuICAgICAgICAgIHN1Ym1pdE9yZGVyPXt0aGlzLnN1Ym1pdE9yZGVyfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogIzMyMzI1ZDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzk1Zjg7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgICAgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIC5TdHJpcGVFbGVtZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIENvZGUgUHJvXCIsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYWFiN2M0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgICAuU3RyaXBlRWxlbWVudC0tZm9jdXMge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLlN0cmlwZUVsZW1lbnQuSWRlYWxCYW5rRWxlbWVudCxcbiAgICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U3RyaXBlKENoZWNrb3V0Rm9ybSk7Il19 */\n/*@ sourceURL=/Users/j/Development/Projects/react-next-strapi-stripe-food-delivery/frontend/components/Checkout/CheckoutForm.js */"));
    }
  }]);

  return CheckoutForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_stripe_elements__WEBPACK_IMPORTED_MODULE_10__["injectStripe"])(CheckoutForm));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=checkout.js.33717dda356c02bbebaf.hot-update.js.map