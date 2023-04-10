const { robberFunc, productArr, productArr2, timeStockFunc, rotate } = require("../tasks6");

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

describe("test of best time to buy & sell stock function", function() {
  test("first buy & fifth sell array [7,1,5,3,6,4] with result 5", function () {
    expect(timeStockFunc([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("array [7,6,4,3,1] with no max profit", function () {
    expect(timeStockFunc([7, 6, 4, 3, 1])).toBe(0);
  });
});


describe("test of rotate an array function", function() {
  test("rotate [1,2,3,4,5,6,7] array by 3 steps", function() {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toMatchObject([
      5, 6, 7, 1, 2, 3, 4,
    ]);
  });
  test("rotate [1,2,3,4,5,6,7] array by 4 steps", function() {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 4)).toMatchObject([4, 5, 6, 7, 1, 2, 3]);
  });
  test("rotate [-1,-100,3,99] array by 2 steps", function () {
    expect(rotate([-1, -100, 3, 99], 2)).toMatchObject([3, 99, -1, -100]);
  });
})

