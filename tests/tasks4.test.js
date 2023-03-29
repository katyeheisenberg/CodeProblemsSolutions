const {
  checkTheOrder,
  nextSmaller,
  titleCase,
  factorial,
  sortedArr,
  biggestNmbArr,
} = require("../tasks4");

describe("tests of checkTheOrder func", function () {
  test("test falsy string", function () {
    expect(checkTheOrder("abc", "abraaarba")).toBe(false);
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
    expect(titleCase("a clash of KINGS", "a an the of")).toBe(
      "A Clash of Kings"
    );
  });
});

describe("test factorial function", function () {
  test("factorial of 5 = 120", function () {
    expect(factorial(5)).toBe(120);
  });
  test("factorial of 9 = 362880", function () {
    expect(factorial(9)).toBe(362880);
  });
});

describe("tests of merge/sort function", function () {
  test("needed result 1,3,5,6,7,13,20,28,100,110", function () {
    expect(
      sortedArr([
        [1, 5, 7, 20],
        [3, 100, 110],
        [6, 13, 28],
      ])
    ).toEqual([1, 3, 5, 6, 7, 13, 20, 28, 100, 110]);
  });
  test("empty array", function() {
    expect(sortedArr([])).toEqual([])
  })
});

describe("tests of biggestNmbArr func", function() {
  test("find 49999999993", function() {
    expect(
      biggestNmbArr([
        [1, 3, 42, 3432222, 13],
        [22323, 11, 343443222, 49999999993, 233],
        [12, 434, 3333, 34],
      ])
    ).toBe(49999999993);
  });
  test("array with negative integers", function() {
    expect(
      biggestNmbArr([
        [-1, -3, -42, -3432222, -13],
        [-12, -434, -3333, -34],
      ])
    ).toBe(-1);
  });
});
