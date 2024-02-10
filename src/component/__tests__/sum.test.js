import { Sum } from "../Sum";

test("sum function for sum", () => {
  const result = Sum(2, 3);
  expect(result).toBe(5);
});
