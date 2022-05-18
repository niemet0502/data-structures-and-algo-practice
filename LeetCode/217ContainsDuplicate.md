[https://leetcode.com/problems/contains-duplicate/](LIst to the question)

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Exemple 1:

```javascript
Input: nums = [1, 2, 3, 1];
Output: true;
```

### Exemple 2:

```javascript
Input: nums = [1, 2, 3, 4];
Output: false;
```

## First approch

Use two nested loops, the second will start at the case after where the first is. Each value of the array will be comparated for the all others value, if the values are equal then return true. if after traverse the whole array and don't find any duplicate value, return false.

```javascript
/**
    * @param {number[]} nums
    * @return {boolean}

    */
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};
```

Time Complexity **O(n2)**

Space Complexity **O(1)**
