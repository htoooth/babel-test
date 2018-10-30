"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

require("regenerator-runtime/runtime");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/promise"));

require("core-js/modules/es7.array.includes");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var A =
/*#__PURE__*/
function () {
  function A(a) {
    (0, _classCallCheck2.default)(this, A);
    this.a = a;
  }

  (0, _createClass2.default)(A, [{
    key: "add",
    value: function add(b) {
      this.b = b;
    }
  }]);
  return A;
}();

var a = {
  a: 1,
  b: 2
};

function X(_x, _x2) {
  return _X.apply(this, arguments);
}

function _X() {
  _X = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(a, b) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(a, b);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _X.apply(this, arguments);
}

var y = [1, 2];
y.includes(2); // const b = {...a}

console.log(new A());

function sleep(n) {
  return new _promise.default(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, n);
  });
}