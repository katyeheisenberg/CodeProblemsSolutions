const {
  astroCollision,
  transpose,
  rotateImg,
  containsDuplicate,
} = require("../tasks8");

describe("test of asteroid collision problem", function () {
  test("[5,10,-5] array of asteroids -> only [5, 10] after one collision", function () {
    expect(astroCollision([5, 10, -5])).toEqual([5, 10]);
  });
  test("[8,-8] array of asteroids -> no asteroids [] after one collision", function () {
    expect(astroCollision([8, -8])).toEqual([]);
  });
});

describe("", function () {
  test("", function () {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });
  expect(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual([
    [1, 4],
    [2, 5],
    [3, 6],
  ]);
});

describe("tests of rotateImg funtion", function () {
  test("rotate an array to the right ", function () {
    expect(
      rotateImg([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ])
    ).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });
});

describe("tests of containsDuplicate function", function () {
  test("array with no duplicates", function () {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
