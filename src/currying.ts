const roundTo = (granularity: number, value: number): number => {
  const factor: number = 1 / granularity;
  return Math.round(value * factor) / factor;
};

const curry =
  (f, arr = []) =>
  (...args) =>
    ((a) => (a.length === f.length ? f(...a) : curry(f, a)))([...arr, ...args]);

export { curry, roundTo };
