import { flattenArray } from "../challenges/flatten-array";

describe("flattenArray", () => {
  it("flattens a nested array", () => {
    const input = [[1, 2], [3, [4, 5]], 6];
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flattenArray(input)).toEqual(expected);
  });

  it("handles deeply nested arrays", () => {
    const input = [1, [2, [3, [4, [5]]]]];
    const expected = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(expected);
  });

  it("returns empty array when input is empty", () => {
    expect(flattenArray([])).toEqual([]);
  });

  it("handles non-array primitives", () => {
    const input = [1, "a", [true, [null]]];
    const expected = [1, "a", true, null];
    expect(flattenArray(input)).toEqual(expected);
  });
});
