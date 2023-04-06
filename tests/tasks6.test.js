const { robberFunc, productArr, productArr2 } = require("../tasks6");

describe("tests of robberFunc", function () {
  test("[1,2,3,1] array of houses with max amount of money 4", function () {
    expect(robberFunc([1, 2, 3, 1])).toBe(4);
  });
  test("[2,7,9,3,1] array of houses with max amount of money 12", function () {
    expect(robberFunc([2, 7, 9, 3, 1])).toBe(12);
  });
  test("[1, 1, 1, 1, 1] array of houses with max amount of money 3", function () {
    expect(robberFunc([1, 1, 1, 1, 1])).toBe(3);
  });
});

describe("tests of product Array except self function", function () {
  test("[1,2,4,5,1] should be [ 40, 20, 10, 8, 40 ]", function () {
    expect(productArr([1, 2, 4, 5, 1])).toEqual([40, 20, 10, 8, 40]);
  });
  test("", function () {
    expect(productArr([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});

describe("tests of product Array 2nd solution except self function", function () {
  test("[1,2,4,5,1] should be [ 40, 20, 10, 8, 40 ]", function () {
    expect(productArr2([1, 2, 4, 5, 1])).toEqual([40, 20, 10, 8, 40]);
  });
  test("", function () {
    expect(productArr2([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
