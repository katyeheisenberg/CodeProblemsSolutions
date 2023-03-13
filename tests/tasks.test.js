const { findPeakElement } = require("../tasks");
const { ladderLength } = require("../tasks");

describe("tests of findPeakElement", function () {
  test("find peak element at the index 2", function () {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
  });
  test("find peak elements at the index 1 or 5", function () {
    expect(findPeakElement([1, 2, 1, 7, 5, 6, 4])).toBeGreaterThanOrEqual(1);
  });
});

describe("tests of ladderLength", function () {
  test("test wordlists transformations to be 5", function () {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
    ).toBe(5);
  });
  test("expect 0 transformations as endword is not in the list", function () {
    expect(
      ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])
    ).toBe(0);
  });
});