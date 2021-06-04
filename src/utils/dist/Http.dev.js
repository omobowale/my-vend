"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _shortid = _interopRequireDefault(require("shortid"));

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
// const API_URL ='http://livevend-api.us-east-2.elasticbeanstalk.com/';
var API_URL = 'http://api.livevend.com:8080/';
_axios["default"].defaults.baseURL = API_URL;
_axios["default"].defaults.headers.common.Accept = "application/json";
_axios["default"].defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"; // axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
// axios.defaults.headers.common["enctype"] = "multipart/form-data";

_axios["default"].interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {// Notify.error(error.response.data.error.message);
  }

  return Promise.reject(error);
});

var _default = _axios["default"];
exports["default"] = _default;