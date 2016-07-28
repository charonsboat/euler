/**
 * #4: Largest palindrome product
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

var answer = 0;
var max    = 999;

var is_palindrome = function (num)
{
    var string = num.toString();

    return (string === string.split('').reverse().join(''));
}

for (var i = max; i > 0; --i)
{
    for (var j = max; j > 0; --j)
    {
        var product = i * j;

        if (is_palindrome(product) && product > answer)
        {
            answer = product;
        }
    }
}

console.log(answer);
