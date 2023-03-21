const { isValidSudoku, palFunc, palDelRem } = require("../tasks3");


describe("tests of the is valid sudoku func", function () {
  test("test not valid board", function () {
    expect(
      isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ])
    ).toBe(false);
  });
  test("test valid board", function () {
    expect(
      isValidSudoku([
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
      ])
    ).toBe(true);
  });
});

describe("tests of palindrom func", function () {
  test("test aabbaa word - palindrome", function () {
    expect(palFunc("aabbaa")).toBe(true);
  });
  test("test aaba4a word - not palindrome", function () {
    expect(palFunc("aaba4a")).toBe(false);
  });
});

describe("tests of palindrom function which checks if word is palindrom if deleted or removed one symbol", function () {
  test("test aabbaa word - palindrome", function () {
    expect(palDelRem("abraarba")).toBe(true);
  });
  test("test aabbaa4 word - not palindrome", function () {
    expect(palDelRem("aaba45a")).toBe(false);
  });
});
