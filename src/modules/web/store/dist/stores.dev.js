"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeProductList = storeProductList;
exports.storeFeaturedProducts = storeFeaturedProducts;
exports.setCurrencyList = setCurrencyList;
exports.setCategoryList = setCategoryList;
exports.setCategoryFlatList = setCategoryFlatList;
exports.setAuthUser = setAuthUser;
exports.setAuthToken = setAuthToken;
exports.login = login;
exports.logout = logout;
exports.checkAuth = checkAuth;
exports.setAuthPage = setAuthPage;
exports.setIntendedRoute = setIntendedRoute;

var _Http = _interopRequireDefault(require("../../../utils/Http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function storeProductList(state, payload) {
  return Object.assign({}, state, {
    products: payload
  });
}

function storeFeaturedProducts(state, payload) {
  return Object.assign({}, state, {
    featuredProducts: payload
  });
}

function setCurrencyList(state, payload) {
  return Object.assign({}, state, {
    currencies: payload
  });
}

function setCategoryList(state, payload) {
  return Object.assign({}, state, {
    categories: payload
  });
}

function setCategoryFlatList(state, payload) {
  return Object.assign({}, state, {
    categoryList: payload
  });
}

function setAuthUser(state, payload) {
  return Object.assign({}, state, {
    user: payload
  });
}

function setAuthToken(state, payload) {
  return Object.assign({}, state, {
    authToken: payload
  });
}

function login(state, payload) {
  localStorage.setItem("access_token", payload);
  _Http["default"].defaults.headers.common["Authorization"] = "".concat(payload);
  return _objectSpread({}, state, {
    isAuthenticated: true,
    authToken: payload
  });
}

function logout(state) {
  localStorage.removeItem("access_token");
  _Http["default"].defaults.headers.common["Authorization"] = "";
  return _objectSpread({}, state, {
    isAuthenticated: false,
    authToken: null,
    user: {}
  });
}

function checkAuth(state) {
  state = Object.assign({}, state, {
    isAuthenticated: !!localStorage.getItem("access_token")
  });

  if (state.isAuthenticated) {
    _Http["default"].defaults.headers.common["Authorization"] = "".concat(localStorage.getItem("access_token"));
  }

  return state;
}

function setAuthPage(state, payload) {
  return _objectSpread({}, state, {
    showAuth: payload.showAuth,
    authPage: payload.authPage || 'login'
  });
}

function setIntendedRoute(state, payload) {
  return _objectSpread({}, state, {
    intendedRoute: payload
  });
}