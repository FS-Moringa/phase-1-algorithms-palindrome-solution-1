function isPalindrome(word) {
  // Write your algorithm here
  
function isPalindrome(inputStr) {

  const cleanedStr = inputStr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("hello"));   

}

/* 
  Add your pseudocode here
*/

function isPalindrome(inputStr) {
  
  let reversedStr = inputStr.split('').reverse().join('');

  
  if (reversedStr === inputStr) {
      return true;
  } else {
      return false;
  }
}

// Example usage:
console.log(isPalindrome("racecar")); // Should return true
console.log(isPalindrome("hello"));   // Should return false


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
