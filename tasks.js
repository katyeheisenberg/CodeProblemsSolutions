// 104. Maximum Depth of Binary Tree //
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1 -> Input: root = [3,9,20,null,null,15,7] | output: 3
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**

// Solution //
// Firstly, binary tree - is a recursive data structure, that means we can apply the logic of maxDepth func to both(left, right) child recursively.
// maxDepth(root.right) - will check right child of the parent node and return the its maximum maxDepth || its return value = 2
// maxDepth(root.left) - will do the same logic, but for the left child || its return value = 1
// So, with those values we need to take the highest of them and just add one to it as with calling our func recursively for children we didnt count parent node
// Math.max() - method which will help us to get the maximum value.

const maxDepth = function (root) {
  if (!root) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}


// 127. Word Ladder //

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:
//     Every adjacent pair of words differs by a single letter.
//     Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
//     sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.

// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:
//     1 <= beginWord.length <= 10
//     endWord.length == beginWord.length
//     1 <= wordList.length <= 5000
//     wordList[i].length == beginWord.length
//     beginWord, endWord, and wordList[i] consist of lowercase English letters.
//     beginWord != endWord
//     All the words in wordList are unique.

_____

// Solution //

const findConnection = (word, wordSet) => {
  let result = [];
  const aASCII = "a".charCodeAt(0);
  for (let i = 0; i < word.length; i += 1) {
    // loopinf through each letter of the word
    const firstHalf = word.substring(0, i);
    const otherHalf = word.substring(i + 1);
    for (let b = 0; b < 26; b += 1) {
      // looping through eact alphabet's letter
      const nextWord = firstHalf + String.fromCharCode(aASCII + b) + otherHalf;
      if (wordSet.has(nextWord)) {
        result = [...result, nextWord];
      }
    }
  }
  return result;
};

const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  const queue = [beginWord];
  let distance = 0;
  while (queue.length > 0) {
    distance += 1;
    let n = queue.length;
    while (n--) {
      const word = queue.shift();
      const connections = findConnection(word, wordSet);
      for (let i = 0; i < connections.length; i += 1) {
        const nextWord = connections[i];
        if (nextWord == endWord) {
          return distance + 1;
        }
        queue.push(nextWord);
        wordSet.delete(nextWord);
      }
    }
  }
  return 0;
};



// 46. Permutations //
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Example 3:

// Input: nums = [1]
// Output: [[1]]

// Constraints:
//     1 <= nums.length <= 6
//     -10 <= nums[i] <= 10
//     All the integers of nums are unique.

_____

// solution //
// 1 _ _ - [2, 3]
// 1 2 3
// 1 3 2

// 2 _ _ - [1, 3]
// 2 1 3
// 2 3 1

// 3 _ _ - [1, 2]
// 3 1 2
// 3 2 1

const permute = (nums, permutation = [], result = []) => {             // space complexity:   2 + 1 + 0 : (n - 1) + (n - 2) + ... -> 0(N) - linear sc
  if (nums.length === 0) {                                             // 1st- nums = [1, 2, 3] length - 2
    result.push([...permutation]);                                     // 2nd- nums = [2, 3] length - 1
  }                                                                    // 3rd- nums = [3] length - 0
  for (let i = 0; i < nums.length; i += 1) {                           // 4th- nums = []
    permutation = [...permutation, nums[i]];                           // stack runs 4 levels deep = n + 1
    const nmbLeft = nums.filter((num, index) => index !== i); // <- it's the only time we use extra memory by creating new array
    permute(nmbLeft, permutation, result);
    permutation.pop();                                                 // time complexity
  }                                                                    // we're running our for loop 3times and once we pushed nmb into permut array we've to run for loop 2 more times
  return result;                                                       // and to loop through it again as each time we're reducing nums array
};                                                                     // 3 * 2 * 1 = n * (n - 1) * (n - 2) * ... : n! -> n-factorial 0(N!)

_____
// another solution with reduced space complexity 0(1)
const swap = (arr, start, i) => {
  [arr[start], arr[i]] = [arr[i], arr[start]];
};

const permute1 = (nums, start = 0, result = []) => {         // in this case we're using our nums array to store our nmbLeft by changing it
  if (start === nums.length - 1) {
    result.push([...nums]);
  }
  for (let i = start; i < nums.length; i += 1) {
    swap(nums, start, i);
    permute(nums, start + 1, result);
    swap(nums, start, i);
  }
  return result;
};

// 162. Find Peak Element
// A peak element is an element that is strictly greater than its neighbors.
// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
// You must write an algorithm that runs in O(log n) time.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

// Example 2:
// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// Constraints:

//     1 <= nums.length <= 1000
//     -231 <= nums[i] <= 231 - 1
//     nums[i] != nums[i + 1] for all valid i.

// solution // <-- binary search log(n)
// const findPeakElement = function (nums) {
//   let lower = 0;
//   let higher = nums.length - 1;
//   while (higher > lower) {
//     const i = Math.floor((higher + lower) / 2);
//     if (nums[i] < nums[i + 1]) {
//       lower = i + 1;
//     } else {
//       higher = i;
//     }
//   }
//   return lower;
// };

// solution with linear sc 0(n) (brute force)

const findPeakElement = function(nums) {
    let isPrevSmaller = true
    for (let i = 0; i < nums.length - 1; i += 1) {
        if(nums[i] > nums[i + 1] && isPrevSmaller) {
            return i
        }
        isPrevSmaller = nums[i] < nums[i + 1]
    }
    return nums.length - 1
};

// 234. palindrome linked list
// Given the head of a singly linked list, return true if it is a palindrome.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

// Constraints:

//     The number of nodes in the list is in the range [1, 105].
//     0 <= Node.val <= 9

solution //
const findMidPoint = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const compare = (list1, list2) => {
  while (list1 && list2) {
    if (list1.val !== list2.val) {
      return false;
    }
    list1 = list1.next;
    list2 = list2.next;
  }
  return true;
};

const isPalindrome = (head) => {
  const midPoint = findMidPoint(head);
  const tail = reverse(midPoint);
  return compare(head, tail);
};

// 206. reverse link list
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Constraints:

//     The number of nodes in the list is the range [0, 5000].
//     -5000 <= Node.val <= 5000

solution -> linear time complexity

const reverseList = (head) => {
    let previous = null
    let current = head
    while (current) {
        const next = current.next
        current.next = previous
        previous = current
        current = next
    }
    return previous
};



// 167. Two Sum 2 | Input array is sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Example 1:
// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

// Example 2:
// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

// Example 3:
// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

// Constraints:
//     2 <= numbers.length <= 3 * 104
//     -1000 <= numbers[i] <= 1000
//     numbers is sorted in non-decreasing order.
//     -1000 <= target <= 1000
//     The tests are generated such that there is exactly one solution.

