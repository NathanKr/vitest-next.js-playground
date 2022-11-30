import { expect, test } from "vitest";
import { sum } from "src/logic/utils";

test("1+2 is 3", () => {
  expect(sum(1, 2)).toBe(3);
});
