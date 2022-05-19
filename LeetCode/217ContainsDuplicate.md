## 217. Contains Duplicate

(Link to the question)[https://leetcode.com/problems/contains-duplicate/]

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Example 1:

` Input: nums = [1,2,3,1] Output: true`

### Example 2:

` Input: nums = [1,2,3,4] Output: false`

## First approch

Use two nested loops, the second will start at the case after where the first is. Each value of the array will be comparated for the all others value, if the values are equal then return true. if after traverse the whole array and don't find any duplicate value, return false.

``
/\*\*
_ @param {number[]} nums
_ @return {boolean}
\*/
var containsDuplicate = function(nums) {
for(let i = 0; i < nums.length; i++){
for(let j = i+1; j < nums.length; j++){
if(nums[i] === nums[j])
return true;
}
}

        return false;
    };

``
Time Complexity **O(n2)**
Space complexity **O(1)**
