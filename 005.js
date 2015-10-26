//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
'use strict';

let R = require('ramda');

let isDivisible = function(n) {
  for (let divisor = 20; divisor >= 11; divisor--) {
    if (n % divisor !== 0) return false;
  }
  return true;
};

for (let n = 20; n < 300000000; n += 2) {
  if (isDivisible(n)) {
    console.log(n);
    break;
  }
}
