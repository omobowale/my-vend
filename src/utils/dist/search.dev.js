"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchValue = void 0;

var _Transformer = _interopRequireDefault(require("./Transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchValue = function searchValue(value) {
  var query = _Transformer["default"].replaceSpaces(value, '+');

  if (query.length > 0) {
    window.location = "/product-search?query=".concat(query);
  }
};

exports.searchValue = searchValue;