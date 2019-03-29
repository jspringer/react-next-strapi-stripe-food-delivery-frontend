webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/apollo.js":
/*!***********************!*\
  !*** ./lib/apollo.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/index.js");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-apollo */ "./node_modules/next-apollo/dist/index.js");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* /lib/apollo.js */


var config = {
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
    // uri: process.env.API_URL || "http://localhost:1337/graphql" // Server URL (must be absolute)
    uri: "https://jsnspr-fd-be.herokuapp.com/graphql" // Server URL (must be absolute)

  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_1__["withData"])(config));

/***/ })

})
//# sourceMappingURL=_app.js.b8874359c88a57fe8202.hot-update.js.map