const {
  checkTheOrder,
  nextSmaller
} = require("../tasks4");


describe("tests of checkTheOrder func", function () {
  test("test falsy string", function () {
    expect(checkTheOrder("abc","abraaarba")).toBe(false);
  });
  test("test truthy string", function () {
    expect(checkTheOrder("abc", "abracadabra")).toBe(true);
  });
});

describe("tests of nextSmaller func", function () {
  test("test falsy string", function () {
    expect(nextSmaller(21)).toBe(12);
  });
  test("test truthy string", function () {
    expect(nextSmaller(2071)).toBe(2017);
  });
  test("test truthy string", function () {
    expect(nextSmaller(135)).toBe(-1);
  });
  test("test truthy string", function () {
    expect(nextSmaller(9)).toBe(-1);
  });
});