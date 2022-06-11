/**
 * Iterative solution
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    // If element is present at mid, return True
    if (nums[mid] === target) return mid;
    // Else look in left or right half accordingly
    else if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};

/**
 * Recursive Solution
 *
 */
