// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
'use strict';

let R = require('ramda');

let isPalindrome = x => R.reverse(x.toString()) === x.toString();

let getProductThreeDigitNumbers = function*() {
  for (let i = 100; i <= 999; i++) {
    for (let j = 100; j <= 999; j++) {
      yield i * j;
    }
  }
};

let result = R.pipe(
  R.filter(x => isPalindrome(x)),
  R.reduce(R.max, 0)
);

let numbers = [...getProductThreeDigitNumbers()];
console.log(result(numbers));
