/** 1: Multiples of 3 and 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we
 * get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the
 * multiples of 3 or 5 below 1000.
 */

var sum       = 0;
var max       = 1000;
var multiples = [];

for (var i = 3; i < max; i += 3)
{
    multiples.push(i);
}

for (var i = 5; i < max; i += 5)
{
    if (multiples.indexOf(i) < 0) // ignore multiples of 3
    {
        multiples.push(i);
    }
}

sum = multiples.reduce(function (a, b)
{
    return a + b;
}, 0);

console.log(sum);
