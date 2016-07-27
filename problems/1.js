var sum = 0;
var multiples = [];

for (var i = 3; i < 1000; i += 3)
{
    multiples.push(i);
}

for (var i = 5; i < 1000; i += 5)
{
    if (multiples.indexOf(i) < 0)
    {
        multiples.push(i);
    }
}

sum = multiples.reduce(function (a, b)
{
    return a + b;
}, 0);

console.log(sum);
