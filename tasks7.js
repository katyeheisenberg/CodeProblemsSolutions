// 71 Simplify Path
// Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to the simplified canonical path.
// In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level,
// and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'.
// For this problem, any other format of periods such as '...' are treated as file/directory names.

// The canonical path should have the following format:
//     The path starts with a single slash '/'.
//     Any two directories are separated by a single slash '/'.
//     The path does not end with a trailing '/'.
//     The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period '.' or double period '..')


const simplifyPath = (path) => {
    const result = []
    const arrPath = path.split('/').filter((e) => e !== '.').filter((e) => e !== '');
    for(element of arrPath) {
        if(element === '..') {
            result.pop()
        } else {
          result.push(element)
        }
    }
    return '/' + result.join('/')
};

console.log(simplifyPath("/home/")); // expect "/home"
console.log(simplifyPath("/home//foo/")); // expect "/home/foo"


// 702. Search in a Sorted Array of Unknown Size
// Given an integer array sorted in ascending order, write a function to search target in nums.
// If target exists, then return its index, otherwise return -1.
// However, the array size is unknown to you. You may only access the array using an ArrayReader interface,
// where ArrayReader.get(k) returns the element of the array at index k (0-indexed).
// You may assume all integers in the array are less than 10000, and if you access the array out of bounds, ArrayReader.get will return 2147483647.

// Example 1:
// Input: array = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: array = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

const findTarget = (arr, target) => {
  let leftIndex = 0
  let rightIndex = 1
  while(arr[rightIndex] < target) {
    leftIndex = rightIndex
    rightIndex = rightIndex * 2
  }
  while(leftIndex <= rightIndex) {
    let middle = Math.floor((leftIndex + rightIndex) / 2)
    if (arr[middle] === target) return middle
    if (arr[leftIndex] <= target && target < arr[middle]) {
      rightIndex = middle - 1
    } else {
      leftIndex = middle + 1
    }
  }
  return -1
}

console.log(findTarget([-1, 0, 3, 5, 9, 12], 9)) // expect 4
console.log(findTarget([-1, 0, 3, 5, 9, 12], 2)); // expect -1