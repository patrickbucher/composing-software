import { compose } from "./compose";

test("compose increment with twice", () => {
  const increment = (x: number) => x + 1;
  const twice = (x: number) => x * 2;
  const incrementTwice: (x: number) => number = compose(increment, twice);
  expect(incrementTwice(3)).toBe(increment(twice(3)));
});
