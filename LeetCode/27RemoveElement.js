/**
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return nums;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = "-";
    }
  }

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    if (nums[i] === "-" && nums[j] !== "-") {
      nums[i] = nums[j];
      nums[j] = "-";
      i++;
      j--;
    }

    if (nums[j] === "-") {
      j--;
    }

    if (nums[i] !== "-") {
      i++;
    }
  }

  return i;
};

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function removeElement(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

/**
 * The first and second approach are the same time complexity because for the first you have O(2n) then you
 * remove the constant it's become O(n) but in the second approach we only have one loop so in terme of
 * compiler runtime it a little bit better than the first
 */
