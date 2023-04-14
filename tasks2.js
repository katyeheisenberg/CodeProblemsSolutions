// 200. number of islands
// Level:Medium || Description:
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:
//     m == grid.length
//     n == grid[i].length
//     1 <= m, n <= 300
//     grid[i][j] is '0' or '1'.

// solution <- actually it doesnt work in leetcode as it throws type error for array deconstructions i,j fron currNode in while loop in dFS func
// however it runs locally on the node serveer and in the leetcode's tests

const getAdjN = (i, j, grid, visited) => {
  const aN = [];

  if (i > 0 && !visited[i - 1][j]) {
    aN.push([i - 1], j);
  }
  if (i < grid.length - 1 && !visited[i + 1][j]) {
    aN.push([i + 1, j]);
  }

  if (j > 0 && !visited[i][j - 1]) {
    aN.push([i, j - 1]);
  }
  if (j < grid[0].length - 1 && !visited[i][j + 1]) {
    aN.push([i, j + 1]);
  }

  return aN;
};
const dFS = (i, j, grid, visited) => {
  const stack = [[i, j]];
  let size = 0;
  while (stack.length) {
    let currNode = stack.pop();
    let [i, j] = currNode;

    // check if visited at i and j
    if (visited[i][j]) continue;
    visited[i][j] = true;

    // check if cell is part of an island
    if (grid[i][j] === "0") continue;
    size += 1;

    let adjNeighbors = getAdjN(i, j, grid, visited);
    stack.push(...adjNeighbors);
  }

  return size > 0 ? true : false;
};

const numIslands = (grid) => {
  const visited = grid.map((row) => row.map((cell) => false));
  let islandCount = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (dFS(i, j, grid, visited)) {
        islandCount += 1;
      }
    }
  }

  return islandCount;
};

exports.numIslands = numIslands;



// another solution
const teraform = (i, j, grid) => {
  if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === "0")
    return;
  grid[i][j] = "0";
  teraform(i + 1, j, grid);
  teraform(i - 1, j, grid);
  teraform(i, j + 1, grid);
  teraform(i, j - 1, grid);
};

const numIslands2 = (grid) => {
  let islandCount = 0;
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        islandCount += 1;
        teraform(parseInt(i), parseInt(j), grid);
      }
    }
  }

  return islandCount;
};




// Longest substring without repeating characters 3.
// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.

const lengthOfLongestSubstring = (s) => {
  // using sliding window pattern
  let max = 0;
  let begin = 0;
  const map = {};

  for (let end = 0; end < s.length; end += 1) {
    let rightChar = s[end];
    map[rightChar] = map[rightChar] + 1 || 1;

    while (map[rightChar] > 1) {
      let leftChar = s[begin];

      if (map[leftChar] > 1) {
        map[leftChar] -= 1;
      } else {
        delete map[leftChar];
      }
      begin += 1;
    }
    max = Math.max(max, end - begin + 1);
  }
  return max;
};

exports.lengthOfLongestSubstring = lengthOfLongestSubstring;



// to find the shortest word
// to create function which will find the first shortest word in the given string
// Example:
// Input: 'The mischievous dog is Jack'
// Output: 'is'

const findShortest = (str) => {
  const splittedStr = str.split(" "); // -> to create array of words from string argument
  const sortedWords = splittedStr.sort((a, b) => a.length - b.length); // to sort array in ascending way, we will sort each word by its length
  return sortedWords[0]; // we return the first element of sorted array of words, the shortest one
};

exports.findShortest = findShortest;



// Find the highest and the lowest nummber in the array
// to create a function whicj will find hichest and lowest numbers in the array
// if array contains only one number the function must return two same values
// Example:
// Input: [1, 2, -2, 6, 87]
// Output: [-2, 87]

const findMM = (arr) => {
  return [Math.min(...arr), Math.max(...arr)];
};

exports.findMM = findMM;

// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

const isValid = (string) => {
  let stack = [];
  let dict = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let dict2 = Object.keys(dict).reduce((acc, rec) => {
    return { ...acc, [dict[rec]]: rec };
  }, {}); // reversed version of our dictionary of parentheses

  for (let i = 0; i < string.length; i += 1) {
    let symb = string[i];
    if (typeof dict[symb] !== "undefined") {
      // if we have a current symbol in our dictionary
      stack.push(symb);
      continue;
    }

    if (typeof dict2[symb] !== "undefined") {
      // if we have next symbol (closing parenthesis) in our reversed dictionary
      const openSymbol = stack.pop();
      if (dict[openSymbol] !== symb) {
        return false;
        break;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

exports.isValid = isValid;