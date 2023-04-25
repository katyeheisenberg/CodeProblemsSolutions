const { astroCollision, transpose } = require("../tasks8");

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
