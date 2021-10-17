const compose = (f, g) => x => f(g(x));

const twice = n => n * 2;
const increment = n => n + 1;

const transform = compose(twice, increment);

console.log(transform(3));
