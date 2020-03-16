// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLowerCase = confirm("Would you like lower case letters to be included?")

var confirmUpperCase = confirm("Would you like upper case letters to be included?")

var confirmNumbers = confirm("Would you like numbers letters to be included?")

var confirmSpecialCharacters = confirm("Would you like special characters letters to be included?")

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", 
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "<", ">", "+"]

console.log("hello");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
