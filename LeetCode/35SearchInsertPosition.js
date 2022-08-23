/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let h = nums.length - 1;

  while (l <= h) {
    mid = Math.floor((l + h) / 2);

    if (nums[mid] === target) {
      return mid;
    } else {
      if (nums[mid] > target) {
        h = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return l;
};

/**
 * Time complexity: O(logn)
 * Space complexity: O(1)
 */
