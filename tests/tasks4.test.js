const { checkTheOrder, nextSmaller, titleCase } = require("../tasks4");


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


describe("tests of titleCase func", function () {
  test("test the wind in the willows with 'The In' - minor words", function () {
    expect(titleCase("THE WIND IN THE WILLOWS", "The In")).toBe(
      "The Wind in the Willows"
    );
  });
  test("test truthy string", function () {
    expect(titleCase("a clash of KINGS", "a an the of")).toBe("A Clash of Kings");
  });
});
