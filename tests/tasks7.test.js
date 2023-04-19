const { simplifyPath, findTarget, findKth2 } = require("../tasks7");

describe("tests of simplify function", function () {
  test("convert /home/ into /home", function () {
    expect(simplifyPath("/home/")).toEqual("/home");
  });
  test("convert /home//foo/ into /home/foo", function () {
    expect(simplifyPath("/home//foo/")).toEqual("/home/foo");
  });
});

describe("search a specific number in a sorted array of unknown size", function () {
  test("find 9", function () {
    expect(findTarget([-1, 0, 3, 5, 9, 12], 9)).toBe(9);
  });
  test("find 2 which is not in the array", function () {
    expect(findTarget([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });
});

describe("test kth largest element in an array", function () {
  test("find 2nd largest element", function () {
    expect(findKth2([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });
  test("find 4th largest element", function () {
    expect(findKth2([3, 2, 1, 5, 6, 4], 4)).toBe(3);
  });
});
