// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables i have made
const lowerCase = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
const upperCase = ["A" ,"B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" ,"N" ,"O" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const specialCharacters = ["'","!","@","#","$","%","^","&","*","(",")","_","+","~","`","|","}","{","[","]","\"",":",";","?",">","<",",",".","/","-","="];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  var userPassLength = window.prompt("Please indicate desired password length: 8-128");
  passLength = Number(passLengthStr);
  
  
  userLower = confirm("Do you want lowercase letters in your password?");
  userUpper = confirm("Do you want uppercase letters in your password?");
  userNumber = confirm("Do you want numbers in your password?");
  userSpecial = confirm("Do you want special characters in your password?");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
