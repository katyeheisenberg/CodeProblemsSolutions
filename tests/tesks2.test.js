const { numIslands } = require("../tasks2");
const { lengthOfLongestSubstring } = require("../tasks2");

describe("tests of findNmbOfIslands func", function () {
  test("find one island on the grid", function () {
    expect(
      numIslands([
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
      ])
    ).toBe(1);
  });
  test("find three island on the grid", function () {
    expect(
      numIslands([
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
      ])
    ).toBe(3);
  });
});

describe("tests of the longest substring function", function() {
  test("longest substring in the word pwwkew", function() {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  })
  test("longest substring in the word bbbbb", function () {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
})