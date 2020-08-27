// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");




// Write password to the #password input
var password = generatePassword();
document.getElementById("password").innerHTML = password;



passwordText.value = password;



const RandomFunc = {
    number: getRandomNumber,
    upperCase: getRandomUpperCase,
    lowerCase: getRandomLowerCase,
    symboL: getRandomSymbol

}// (getRandomSymbol.concat(getRandomLowerCase, getRandomUpperCase, getRandomNumber);

function writePassword() {
    {
        alert("select how many characters to be contained in your password.");

        var passwordSize = prompt("select between from 8 to 128");
        if (passwordSize < 8 || passwordSize > 128 && isNaN(passwordSize) === true) {
            alert("pls try again"); return null;
        }
        while (passwordSize < [lowerCaseSize + upperCaseSize + numberSize + symbolSize]
            || passwordSize > [lowerCaseSize + upperCaseSize + numberSize + symbolSize]) {
            var lowerCaseSize = parseInt(prompt("how many lowercase letters? "));
            if (lowerCaseSize < 1) {
                alert("pls try again "); return;
            }
            else if (isNaN(lowerCaseSize)) {
                alert("pls try again "); return;
            }
            var upperCaseSize = parseInt(prompt("how many uppercase letters? "));
            if (upperCaseSize < 1) {
                alert("pls try again "); return;
            }
            else if (isNaN(upperCaseSize)) {
                alert("pls try again "); return;
            }
            var numberSize = parseInt(prompt("how many numbers? "));
            if (numberSize < 1) {
                alert("pls try again "); return;
            }
            else if (isNaN(numberSize)) {
                alert("pls try again "); return;
            }
            var symbolSize = parseInt(prompt("how many symbols? "));
            if (symbolSize < 1) {
                alert("pls try again "); return;
            }
            else if (isNaN(symbolSize)) {
                alert("pls try again "); return;
            }
            if (passwordSize === [lowerCaseSize + upperCaseSize + numberSize + symbolSize]) {
                //generatePassword();

            }
        }

    }

    const hasSize = passwordSize.value;
    const haslowerSize = lowerCaseSize.value;
    const hasnumberSize = numberSize.value;
    const hasupperSize = upperCaseSize.value;
    const hassymbolSize = symbolSize.value;

    document.getElementById("password").innerHTML = generatePassword(hasSize, haslowerSize, hasnumberSize, hassymbolSize, hasupperSize);

} console.log(hasSize, haslowerSize, hasnumberSize, hassymbolSize, hasupperSize);

function generatePassword(number, upperCase, lowerCase, symboL) {
    // init var password  
    // loop over the length call a generator function for each type
    //final password returned to its var

    let generatedPassword = '';
    const typesCount = number + upperCase + lowerCase + symboL

    console.log('typesCount: ', typesCount);
    const typesArr = [{ number }, { upperCase }, { lowerCase }, { symboL }].filter(item => Object.values(item)[0]);
    console.log('typesArr: ', typeArr);
    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < passwordSize; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            console.log('funcName: ', funcName);
            generatedPassword += Randomfunc[funcName]();
        });
    }
    //console.log(generatedPassword);
    const finalPassword = generatedPassword.slice(0, passwordSize)

} return finalPassword;

function getRandomSymbol() {
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random() * symbol.length)]
} console.log(getRandomSymbol());


function getRandomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} console.log(getRandomLowerCase());


function getRandomUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} console.log(getRandomUpperCase());


function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} console.log(getRandomNumber());








// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

