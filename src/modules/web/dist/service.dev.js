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
exports.fetchUser = fetchUser;
exports.login = login;
exports.register = register;
exports.logout = logout;

var API = _interopRequireWildcard(require("../../utils/api"));

var _notify = _interopRequireDefault(require("../../utils/notify"));

var actions = _interopRequireWildcard(require("./store/actions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getProducts(params) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var url = "product";
      API.getReq(url, function (res) {
        dispatch(actions.productList(res.data));
        resolve(res.data);
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
        dispatch(actions.featuredProducts(res.data));
        resolve(res.data);
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
        dispatch(actions.setCategoryList(res.data));
        resolve(res.data);
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
        dispatch(actions.setCategoryFlatList(res.data));
        resolve(res.data);
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
        resolve(res.data);
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
        resolve(res.data);
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
        resolve(res.data);
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
        dispatch(actions.setCurrencyList(res.data));
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
      resolve(res.data);
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
        resolve(res.data);
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
        resolve(res.data);
      }, function (err) {
        return reject(err);
      });
    });
  };
}

function fetchUser() {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      API.getReq("user/profile", function (data) {
        dispatch(actions.authUser(data.user));
        return resolve(data.user);
      }, function (err) {
        // dispatch(authActions.authPageLoading(false));
        return reject(err);
      });
    });
  };
}

function login(credentials) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      // dispatch(authActions.authPageLoading(true));
      API.postReq("auth/login", credentials, function (data) {
        dispatch(actions.login(data.token));
        dispatch(actions.authUser(data.user));

        _notify["default"].success('You have successfully logged in');

        return resolve();
      }, function (err) {
        // const statusCode = err.response.status;
        // const data = {
        //     error: null,
        //     statusCode, err
        // };
        // if (statusCode === 422) {
        // } else if (statusCode === 401) {
        //     data.error = err.response.data.error.message;
        // }
        // dispatch(authActions.authPageLoading(false));
        return reject(err);
      });
    });
  };
}

function register(credentials) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      API.postReq("auth/register", credentials, function (res) {
        // dispatch(actions.login(data.accessToken));
        _notify["default"].success(res.message);

        return resolve(res.message);
      }, function (err) {
        // const statusCode = err.response.status;
        // const data = {
        //     error: null,
        //     statusCode
        // };
        // if (statusCode === 422) {
        // } else if (statusCode === 401) {
        //     data.error = err.response.data.message;
        // }
        _notify["default"].error(err.message);

        return reject(err);
      });
    });
  };
}
/**
 * logout user
 *
 * @returns {function(*)}
 */


function logout() {
  return function (dispatch) {
    return (// new Promise((resolve, reject) => {
      //     API.deleteReq("auth/logout",
      //     (() => {
      dispatch(actions.logout())
    );
  }; //     }),
  //     (err => {
  //         const statusCode = err.response.status;
  //         const data = {
  //             error: err.response.data.error.message,
  //             statusCode
  //         };
  //         return reject(data);
  //     }));
  // });
}