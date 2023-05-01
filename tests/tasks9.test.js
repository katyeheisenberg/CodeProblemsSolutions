const { searchRange } = require("../tasks9");

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
