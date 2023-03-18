// 1481. Least Number of Unique Integers after K Removals
// Given an array of integers arr and an integer k.
// Find the least number of unique integers after removing exactly k elements.

// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// Constraints:
//     1 <= arr.length <= 10^5
//     1 <= arr[i] <= 10^9
//     0 <= k <= arr.length

const findLeastNumOfUniqueInts = (arr, k) => {
  if (arr.length === 1 && k === 0) return arr.length;

  if (arr.length === 1 && k > 0) return 0;

  if (arr.length === k) return 0;

  if (k === 0) {
    return arr.filter((it, index) => arr.indexOf(it) === index).length;
  }

  const map = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;

    return acc;
  }, {});

  let values = Object.values(map);

  values.sort((a, b) => a - b);

  for (let i = 0; i < values.length; i += 1) {
    if (values[i] === 1) {
      values.shift();

      i -= 1;

      k -= 1;
    }

    if (values[i] > 1) {
      values[i] -= 1;

      i -= 1;

      k -= 1;
    }

    if (k === 0) {
      break;
    }
  }

  return values.length;
};

const findLeastNumOfUniqueInts2 = (arr, k) => {
  arr.sort();

  const counts = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;

    return acc;
  }, {});

  arr.sort((a, b) => counts[a] - counts[b]);

  return new Set(arr.slice(k)).size;
};

// Given an array of integers which contains numbers. All numbers except one are represented in array n times.
// Your task is to find a number which is not represented n amount of times.
// Length of the array is divisible by its length - 1

const notThree = (arr, n) => {
  const m = {};
  for (let i = 0; i < arr.length; i += 1) {
    typeof m[arr[i]] === "undefined" ? (m[arr[i]] = 1) : (m[arr[i]] += 1);
  }
  for (let count in m) {
    if (m[count] < n) {
      return count;
    }
  }
};
console.log(notThree([1, 3, 0, 3, 3, 1, 0, 7, 0, 1], 3)); // -> Expect 7
console.log(notThree([1, 3, 0, 3, 3, 1, 0, 7, 0, 1, 4, 7, 4, 7], 3)); // -> Expect 4


// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index,
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
//     1 <= nums.length <= 104
//     0 <= nums[i] <= 105

const jumpGame = (arr) => {
  let end = arr.length - 1;
  for(let i = arr.length -1; i >= 0; i -= 1) {
    if(i + arr[i] >= end) end = i
  }
  return end === 0 ? true : false
}

console.log(jumpGame([3, 2, 1, 0, 4])); // expect -> fasle
console.log(jumpGame([3, 2, 1, 5, 4])); // expect -> true

