// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables i have made
const lowerCase = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upperCase = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const specialCharacters = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];
let userChoice = [];



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  let generatedPassword = "";
  let userPassLength = window.prompt(
    "Please indicate desired password length: 8-128"
  );

  userLower = confirm("Do you want lowercase letters in your password?");
  userUpper = confirm("Do you want uppercase letters in your password?");
  userNumber = confirm("Do you want numbers in your password?");
  userSpecial = confirm("Do you want special characters in your password?");

  if (userLower) {
    userChoice = userChoice.concat(lowerCase);
    console.log(userChoice);
  }
  if (userUpper) {
    userChoice = userChoice.concat(upperCase);
    console.log(userChoice);
  }
  if (userNumber) {
    userChoice = userChoice.concat(numbers);
    console.log(userChoice);
  }
  if (userSpecial) {
    userChoice = userChoice.concat(specialCharacters);
    console.log(userChoice);
  }

for (let i = 0; i < userPassLength; i++) {
  let randomIndex = Math.floor(Math.random()*userChoice.length);
  let randomCharacter = userChoice[randomIndex];
  generatedPassword = generatedPassword.concat(randomCharacter);
  console.log(generatedPassword);
}
return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
