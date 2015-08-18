//Even Fibonacci numbers
//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _Array$from = require('babel-runtime/core-js/array/from')['default'];

var R = require('ramda');

var fibonacci = _regeneratorRuntime.mark(function fibonacci() {
  var pre, cur, temp;
  return _regeneratorRuntime.wrap(function fibonacci$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        pre = 0, cur = 1;

      case 1:
        if (!true) {
          context$1$0.next = 9;
          break;
        }

        temp = pre;

        pre = cur;
        cur += temp;
        context$1$0.next = 7;
        return cur;

      case 7:
        context$1$0.next = 1;
        break;

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, fibonacci, this);
});

var takeWhile = _regeneratorRuntime.mark(function takeWhile(iterator, predicate) {
  var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

  return _regeneratorRuntime.wrap(function takeWhile$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        _iteratorNormalCompletion = true;
        _didIteratorError = false;
        _iteratorError = undefined;
        context$1$0.prev = 3;
        _iterator = _getIterator(iterator);

      case 5:
        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
          context$1$0.next = 15;
          break;
        }

        i = _step.value;

        if (predicate(i)) {
          context$1$0.next = 9;
          break;
        }

        return context$1$0.abrupt('return', i);

      case 9:
        ;

        context$1$0.next = 12;
        return i;

      case 12:
        _iteratorNormalCompletion = true;
        context$1$0.next = 5;
        break;

      case 15:
        context$1$0.next = 21;
        break;

      case 17:
        context$1$0.prev = 17;
        context$1$0.t0 = context$1$0['catch'](3);
        _didIteratorError = true;
        _iteratorError = context$1$0.t0;

      case 21:
        context$1$0.prev = 21;
        context$1$0.prev = 22;

        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }

      case 24:
        context$1$0.prev = 24;

        if (!_didIteratorError) {
          context$1$0.next = 27;
          break;
        }

        throw _iteratorError;

      case 27:
        return context$1$0.finish(24);

      case 28:
        return context$1$0.finish(21);

      case 29:
      case 'end':
        return context$1$0.stop();
    }
  }, takeWhile, this, [[3, 17, 21, 29], [22,, 24, 28]]);
});

var fibs = takeWhile(fibonacci(), function (x) {
  return x <= 4000000;
});

var getResult = R.pipe(R.filter(function (n) {
  return n % 2 === 0;
}), R.reduce(function (x, y) {
  return x + y;
}, 0));

var res = getResult(_Array$from(fibs));
console.log(res);
