/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
'use strict';

var R = require('ramda');

var sequence = function sequence(first, last) {
  return R.unfold(function (n) {
    return n > last ? false : [n, n + 1];
  }, first);
};

var getMultiples = R.compose(R.reduce(function (x, y) {
  return x + y;
}, 0), R.filter(function (n) {
  return n % 3 === 0 || n % 5 === 0;
}));

var multiples = getMultiples(sequence(1, 999));
console.log(multiples);
