const { findPeakElement } = require("../tasks");
const { ladderLength } = require("../tasks");
const { permute } = require("../tasks");
const { permute1 } = require("../tasks");
const { twoSum } = require("../tasks");

describe("tests of findPeakElement", function () {
  test("find peak element at the index 2", function () {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
  });
  test("find peak elements at the index 1 or 5", function () {
    expect(findPeakElement([1, 2, 1, 7, 5, 6, 4])).toBeGreaterThanOrEqual(1);
  });
});

describe("tests of permute func", function () {
  test("permutations for [1, 2, 3]", function () {
    expect(permute([1, 2, 3])).toStrictEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
  test("permutations for [1]", function () {
    expect(permute([1])).toStrictEqual([[1]]);
  });
});

describe("tests of permute1 func", function () {
  test("permutations for [0, 1]", function () {
    expect(permute1([0, 1])).toStrictEqual([
      [0, 1],
      [1, 0],
    ]);
  });
  test("permutations for [3]", function () {
    expect(permute1([3])).toStrictEqual([[3]]);
  });
});

describe("tests of permute1 func", function () {
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

describe("tests of twoSum2 func", function () {
  test("find indices of  two nmbs for 9", function () {
    expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });
  test("find indices of  two nmbs for -1", function () {
    expect(twoSum([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});