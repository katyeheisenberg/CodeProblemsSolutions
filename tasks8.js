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
    if(res.length === 0 || arr[i] > 0) {
      res.push(arr[i]);
    } else {
      while(true) {
        let last = res[res.length - 1];
        if(last < 0) {
          res.push(arr[i]);
          break;
        } else if(last === -arr[i]) {
          res.pop();
          break;
        } else if(last > -arr[i]) {
          break;
        } else {
          res.pop();
          if(res.length === 0) {
            res.push[arr[i]];
            break;
          }
        }
      }
    }

  }
  return res;

}

// console.log(astroCollision([5, 10, -5]
  // )); // excepted output would be equal to [10]
// let a = [10, 2, -5]
// console.log(a.pop); // excepted output would be equal to [10]



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
  let newMatrix = new Array(columns).fill(0).map((row) => new Array(rows).fill(0));
   for (let i = 0; i < rows; i+= 1) {
        for (let j = 0; j < columns; j+= 1) {
            newMatrix[j][i] = matrix[i][j];
        }
    }
    return newMatrix
};

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));