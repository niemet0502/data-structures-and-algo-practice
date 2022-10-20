/**
 * Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const stack = [root];
  let current;

  while (stack.length) {
    current = stack.pop();

    if (current.left) {
      stack.push(current.left);

      if (!current.left.left && !current.left.right) {
        sum += current.left.val;
      }
    }

    if (current.right) stack.push(current.right);
  }

  return sum;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
