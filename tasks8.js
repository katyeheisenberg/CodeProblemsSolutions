// 735. Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row.
// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
// Each asteroid moves at the same speed.
// Find out the state of the asteroids after all collisions.
// If two asteroids meet, the smaller one will explode.
// If both are the same size, both will explode.
// Two asteroids moving in the same direction will never meet.

// Example 1:
// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

// Example 2:
// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.

// Example 3:
// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

// Constraints:
//     2 <= asteroids.length <= 104
//     -1000 <= asteroids[i] <= 1000
//     asteroids[i] != 0

const astroCollision = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (res.length === 0 || arr[i] > 0) {
      res.push(arr[i]);
    } else {
      while (true) {
        let last = res[res.length - 1];
        if (last < 0) {
          res.push(arr[i]);
          break;
        } else if (last === -arr[i]) {
          res.pop();
          break;
        } else if (last > -arr[i]) {
          break;
        } else {
          res.pop();
          if (res.length === 0) {
            res.push[arr[i]];
            break;
          }
        }
      }
    }
  }
  return res;
};

exports.astroCollision = astroCollision;



// 867. Transpose Matrix
// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal,
// switching the matrix's row and column indices.
// Example 1:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// ---------------------
// Example 2:
// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
// ---------------------
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109

const transpose = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let newMatrix = new Array(columns)
    .fill(0)
    .map((row) => new Array(rows).fill(0));
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
};

exports.transpose = transpose;



// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
// DO NOT allocate another 2D matrix and do the rotation.

// Constraints:
//   (n == matrix.length) == matrix[i].length;
//   1 <= n <= 20
//   - 1000 <= matrix[i][j] <= 1000;

const rotateImg = (matrix) => {
  const length = matrix.length;
  for (let i = 0; i < length; i += 1) {
    for (let j = i; j < length; j += 1) {
      const refMatrix = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = refMatrix;
    }
  }
  for (let i = 0; i < length; i += 1) {
    for (let j = 0; j < length / 2; j += 1) {
      const refMatrix = matrix[i][j];
      matrix[i][j] = matrix[i][length - 1 - j];
      matrix[i][length - 1 - j] = refMatrix;
    }
  }
  return matrix;
};

exports.rotateImg = rotateImg;



// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Constraints:
// 1 <= nums.length <= 105
// - 10*9 <= nums[i] <= 10*9;

const containsDuplicate = function (nums) {
  let seen = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (seen.indexOf(nums[i]) >= 0) {
      return true;
    }
    seen = [...seen, nums[i]];
  }
  return false;
};

exports.containsDuplicate = containsDuplicate;




// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Constraints:
//     n == nums.length
//     1 <= n <= 105
//     1 <= nums[i] <= n

const findDisappearedNumbers = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let position = nums[i] - 1;
    if (nums[i] !== nums[position]) {
      const lastPos = nums[i];
      nums[i] = nums[position];
      nums[position] = lastPos;
    } else {
      i += 1;
    }
  }
  let missing = [];
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] !== i + 1) {
      missing = [...missing, i + 1];
    }
  }

  return missing;
};

exports.findDisappearedNumbers = findDisappearedNumbers;



// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?
// Constraints:
//     1 <= n <= 45

const climbStairs = (n) => {
  if (n < 4) {
    return n;
  }
  let n1 = 1;
  let n2 = 1;
  let res = 0;
  for (let i = 2; i <= n; i += 1) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
};

exports.climbStairs = climbStairs;
