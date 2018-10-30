import "core-js/modules/es6.promise";
import "core-js/modules/es7.array.includes";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import "regenerator-runtime/runtime";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

var _marked =
/*#__PURE__*/
_regeneratorRuntime.mark(xyz);

var A =
/*#__PURE__*/
function () {
  function A(a) {
    _classCallCheck(this, A);

    this.a = a;
  }

  _createClass(A, [{
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

function xyz() {
  return _regeneratorRuntime.wrap(function xyz$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function X(_x, _x2) {
  return _X.apply(this, arguments);
}

function _X() {
  _X = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee(a, b) {
    return _regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(a, b);

          case 1:
          case "end":
            return _context2.stop();
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
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, n);
  });
}