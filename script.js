// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");


// Write password to the #password input
function generatePassword() {
  alert("select how many characters to be contained in your password.");

  var passwordSize = parseInt(prompt("select between from 8 to 128"));
  if (passwordSize < 8 || passwordSize > 128 || isNaN(passwordSize) === true) {
    var passwordSize = parseInt(prompt("select between from 8 to 128"));
    alert("Please try again!");
    return location.reload(true);

  }
  else { passwordSize; }

  var lowerCaseSize = parseInt(prompt("how many lowercase letters? "));
  if (lowerCaseSize < 1 || (isNaN(lowerCaseSize) === true)) {
    var lowerCaseSize = parseInt(prompt("how many lowercase letters? "));
    alert("pls try again ");
    return location.reload(true);
  }
  else { lowerCaseSize; }

  var upperCaseSize = parseInt(prompt("how many uppercase letters? "));
  if (upperCaseSize < 1 || (isNaN(upperCaseSize) === true)) {
    var upperCaseSize = parseInt(prompt("how many uppercase letters? "));
    alert("pls try again ");
    return location.reload(true);
  }
  else { upperCaseSize; }

  var numberSize = parseInt(prompt("how many numbers? "));
  if (numberSize < 1 || (isNaN(numberSize) === true)) {
    var numberSize = parseInt(prompt("how many numbers? "));
    alert("pls try again ");
    return location.reload(true);
  }
  else { numberSize; }

  var symbolSize = parseInt(prompt("how many symbols? "));
  if (symbolSize < 1 || (isNaN(symbolSize) === true)) {
    var symbolSize = parseInt(prompt("how many symbols? "));
    alert("pls try again ");
    return location.reload(true);
  }
  else { symbolSize; }



  function getRandomLowerCase() {
    var getLower = "";
    for (var i = 0; i < lowerCaseSize; i++) {
      var RandomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      getLower = RandomLower + getLower;
    } return getLower;
  }

  function getRandomUpperCase() {
    var getUpper = "";
    for (var i = 0; i < upperCaseSize; i++) {
      var RandomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      getUpper = RandomUpper + getUpper;
    } return getUpper;
  }

  function getRandomNumber() {
    var getNum = "";
    for (var i = 0; i < numberSize; i++) {
      RandomNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      getNum = RandomNum + getNum;
    } return getNum;
  }

  function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    var getSymbol = "";
    for (var i = 0; i < symbolSize; i++) {
      var RandomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
      getSymbol = RandomSymbol + getSymbol;
    } return getSymbol;
  }


  if (passwordSize === (lowerCaseSize + upperCaseSize + numberSize + symbolSize)) {
    getRandomLowerCase();
    getRandomUpperCase();
    getRandomNumber();
    getRandomSymbol();

    return (getRandomSymbol().concat(getRandomLowerCase(), getRandomUpperCase(), getRandomNumber()));
  }
  else {
    alert("Yikes! Try Again!");
    location.reload(true);
  }
}



function writePassword() {

  var password = generatePassword();

  passwordText.value = password;

  document.getElementById("password").innerHTML = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

