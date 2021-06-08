"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProducts = getProducts;
exports.getFeaturedProducts = getFeaturedProducts;
exports.getProductCategoryList = getProductCategoryList;
exports.getProductCategoryFlatList = getProductCategoryFlatList;
exports.getSubCategoryList = getSubCategoryList;
exports.getBrandCategoryList = getBrandCategoryList;
exports.getProductDetails = getProductDetails;
exports.getCurrencyList = getCurrencyList;
exports.getSuggestions = getSuggestions;
exports.getProductSearch = getProductSearch;
exports.constructionConsultantReq = constructionConsultantReq;

var API = _interopRequireWildcard(require("../../utils/api"));

var actions = _interopRequireWildcard(require("./store/actions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getProducts(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product";
      API.getReq(url, function (res) {
        dispatch(actions.productList(res));
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getFeaturedProducts(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product/featured/list";
      API.getReq(url, function (res) {
        dispatch(actions.featuredProducts(res));
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getProductCategoryList(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "category";
      API.getReq(url, function (res) {
        dispatch(actions.setCategoryList(res));
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getProductCategoryFlatList(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "category/flat";
      API.getReq(url, function (res) {
        dispatch(actions.setCategoryFlatList(res));
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getSubCategoryList(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product/subcategory/".concat(params.subCategoryName);
      API.getReq(url, function (res) {
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getBrandCategoryList(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product/brandcategory/".concat(params.brandName);
      API.getReq(url, function (res) {
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getProductDetails(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product/".concat(params.name);
      API.getReq(url, function (res) {
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getCurrencyList(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "currency";
      API.getReq(url, function (res) {
        dispatch(actions.setCurrencyList(res));
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function getSuggestions(params) {
  return new Promise(function (resolve, reject) {
    var url = "product/autosearch/".concat(params.query);
    API.getReq(url, function (res) {
      resolve(res);
    }, function (err) {
      return reject(err);
    });
  });
}

function getProductSearch(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product/search/".concat(params.query);
      API.getReq(url, function (res) {
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function constructionConsultantReq(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "form/consultation";
      API.postReq(url, params, function (res) {
        resolve(res);
      }, function (err) {
        return reject(err);
      });
    });
  };
}