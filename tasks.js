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

}