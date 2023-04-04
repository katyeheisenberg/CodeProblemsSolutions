const { robberFunc } = require("../tasks6");

describe("tests of robberFunc", function() {
  test("[1,2,3,1] array of houses with max amount of money 4", function () {
    expect(robberFunc([1, 2, 3, 1])).toBe(4);
  });
  test("[2,7,9,3,1] array of houses with max amount of money 12", function () {
    expect(robberFunc([2, 7, 9, 3, 1])).toBe(12);
  });
  test(
    "[1, 1, 1, 1, 1] array of houses with max amount of money 3",
    function () {
      expect(robberFunc([1, 1, 1, 1, 1])).toBe(3);
    }
  );
})

