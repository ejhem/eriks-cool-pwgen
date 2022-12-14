// Assignment Code
var generateBtn = document.querySelector("#generate");

//these are to get random lower case, upper case, numbers and symbols and to push into the funcion

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

  if (wantLower) {
    selections.push(getRandomLower());
  }

  if (wantUpper) {
    selections.push(getRandomUpper());
  }

  if (wantNumbers) {
    selections.push(getRandomNumber());
  }

  if (wantSymbols) {
    selections.push(getRandomSymbol());
  }

  if (selections.length === 0) {
    window.alert("Please make at least one selection!");
    return;
  };

  var newPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(selections);
    var randomChar = getRandomItem(randomList);
    newPassword += randomChar;
  }

  return newPassword;

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
