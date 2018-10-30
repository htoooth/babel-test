"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import "@babel/polyfill";
var A =
/*#__PURE__*/
function () {
  function A(x, y) {
    this.x = x;
    this.y = y;
  }

  var _proto = A.prototype;

  _proto.add = function add(z) {
    this.z = z;
  };

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
  _X = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(a, b) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, n);
  });
}