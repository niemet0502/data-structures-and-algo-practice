/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  const s1 = [p];
  const s2 = [q];
  let current1;
  let current2;

  while (s1.length && s2.length) {
    current1 = s1.pop();
    current2 = s2.pop();

    if (current1.val !== current2.val) {
      return false;
    }

    if (current1.left && current2.left) {
      s1.push(current1.left);
      s2.push(current2.left);
    } else {
      if (
        (!current1.left && current2.left) ||
        (current1.left && !current2.left)
      ) {
        return false;
      }
    }

    if (current1.right && current2.right) {
      s1.push(current1.right);
      s2.push(current2.right);
    } else {
      if (
        (!current1.right && current2.right) ||
        (current1.right && !current2.right)
      ) {
        return false;
      }
    }
  }

  return true;
};
