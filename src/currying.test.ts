import { curry, roundTo } from "./currying";

test("curry roundTo function", () => {
  const roundToNickels = curry(roundTo, [0.05]);
  expect(roundToNickels(10 / 3)).toBe(3.35);
});
