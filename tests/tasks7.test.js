const {
  simplifyPath
} = require("../tasks7");

describe("tests of simplify function", function() {
  test("convert /home/ into /home", function () {
    expect(simplifyPath("/home/")).toEqual("/home");
  });
  test("convert /home//foo/ into /home/foo", function () {
    expect(simplifyPath("/home//foo/")).toEqual("/home/foo");
  });
})
