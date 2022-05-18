[https://leetcode.com/problems/reverse-string/](link to the question)

Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with `O(1)` extra memory.

### Example 1:

```javascript
Input: s = ["h", "e", "l", "l", "o"];
Output: ["o", "l", "l", "e", "h"];
```

### Example 2:

```javascript
Input: s = ["H", "a", "n", "n", "a", "h"];
Output: ["h", "a", "n", "n", "a", "H"];
```

## Approch

Used the two pointer approch. initialize i to 0 and j to the size of the array. traverse while i is less than j, in the loop swap the value for each tour then i increment and j decrement

### Solution:

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function swap(s, i, j) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }

  function traverse(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
      swap(s, i, j);
      j--;
      i++;
    }
  }

  traverse(s);
};
```

Time Complexity **O(n)**

Space Complexity **O(1)**
