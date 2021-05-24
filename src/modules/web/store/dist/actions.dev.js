"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIntendedRoute = exports.setAuthPage = exports.setAuthToken = exports.logout = exports.login = exports.setCategoryList = exports.setCurrencyList = exports.featuredProducts = exports.productList = void 0;

var actionTypes = _interopRequireWildcard(require("./actionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var productList = function productList(payload) {
  return {
    type: actionTypes.PRODUCT_LIST,
    payload: payload
  };
};

exports.productList = productList;

var featuredProducts = function featuredProducts(payload) {
  return {
    type: actionTypes.FEATURED_PRODUCTS,
    payload: payload
  };
};

exports.featuredProducts = featuredProducts;

var setCurrencyList = function setCurrencyList(payload) {
  return {
    type: actionTypes.CURRENCY_LIST,
    payload: payload
  };
};

exports.setCurrencyList = setCurrencyList;

var setCategoryList = function setCategoryList(payload) {
  return {
    type: actionTypes.CATEGORY_LIST,
    payload: payload
  };
};

exports.setCategoryList = setCategoryList;

var login = function login(payload) {
  return {
    type: actionTypes.AUTH_LOGIN,
    payload: payload
  };
};

exports.login = login;

var logout = function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

exports.logout = logout;

var setAuthToken = function setAuthToken(payload) {
  return {
    type: actionTypes.AUTH_TOKEN,
    payload: payload
  };
};

exports.setAuthToken = setAuthToken;

var setAuthPage = function setAuthPage(payload) {
  return {
    type: actionTypes.SHOW_AUTH_PAGE,
    payload: payload
  };
};

exports.setAuthPage = setAuthPage;

var setIntendedRoute = function setIntendedRoute(payload) {
  return {
    type: actionTypes.SET_INTENDED_ROUTE,
    payload: payload
  };
};

exports.setIntendedRoute = setIntendedRoute;