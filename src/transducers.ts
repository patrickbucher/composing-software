type Mapper<T> = (x: T) => T;
type Predicate<T> = (x: T) => boolean;
type Stepper<T, I> = (acc: T, x: I) => T;

const compose =
  (...fs) =>
  (x) =>
    fs.reduceRight((y, f) => f(y), x);
const concat: Stepper<Array<number>, number> = <I>(acc: Array<I>, x: I) =>
  acc.concat([x]);
const map =
  <T>(f: Mapper<T>) =>
  (step) =>
  (acc, x) =>
    step(acc, f(x));
const filter =
  <T>(p: Predicate<T>) =>
  (step) =>
  (acc, x) =>
    p(x) ? step(acc, x) : acc;

const twice = (x: number): number => x * 2;
const isEven = (x: number): boolean => x % 2 === 0;
const twiceTheEvens = compose(filter(isEven), map(twice));
const transduce = (xs) => xs.reduce(twiceTheEvens(concat), []);

export { transduce };
