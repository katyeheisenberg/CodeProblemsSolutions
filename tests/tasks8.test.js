const { astroCollision } = require("../tasks8");

describe("test of asteroid collision problem", function() {
  test("[5,10,-5] array of asteroids -> only [5, 10] after one collision", function () {
    expect(astroCollision([5, 10, -5])).toEqual([5, 10]);
  });
  test("[8,-8] array of asteroids -> no asteroids [] after one collision", function () {
    expect(astroCollision([8, -8])).toEqual([]);
  });
})

