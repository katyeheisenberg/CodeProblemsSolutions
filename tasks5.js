// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isValidAnagram = (s, t) => {
  const count = {}
  for(let i = 0; i < s.length; i += 1) {
    if(!count[s[i]]) count[s[i]] = 0
    if(!count[t[i]]) count[t[i]] = 0
    count[s[i]] += 1
    count[t[i]] -= 1
  }
  if(s.length !== t.length) return false
  for(let letter in count) {
    if(count[letter] !== 0) return false
  }
  return true
}
console.log(isValidAnagram("anagram", "nagaram")); // expect true
console.log(isValidAnagram("bom", "tom")); // expect false


// Leetcode INORDER SUCCESSOR IN BST
// Given the root of a binary search tree and a node p in it, return the in-order
// successor of that node in the BST. If the given node has no in-order successor in the tree, return null.
// The successor of the node p is the node with the smallest key greater than p.val

// Example:
// Input: [2,1,3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

const inorderSuccessor = (root, p) => {
  // check if p has a right subtree
  if(p.right) {
    let current = p.right
    let previous = null

    while(current) {
      previous = current
      current = current.left
    }

    return previous
  }

  let current = root;
  let previous = null;
  // if p doesn't have a right substree
  while(current !== p) {
    if(p.val < current.val) {
      previous = current
      current = current.left
    } else {
      current = current.right
    }
  }

  return prev
}

console.log(inorderSuccessor([2, 1, 3], p = 1))

