/**
 * #3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

var number = 600851475143;
var primes = [];

var get_factors = function (num)
{
    var factors = [];
    var root    = Math.sqrt(num);

    for (var i = 2; i <= root; ++i)
    {
        var factor = (num / i);

        if (factor === Math.round(factor)) // make sure it is a natural number
        {
            factors.push(factor);
            factors.push(i);
        }
    }

    return factors;
}

var factors = get_factors(number);

for (var i = 0; i < factors.length; ++i)
{
    var f = factors[i];
    var subfactors = get_factors(f);

    if (subfactors.length === 0)
    {
        primes.push(f);
    }
}

var largest_prime_factor = primes.reduce(function (prev, curr)
{
    return curr > prev ? curr : prev;
}, 0);

console.log(largest_prime_factor);
