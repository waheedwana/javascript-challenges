// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters
// Test Cases
// Your solution will be tested against:

// Basic functionality with common words
// Edge cases with 2-character and 3-character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths


function removeChar(str){
 //You got this!
  
  if(str.length === 2){
    return ''
  } else{
    return str.slice(1, str.length - 1)
  }
};

