import { composeLifting, liftingDouble, liftingInc } from "./monad";

test("compose lifting functions", () => {
  const twiceTheIncrement = composeLifting(liftingDouble, liftingInc);
  expect(twiceTheIncrement(10)).toStrictEqual([22]);
});
