// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");


// Write password to the #password input
function generatePassword() {
  alert("select how many characters to be contained in your password.");
  var passwordSize = prompt("select between from 8 to 128");
  if (passwordSize < 8 || passwordSize > 128 || isNaN(passwordSize) === true) {
    alert("pls try again"); return null;
  }
  else { passwordSize; }

  var lowerCaseSize = parseInt(prompt("how many lowercase letters? "));
  if (lowerCaseSize < 1 || (isNaN(lowerCaseSize) === true)) {
    alert("pls try again "); return null;
  }
  else { lowerCaseSize; }

  var upperCaseSize = parseInt(prompt("how many uppercase letters? "));
  if (upperCaseSize < 1 || (isNaN(upperCaseSize) === true)) {
    alert("pls try again "); return null;
  }
  else { upperCaseSize; }

  var numberSize = parseInt(prompt("how many numbers? "));
  if (numberSize < 1 || (isNaN(numberSize) === true)) {
    alert("pls try again "); return null;
  }
  else { numberSize; }

  var symbolSize = parseInt(prompt("how many symbols? "));
  if (symbolSize < 1 || (isNaN(symbolSize) === true)) {
    alert("pls try again "); return null;
  }
  else { symbolSize; }

  //var LowerCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
  //I used the unicode number to represent the letters and the number of letters for its length.

  function getRandomLowerCase() {
    var getLower = "";
    for (var i = 0; i < lowerCaseSize; i++) {
      var RandomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      getLower = RandomLower + getLower;
    } return getLower;
  } //console.log(getRandomLowerCase());

  //var UpperCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  //I used the unicode number to represent the letters and the number of letters for its length.
  function getRandomUpperCase() {
    var getUpper = "";
    for (var i = 0; i < upperCaseSize; i++) {
      var RandomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      getUpper = RandomUpper + getUpper;
    } return getUpper;
  } //console.log(getRandomUpperCase());

  //var number = ["0,1,2,3,4,5,6,7,8,9"];
  //I used the unicode number to represent the numbers and the total index for its length.
  function getRandomNumber() {
    var getNum = "";
    for (var i = 0; i < numberSize; i++) {
      RandomNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
      getNum = RandomNum + getNum;
    } return getNum;
  } //console.log(getRandomNumber());

  // used var instead of const. to allow for update. 
  // the block bracket used for arrays did not allow for the symbols to 
  //recognised as individual symbols rather it recognised it as a string. 
  //Also, because the symbols are sparsely represented in unicode number; I found
  //it quite challenging to respresent them with unicode. 
  function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    var getSymbol = "";
    for (var i = 0; i < symbolSize; i++) {
      var RandomSymbol = symbol[Math.floor(Math.random() * symbol.length)];
      getSymbol = RandomSymbol + getSymbol;
    } return getSymbol;
  } //console.log(getRandomSymbol());

  if (passwordSize = lowerCaseSize + upperCaseSize + numberSize + symbolSize) {
    getRandomLowerCase();
    getRandomUpperCase();
    getRandomNumber();
    getRandomSymbol();

    return (getRandomSymbol().concat(getRandomLowerCase(), getRandomUpperCase(), getRandomNumber()));

  }
  else { return; }
} //console.log(generatePassword());


function writePassword() {

  var password = generatePassword();
  
  passwordText.value = password;

  document.getElementById("password").innerHTML = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

