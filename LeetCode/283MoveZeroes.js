/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

    Note that you must do this in-place without making a copy of the array.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] === 0 && nums[j] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      i++;
    }

    if (nums[i] !== 0) i++;

    j++;
  }

  return nums;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
