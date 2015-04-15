# Multiples of 3 and 5
# Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

R = require('ramda');

s = (first, last) ->
  f = (n) ->
    if   n > last
      false
    else
      [n, n + 1]
  R.unfold(f, first)

sequence = R.curry(s)

c = R.compose(
  R.reduce((x, y) ->
    x + y
  , 0),
  R.filter((n) -> return n % 3 == 0 || n % 5 == 0)
)

console.log(c(sequence(1, 999)));