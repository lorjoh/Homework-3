// Assignment Code
  var generateBtn = document.querySelector("#generate");
  
function generatePassword(){
   var symbols = "!@#$%^&*(){}[]=<>/,.|~?";
// used var instead of const. to allow for update. 
// the block bracket used for arrays did not allow for the symbols to 
//recognised as individual symbols rather it recognised it as a string. 
//Also, because the symbols are sparsely represented in unicode number; I found
//it quite challenging to respresent them with unicode. 
  function getRandomSymbol() { 
    for (var i = 0; i < speciallength; i++)
    return (Math.floor(Math.random()* symbols.length));
  } console.log(getRandomSymbol());
  
  var UpperCase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
//I used the unicode number to represent the letters and the number of letters for its length.
  function getRandomLowerCase(){
    for (var i = 0; i < lowerletterlength; i++); 
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
  } console.log(getRandomLowerCase());

  var LowerCase = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"];
  //I used the unicode number to represent the letters and the number of letters for its length.
  function getRandomUpperCase(){
  for (var i = 0; i < upperletterlength; i++)
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
 } console.log(getRandomUpperCase());
  
var number = ["0,1,2,3,4,5,6,7,8,9"];
//I used the unicode number to represent the numbers and the total index for its length.
  function getRandomNumber()  {
    for (var i = 0; i < numberlength; i++)
   return String.fromCharCode(Math.floor(Math.random()* 10) + 48);
 } console.log(getRandomNumber());
 }

// Write password to the #password input
function writePassword() {
  alert("select how many characters to be contained in your password.");
  // passwordlength = lowerletterlength + upperletterlength + numberlength + speciallength
   while 
  (passwordlength !== ""||passwordlength !== null && passwordlength < lowerletterlength + upperletterlength + numberlength + speciallength
    ||passwordlength > lowerletterlength + upperletterlength + numberlength + speciallength)
 {
   var passwordlength = prompt("select between 8 and 128");
  if (passwordlength >= 8 && passwordlength <= 128) {
  alert("your password will contain " + passwordlength + " characters");
  }
   else if (passwordlength < 8 || passwordlength > 128) 
   { alert(passwordlength + " is not btw 8 and 128 " + "try again");
  }

  var lowerletterlength = prompt("how many lowercase letters? ");
  var upperletterlength =  prompt("how many uppercase letters? ");
  var numberlength =  prompt("how many numbers? ");
  var speciallength =  prompt("how many symbols? ");
  
   if (lowerletterlength >= 1) 
    {
    alert("your will use " + lowerletterlength);
    }
    else {alert ("Your are incorrect")
    }
    
    if   (upperletterlength >= 1) 
     {
     alert("your will use " + upperletterlength);
    }
  else {
    alert ("Your are incorrect")
}
     if   (numberlength >= 1) 
    {
      alert("your will use " + numberlength);
    }
    else {alert ("Your are incorrect")
}
  if  (speciallength >= 1) 
    {
      alert("your will use " + speciallength);
    }
    else {alert ("Your are incorrect")
}
  }
    if (passwordlength === lowerletterlength + upperletterlength + numberlength + speciallength )
    { generatePassword();
    } 
   
  }
}

var passwordText = generatePassword()
var passwordText = document.querySelector("#password")

ducument.body.SelectElementbyid("password").innerHTML = passwordText;

  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)