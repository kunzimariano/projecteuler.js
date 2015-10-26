//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?
'use strict';

let R = require('ramda');
let helpers = require('./mathHelpers.js');

const n = 600851475143;

let posiblePrimes = R.range(2, Math.sqrt(n));

let getLargestPrimeFactor = R.pipe(
  R.filter(x => helpers.isFactor(x, n) && helpers.isPrime(x)),
  R.last
);

let result = getLargestPrimeFactor(posiblePrimes);

console.log(result);
