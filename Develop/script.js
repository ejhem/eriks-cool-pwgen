// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  return Math.floor(min * (1 - Math.random()) + Math.random() * max);
}

function getRandomItem(list) {
  return list[randomInt(list.length)];
}

//prompts and setups for generation

function generatePassword() {
  var userInput = window.prompt(
    "How many characters is your password? Please choose between 8 and 128"
  );

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("That's not a number! Only enter a number between 8 and 128!");
    return;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please only select between 8 and 128 characters!");
    return;
  }

  var wantLower = window.confirm("Do you require lower case letters?");
  var wantUpper = window.confirm("Do you require upper case letters?");
  var wantNumbers = window.confirm("Do you require numbers?");
  var wantSymbols = window.confirm("Do you require special symbols?");

  var selections = [];

  if (wantLower === true) {
    selections.push(getRandomLower());
  }

  if (wantUpper === true) {
    selections.push(getRandomUpper());
  }

  if (wantNumbers === true) {
    selections.push(getRandomNumber());
  }

  if (wantSymbols === true) {
    selections.push(getRandomSymbol());
  }

  // var generatedPassword = 

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(selections);
    var randomChar = getRandomItem(randomList);
    console.log(randomChar);
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());
// console.log(getRandomSymbol());
