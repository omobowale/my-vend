"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReq = exports.deleteReq = exports.patchReq = exports.postReq = exports.APP_URL = void 0;

var _Http = _interopRequireDefault(require("./Http"));

var _Transformer = _interopRequireDefault(require("./Transformer"));

var _notify = _interopRequireDefault(require("./notify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function transformRequest(parms) {
  return _Transformer["default"].send(parms);
}

function transformResponse(params) {
  return _Transformer["default"].fetch(params);
}

var APP_URL = 'localhost';
exports.APP_URL = APP_URL;

var postReq = function postReq(url, params, success, failed) {
  _Http["default"].post(url, params).then(function (res) {
    return success(transformResponse(res.data));
  })["catch"](function (err) {
    var response = err.response;

    if (typeof response != "undefined") {
      var statusCode = response.status;
      var data = {
        error: null,
        statusCode: statusCode
      };

      if (statusCode === 422) {
        var resetErrors = {
          errors: response.data.message,
          replace: false,
          searchStr: "",
          replaceStr: ""
        };
        data.error = _Transformer["default"].resetValidationFields(resetErrors); // Notify.error("Invalid input");
      } else if (statusCode === 401) {
        data.error = response.data ? response.data.message : response.statusText;

        _notify["default"].error(data.error);
      } else {
        data.error = response.data ? response.data.message : response.statusText;

        _notify["default"].error(data.error);
      }

      return failed(data);
    }

    return failed({});
  });
};

exports.postReq = postReq;

var patchReq = function patchReq(url, params, success, failed) {
  _Http["default"].patch(url, params).then(function (res) {
    return success(transformResponse(res.data));
  })["catch"](function (err) {
    var response = err.response;

    if (typeof response != "undefined") {
      var statusCode = response.status;
      var data = {
        error: null,
        statusCode: statusCode
      };

      if (statusCode === 422) {
        var resetErrors = {
          errors: response.data.message,
          replace: false,
          searchStr: "",
          replaceStr: ""
        };
        data.error = _Transformer["default"].resetValidationFields(resetErrors); // Notify.error("Invalid input");
      } else if (statusCode === 401) {
        data.error = response.data ? response.data.message : response.statusText;

        _notify["default"].error(data.error);
      } else {
        data.error = response.data ? response.data.message : response.statusText;

        _notify["default"].error(data.error);
      }

      return failed(data);
    } // Notify.error('oops!');


    return failed({});
  });
};

exports.patchReq = patchReq;

var deleteReq = function deleteReq(url, success, failed) {
  _Http["default"]["delete"](url).then(function (res) {
    if (res.data.msg) {// Notify.success(res.data.data.msg);
    }

    return success(transformResponse(res.data));
  })["catch"](function (err) {
    // TODO: handle err
    var response = err.response;

    if (typeof response != "undefined") {
      var statusCode = response.status;
      var data = {
        error: response.data ? response.data.message : response.statusText,
        statusCode: statusCode
      };

      _notify["default"].error(data.error);

      return failed(data);
    } // Notify.error('oops!');


    return failed({});
  });
};

exports.deleteReq = deleteReq;

var getReq = function getReq(url, success, failed) {
  _Http["default"].get(url).then(function (res) {
    if (res.data.msg) {// Notify.success(res.data.data.msg);
    }

    return success(transformResponse(res.data));
  })["catch"](function (err) {
    var response = err.response;

    if (typeof response != "undefined") {
      var statusCode = response.status;
      var data = {
        error: response.data.error ? response.data.error.message : response.statusText,
        statusCode: statusCode
      }; // Notify.error(data.error);

      return failed(data);
    } // Notify.error('oops!');
    // alert(response)


    return failed({});
  });
};

exports.getReq = getReq;