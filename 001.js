/*
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/
'use strict';

let R = require('ramda');
let helpers = require('./mathHelpers.js');

let getMultiples = R.pipe(
  R.filter(n => n % 3 === 0 || n % 5 === 0),
  R.reduce((x, y) =>  x + y, 0)
);

let multiples = getMultiples([...helpers.sequence(1, 999)]);
console.log(multiples);
