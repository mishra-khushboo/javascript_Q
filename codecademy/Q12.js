// 12. Check if a string is a palindrome
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (like the words “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input and returns a Boolean indicating whether the string is a palindrome. Test your function with different strings to ensure it works correctly.

// function isPalindrome(str) {
//     // Convert the string to lowercase to handle case insensitivity
//     str = str.toLowerCase();
    
//     // Remove non-alphanumeric characters using a regular expression
//     var cleanStr = str.replace(/[\W_]/g, '');
    
//     // Reverse the cleaned string
//     var reversedStr = cleanStr.split('').reverse().join('');
    
//     // Check if the original and reversed strings are equal
//     return cleanStr === reversedStr;
// }

// // Test cases
// console.log(isPalindrome("aba"));       // Output: true
// console.log(isPalindrome("Kayak"));     // Output: true (case insensitive)
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true (ignores spaces and punctuation)
// console.log(isPalindrome("hello"));     // Output: false
// console.log(isPalindrome("12321"));     // Output: true (numeric palindrome)
// console.log(isPalindrome("radar"));     // Output: true


function check(str){
   
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
    
}

console.log(check("aba"));