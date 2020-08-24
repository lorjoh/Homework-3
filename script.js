// Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  var passwordText = document.querySelector("#password");

 
      
// used var instead of const. to allow for update. 
// the block bracket used for arrays did not allow for the symbols to 
//recognised as individual symbols rather it recognised it as a string. 
//Also, because the symbols are sparsely represented in unicode number; I found
//it quite challenging to respresent them with unicode. 
 
 function getRandomSymbol(){  
   var symbols = "!@#$%^&*(){}[]=<>/,.|~?";
    for (var i = 0; i < symbollength; i++)
    return symbols[Math.floor(Math.random()* symbols.length)];
  } 
  
  //var UpperCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
//I used the unicode number to represent the letters and the number of letters for its length.
  function getRandomLowerCase(){
    for (var i = 0; i < lowerletterlength; i++) 
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  }

  //var LowerCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  //I used the unicode number to represent the letters and the number of letters for its length.
  function getRandomUpperCase(){
  for (var i = 0; i < upperletterlength; i++)
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
 }
  
//var number = ["0,1,2,3,4,5,6,7,8,9"];
//I used the unicode number to represent the numbers and the total index for its length.
  function getRandomNumber()  {
    for (var i = 0; i < numberlength; i++)
   return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
 } 
 const RandomFunc = {
  Symbl = getRandomSymbol,
  Lower = getRandomLowerCase, 
  Upper = getRandomUpperCase,
  Number = getRandomNumber
};
  function generatePassword (Symbl, Lower, Upper,  Number, passwordlength) 
  {
    let generatedPassword = "";

    const typesCount = Symbl + Lower + Upper + Number ;
    passwordlength = lowerletterlength + upperletterlength + numberlength + symbollength ;
    
    //console.log(typesCount);

    const typesArr = [{Upper}, {Lower}, {Number}, {Symbl}].filter(item => Object.values(item)[0]);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0; i<passwordlength; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);


    return finalPassword;
}
 
// Write password to the #password input
function writePassword() {

alert("select how many characters to be contained in your password.");
  // passwordlength = lowerletterlength + upperletterlength + numberlength + speciallength
   while (passwordlength !== ""||passwordlength !== null && 
   (passwordlength < lowerletterlength + upperletterlength + numberlength + symbollength
    ||passwordlength > lowerletterlength + upperletterlength + numberlength + symbollength))
 {
   var passwordlength = prompt("select between 8 and 128");
  if (passwordlength >= "8" && passwordlength <= "128") {
  alert("your password will contain " + passwordlength + " characters");
  }
   else if (passwordlength < "8" || passwordlength > "128") 
   { alert(passwordlength + " is not btw 8 and 128 " + "try again");
  }
  while (lowerletterlength !== null && upperletterlength !== null && numberlength !== null && symbollength !== null){
  var lowerletterlength = prompt("how many lowercase letters? ");
  var upperletterlength =  prompt("how many uppercase letters? ");
 
   if (lowerletterlength >= "1") 
    {
    alert("your will use " + lowerletterlength);
    }
   if   (upperletterlength >= "1") 
     {
     alert("your will use " + upperletterlength);
    }
   var numberlength =  prompt("how many numbers? ");
    var symbollength =  prompt("how many symbols? ");
  
     if   (numberlength >= "1") 
    {
      alert("your will use " + numberlength);
    }
   if  (symbollength >= "1") 
    {
      alert("your will use " + symbollength);
    }
  }
}
    if (passwordlength === lowerletterlength + upperletterlength + numberlength + symbollength )
    {document.body.querySelector("#password").innerHTML = PassswordText;
    } 
   


}
  

var passwordText = generatePassword();


  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword =>{
  passwordText.innerText = generatePassword(RandomFunc)
});


