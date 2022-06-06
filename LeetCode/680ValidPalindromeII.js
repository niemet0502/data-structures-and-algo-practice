/**
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    
    for(let i = 0; i< s.length; i++){
        let str = s.slice(0,i) + s.slice(i+1);
        
        let j = 0; 
        let k = str.length - 1; 
        let found = true;
    
        while(j < k){
            
            if(str[k] !== str[j]){
                found = false;
            }
            j++; 
            k--;
        }
        
        if(found){
            return true;
        }
    }
    
    return false;
};

/*
    Time Complexity: O(n^2)
    Space Complexity: O(1)
*/