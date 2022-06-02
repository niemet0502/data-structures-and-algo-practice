/* 
  500. Keyboard Row
  Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

  In the American keyboard:

  the first row consists of the characters "qwertyuiop",
  the second row consists of the characters "asdfghjkl", and
  the third row consists of the characters "zxcvbnm".

*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  if (words.length === 0) return [];
  let fr = "qwertyuiop";
  let sr = "asdfghjkl";
  let tr = "zxcvbnm";
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let found = true;

    for (let j = 0; j < word.length; j++) {
      if (!sr.includes(word[j].toLowerCase())) {
        found = false;
        break;
      }
    }

    if (found) {
      result.push(word);
    }
    found = true;
    for (let j = 0; j < word.length; j++) {
      if (!fr.includes(word[j].toLowerCase())) {
        found = false;
        break;
      }
    }

    if (found) {
      result.push(word);
    }
    found = true;
    for (let j = 0; j < word.length; j++) {
      if (!tr.includes(word[j].toLowerCase())) {
        found = false;
        break;
      }
    }

    if (found) {
      result.push(word);
    }
  }

  return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska", "Dad"]
console.log(findWords(["adsdf", "sfd"])); // ["adsdf", "sfd"]
console.log(findWords(["omk"])); // []
console.log(findWords(["a", "b"])); // ["a", "b"]
