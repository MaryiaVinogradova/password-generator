// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add Copy button
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add function to copy password. Make selection first then copy
copyBtn.addEventListener("click", copyPass);

function copyPass(){
  document.querySelector("textarea").select();
  document.execCommand('copy');

  window.alert("Password copied");

  return passwordUser;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define all var for the code and setting for user choice
var length = 8;
let lettersLower = true;
let lettersUpper = true;
let numbers = true;
let symbols = true;
var passwordUser = "";
var userChoice = {
 lettersLower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
 lettersUpper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
 numbers: ["0","1","2","3","4","5","6","7","8","9"],
 symbols: ["!","#", "$", "%", "&","(",")","*","+","-", "/",":", ";","<","=", ">","?","@", "[","]","^","{","|","}","~"]
};

// Set the password lenght
function generatePassword(){
  var tempArray  = [];
  length = prompt("How long is your's password?");

  if (length < 8 || length > 128){
    window.alert ("Your password should be min 8 and max 128 characters");
    generatePassword();
  } 
  param();

  // Choose the password setting and add them to one final password
  if (lettersLower){
    tempArray = tempArray.concat(userChoice.lettersLower);
    console.log (tempArray);
  }
  if (lettersUpper){
    tempArray = tempArray.concat(userChoice.lettersUpper);
    console.log (tempArray);
  }
  if (numbers){
    tempArray = tempArray.concat(userChoice.numbers);
    console.log (tempArray);
  }
  if (symbols){
    tempArray = tempArray.concat(userChoice.symbols);
  }

  for (i=0; i<length; i++){
 
  var res = tempArray[Math.floor(Math.random() * tempArray.length)];
      passwordUser = passwordUser + res;

  }
  return passwordUser;
}

// Asking user which setting need to add to password. If at least one of them not chosen - return function to the start
function param(){

   lettersLower = window.confirm("Include special lowercase letters?");
   lettersUpper = window.confirm("Include special uppercase letters?");
   numbers = window.confirm("Include special characters?");
   symbols = window.confirm("Include special numbers?");

  if (lettersLower!==true && lettersUpper !==true && numbers !== true && symbols !== true){
    window.alert ("Please include one of the parameters");
    param();
  }
  return;
}



