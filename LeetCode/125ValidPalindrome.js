/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.
 */

    /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-z0-9]/gi, '');
    str = str.toLowerCase(); 
    
    let i = 0; 
    let j = str.length -1 ; 
    
    while(i< j){
        if(str[i] !== str[j]){
            return false
        }
        i++; 
        j--;
    }
    
    return true;
};

/**
 * Time Complexity: O(n)
 * Space Complexity : O(n)
 */