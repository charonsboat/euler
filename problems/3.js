/**
 * #3: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */

var number = 600851475143;

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

var is_prime = function (num)
{
    var factors = get_factors(num);

    if (factors.length > 0)
    {
        return false;
    }

    return true;
}

var max_prime = get_factors(number).reduce(function (prev, curr)
{
    return is_prime(curr) && curr > prev ? curr : prev;
}, 0);

console.log(max_prime);
