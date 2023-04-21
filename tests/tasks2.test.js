const { numIslands, findShortest, findMM } = require("../tasks2");
const { lengthOfLongestSubstring, isValid } = require("../tasks2");

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
  test("longest substring in the word b", function () {
    expect(lengthOfLongestSubstring("b")).toBe(1);
  });
})

describe("tests of finding the shortest word in the sentence function", function() {
  test("find the word -is- in the -The mischievous dog is Jack-", function() {
    expect(findShortest("The mischievous dog is Jack")).toBe("is");
  });
  test("find the word -I- in the -I am Kate-", function() {
    expect(findShortest("I am Kate")).toBe("I");
  });
  test("find the word -I- in the -Elizabeth drinks too much-", function() {
    expect(findShortest("Elizabeth drinks too much")).toBe("too");
  });
})


describe("tests of the highest and the lowest nummber in the array function", function () {
  test("test array with -2 and 87 nedded numbers", function () {
    expect(findMM([1, 2, -2, 6, 87])).toStrictEqual([-2, 87]);
  });
  test("test array with -8 and 909 nedded numbers", function () {
    expect(findMM([1, 2, -2, -8, 6, 99, 909])).toStrictEqual([-8, 909]);
  });
  test("test array with 0 and 2 nedded numbers", function () {
    expect(findMM([1, 1, 1, 0, 1, 1, 2])).toStrictEqual([0, 2]);
  });
});

describe("tests of the valid parentheses func", function () {
  test("test not valid string with parentheses", function () {
    expect(isValid("(]")).toBe(false);
  });
  test("test valid string with parentheses", function () {
    expect(isValid("()[]{}")).toBe(true);
  });
});