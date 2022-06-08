/**
 * Given a string s consisting of only the characters 'a' and 'b',
 * return true if every 'a' appears before every 'b' in the string. Otherwise, return false.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let found = false;

  for (let i = 0; i < s.length; i++) {
    if (found === false && s[i] === "b") {
      found = true;
    }

    if (found === true && s[i] === "a") {
      return false;
    }
  }

  return true;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

var checkString = function (s) {
  return !s.includes("ba");
};

/**
 * The time complexity of the js native function includes is O(n) so the time isn't better than the first one
 * but the code is more clear IMO
 *
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
