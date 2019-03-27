webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: strapiRegister, strapiLogin, setToken, unsetToken, getUserFromServerCookie, getUserFromLocalCookie, extractInfoFromHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strapiRegister", function() { return strapiRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strapiLogin", function() { return strapiLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetToken", function() { return unsetToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromServerCookie", function() { return getUserFromServerCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromLocalCookie", function() { return getUserFromLocalCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInfoFromHash", function() { return extractInfoFromHash; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "./node_modules/strapi-sdk-javascript/build/main/index.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);



/* /lib/auth.js */



 // const apiUrl = process.env.API_URL || "http://localhost:1337";

var apiUrl = "https://jsnspr-react-fd-backend.herokuapp.com/";
var strapi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_4___default.a(apiUrl);
var strapiRegister = function strapiRegister(username, email, password) {
  if (false) {}

  strapi.register(username, email, password).then(function (res) {
    setToken(res);
  });
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve();
}; //use strapi to get a JWT and token object, save
//to approriate cookei for future requests

var strapiLogin = function strapiLogin(email, password) {
  if (false) {} // Get a token


  strapi.login(email, password).then(function (res) {
    setToken(res);
  });
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve();
};
var setToken = function setToken(token) {
  if (false) {}

  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("username", token.user.username);
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("jwt", token.jwt);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username")) {
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
  }
};
var unsetToken = function unsetToken() {
  if (false) {}

  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("jwt");
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("username");
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove("cart"); // to support logging out from all windows

  window.localStorage.setItem("logout", _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/");
};
var getUserFromServerCookie = function getUserFromServerCookie(req) {
  if (!req.headers.cookie || "") {
    return undefined;
  }

  var username = req.headers.cookie.split(";").find(function (user) {
    return user.trim().startsWith("username=");
  });

  if (username) {
    username = username.split("=")[1];
  }

  var jwtCookie = req.headers.cookie.split(";").find(function (c) {
    return c.trim().startsWith("jwt=");
  });

  if (!jwtCookie) {
    return undefined;
  }

  var jwt = jwtCookie.split("=")[1];
  return jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(jwt), username;
};
var getUserFromLocalCookie = function getUserFromLocalCookie() {
  return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get("username");
}; //these will be used if you expand to a provider such as Auth0

var getQueryParams = function getQueryParams() {
  var params = {};
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, function ($0, $1, $2, $3) {
    params[$1] = $3;
  });
  return params;
};

var extractInfoFromHash = function extractInfoFromHash() {
  if (false) {}

  var _getQueryParams = getQueryParams(),
      id_token = _getQueryParams.id_token,
      state = _getQueryParams.state;

  return {
    token: id_token,
    secret: state
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.9ccc4d84ef53959b2982.hot-update.js.map