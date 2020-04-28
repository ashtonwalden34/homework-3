// Assignment Code
var generateBtn = document.querySelector("#generate");

var promptPasswordLength = prompt("How long would you like your pass word to be? (8-128 characters)");
var passwordLength = parseInt(promptPasswordLength); 

passwordPrompt();

function passwordPrompt() {
    if (passwordLength < 8){
        alert("Password too short. Please try again.");
        
    }
    else if (passwordLength > 128){
        alert("Password too long. Please try again.");
        
    }  
    else {
        var confirmLowerCase = confirm("Would you like lower case letters to be included?");
        var confirmUpperCase = confirm("Would you like upper case letters to be included?");
        var confirmNumbers = confirm("Would you like numbers letters to be included?");
        var confirmSpecialCharacters = confirm("Would you like special characters letters to be included?");

        var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", 
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "<", ">", "+"];

        var passwordComponentsArray = []
        function passwordComponents (){
            if (confirmLowerCase)
                passwordComponentsArray = passwordComponentsArray.concat(lowerCase);
            if (confirmUpperCase)
                passwordComponentsArray = passwordComponentsArray.concat(upperCase);
            if (confirmNumbers)
                passwordComponentsArray = passwordComponentsArray.concat(numbers);
            if (confirmSpecialCharacters)
                passwordComponentsArray = passwordComponentsArray.concat(specialCharacters);
            else 
                alert("Please try again and select what type of characters you would like included in your password.");
    };
};

passwordComponents();

function writePassword() {
    var answer = " ";

    for (var i = 0; i < passwordLength; i++){
        answer+=passwordComponentsArray[Math.floor(Math.random()*passwordComponentsArray.length)]
    }
    var passwordText = document.querySelector("#password");

    passwordText.value = answer;
}

// Write password to the #password input
writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
};






