type lifting = (x: number) => number[];
const lift = (x: number): number[] => [x];
const unwrap = (xs: number[]): number => xs[0];
const liftingInc = (x: number): number[] => lift(x + 1);
const liftingDouble = (x: number): number[] => lift(x * 2);
const composeLifting =
  (f: lifting, g: lifting): lifting =>
  (x) =>
    f(unwrap(g(x)));

export { lift, liftingInc, liftingDouble, composeLifting };
