// 238  Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
//     2 <= nums.length <= 105
//     -30 <= nums[i] <= 30
//     The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

const productArr = (nums) => {
    let result = new Array(nums.length).fill(nums[0])
    let variable = nums[nums.length - 1]

    for (let i = 1; i < nums.length; i += 1) {
        result[i] = result[i - 1] * nums[i]
    }

    result[nums.length - 1] = result[result.length - 2]

    for (let j = nums.length - 2; j > 0; j -= 1) {
        result[j] = result[j - 1] * variable
        variable = variable * nums[j]
    }

    result[0] = variable
    return result
}

console.log(productArr([1,2,4,5,1])) // expect [ 40, 20, 10, 8, 40 ]
console.log(productArr([1, 2, 3, 4])); // expect [ 24, 12, 8, 6 ]



// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
//  the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and
//  it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight
//  without alerting the police.


// Example 1:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.


// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

const robberFunc = (arr) => {
  if(arr.length === 1) return arr[0]
  if(!arr.length) return 0
  if(arr.length === 2) return Math.max(arr[0], arr[1])

  for (let houseIndex = 2; houseIndex < arr.length; houseIndex += 1) {
    arr[houseIndex] = Math.max(arr[houseIndex - 2] + arr[houseIndex], (arr[houseIndex - 3] || 0) + arr[houseIndex])
  }

  return Math.max(arr[arr.length - 1], arr[arr.length - 2])
}

console.log(robberFunc([2, 7, 9, 3, 1])); // expect 12
console.log(robberFunc([1, 2, 3, 1])); // expect 4

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

const timeStockFunc = (arr) => {
  let buyIndex = arr[0];
  arr[0] = 0;
  let profit = 0;
  for(let i = 1; i < arr.length; i += 1) {
    if(buyIndex > arr[i]) {
      buyIndex = arr[i]
      arr[i] = 0
    } else {
      profit = Math.max(arr[i] - buyIndex, profit)
    }
  }
  return profit
}

console.log(timeStockFunc([7, 6, 4, 3, 1])); // expect 0
console.log(timeStockFunc([7, 1, 5, 3, 6, 4])); // expect 5


// 337. House Robber III

// The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

// Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses
// in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

// Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

// Example:
// Input: root = [3,4,5,1,3,null,1]
// Output: 9
// Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.

const houseR3 = (root) => {
  function decide(node) {
    if(!node) return [0,0]

    let [leftRob, leftNot] = decide(node.left)
    let [rightRob, rightNot] = decide(node.right)

    let notRob = Math.max(leftRob+rightRob, leftRob+rightNot, leftNot+rightNot, leftNot+rightRob)
    let robDecision = node.val + leftNot + rightNot

    return [robDecision, notRob]
  }

  return Math.max(...decide(root))

}

// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:
//     1 <= nums.length <= 10^5
//     -231 <= nums[i] <= 231^ - 1
//     0 <= k <= 10^5

const movePosition = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
const rotate = (nums, k) => {
  k = k % nums.length;
  nums.reverse();
  movePosition(nums, 0, k - 1);
  movePosition(nums, k, nums.length - 1);
};

console.log([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
console.log([-1, -100, 3, 99], 2); // [3,99,-1,-100]