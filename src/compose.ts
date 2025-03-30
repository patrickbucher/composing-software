const identity = <T>(x: T): T => x;

const compose =
  <T>(f: (x: T) => T, g: (x: T) => T): ((x: T) => T) =>
  (x) =>
    f(g(x));

const pipe =
  <T>(...fns: ((x: T) => T)[]) =>
  (x: T) =>
    fns.reduce((y, f) => f(y), x);

const trace = <T>(label: string) => (value: T) => {
  console.log(`${label}: ${value}`);
  return value;
};

export { identity, compose, pipe, trace };
