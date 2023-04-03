const {
 isValidAnagram,
} = require("../tasks5");

describe("test of anagram func", function() {
  test("truthy words anagram and nagaram", function () {
    expect(isValidAnagram("anagram", "nagaram")).toBe(true);
  });
})