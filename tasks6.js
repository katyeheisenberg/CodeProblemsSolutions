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