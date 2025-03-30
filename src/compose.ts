const identity = <T>(x: T): T => x;

const compose = <T>(f: (x: T) => T, g: (x: T) => T): (x: T) => T => (x) => f(g(x));

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const trace = (label: string) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

export { identity, compose, pipe, trace };
