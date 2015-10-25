'use strict';

let R = require('ramda');

exports.isFactor = (candidate, n) => {
  return n % candidate === 0;
};

exports.isEven = n => n % 2 === 0;

exports.isOdd = n => n % 2 !== 0;

exports.sequence = function*(first, last) {
  for (let i = first; i <= last; i++) {
    yield i;
  }
};

exports.isPrime = n => {
  if (n < 2) return false;

  let divisors = exports.sequence(2, Math.sqrt(n));

  return !R.any(
    x => n % x === 0 || n % (x + 2) === 0,
    divisors
  );
};
