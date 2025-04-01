import { composeLifting, liftingDouble, liftingInc } from "./monad";

test("compose lifting functions", () => {
  const twiceTheIncrement = composeLifting(liftingDouble, liftingInc);
  expect(twiceTheIncrement(10)).toStrictEqual([22]);
});

test("flat map", () => {
  const numbers = [1, 2, 3];
  const incrementDoubled = composeLifting(liftingInc, liftingDouble);
  expect(numbers.flatMap(incrementDoubled)).toStrictEqual([3, 5, 7]);
});
