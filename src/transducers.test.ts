import { transduce } from "./transducers";

test("transducing", () => {
  expect(transduce([1, 2, 3, 4, 5])).toStrictEqual([4, 8]);
});
