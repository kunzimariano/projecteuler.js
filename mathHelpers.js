'use strict';

let R = require('ramda');

exports.isFactor = (candidate, n) => {
  return n % candidate === 0;
};

exports.isEven = n => n % 2 === 0;

exports.isOdd = n => n % 2 !== 0;

exports.isPrime = n => {
  if (n < 2) return false;
  return !R.pipe(
    R.unfold(x => x > Math.sqrt(n) ? false : [x, x + 1], 2),
    R.any(x => n % x === 0 || n % (x + 2) === 0)
  );
};
