"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var actionTypes = _interopRequireWildcard(require("./actionTypes"));

var stores = _interopRequireWildcard(require("./stores"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var initialState = {
  products: [],
  featuredProducts: [],
  currencies: [],
  categories: [],
  showAuth: false,
  authPage: 'login',
  isAuthenticated: false,
  intendedRoute: {
    route: '',
    params: {}
  },
  authCognitoUser: {
    email_verified: false
  },
  authUser: {},
  authToken: ''
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? null : _ref$payload;

  switch (type) {
    case actionTypes.PRODUCT_LIST:
      return stores.storeProductList(state, payload);

    case actionTypes.FEATURED_PRODUCTS:
      return stores.storeFeaturedProducts(state, payload);

    case actionTypes.CURRENCY_LIST:
      return stores.setCurrencyList(state, payload);

    case actionTypes.CATEGORY_LIST:
      return stores.setCategoryList(state, payload);

    case actionTypes.AUTH_USER:
      return stores.setAuthUser(state, payload);

    case actionTypes.AUTH_TOKEN:
      return stores.setAuthToken(state, payload);

    case actionTypes.AUTH_LOGIN:
      return stores.login(state, payload);

    case actionTypes.AUTH_LOGOUT:
      return stores.logout(state, payload);

    case actionTypes.SHOW_AUTH_PAGE:
      return stores.setAuthPage(state, payload);

    case actionTypes.SET_INTENDED_ROUTE:
      return stores.setIntendedRoute(state, payload);

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;