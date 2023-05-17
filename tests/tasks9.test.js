const { searchRange, findSum } = require("../tasks9");

describe("test of 1st && 2nd position of an element in an array", function () {
  test("3rd and 11th position", function () {
    expect(searchRange([1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9], 4)).toEqual([
      3, 11,
    ]);
  });
  test("3rd and 7th position", function () {
    expect(searchRange([1, 2, 3, 4, 4, 4, 4, 4, 9], 4)).toEqual([3, 7]);
  });
});

describe("tests of findSum function", function() {
  test("find integers for 5", function() {
    expect(findSum([-3, 0, 1, 3, 4], 5)).toEqual([1, 4]);
  });
  test("find integers for 6", function () {
    expect(findSum([-3, 0, 1, 3, 4, 5], 6)).toEqual([1, 5]);
  });
})
