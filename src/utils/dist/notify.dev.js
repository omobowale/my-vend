"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactToastify = require("react-toastify");

var _react = require("@emotion/react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Notify = {
  success: function success(msg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _reactToastify.toast.success(msg, _objectSpread({
      position: _reactToastify.toast.POSITION.TOP_CENTER
    }, options, {
      className: 'toast-success-container' // progressClassName: css`
      //     visibility: 'hidden';
      // `

    }));
  },
  error: function error(msg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _reactToastify.toast.error(msg, _objectSpread({
      position: _reactToastify.toast.POSITION.TOP_CENTER
    }, options, {
      className: 'toast-error-container' // progressClassName: css`
      //     display: 'none';
      // `

    }));
  },
  simple: function simple(msg) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return (0, _reactToastify.toast)(msg, _objectSpread({
      position: _reactToastify.toast.POSITION.TOP_CENTER
    }, options));
  }
};
var _default = Notify;
exports["default"] = _default;