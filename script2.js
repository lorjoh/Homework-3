
var lowerCaseString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";

var lowerCaseArray = lowerCaseString.split(",");

var upperCaseString = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";

var upperCaseArray = upperCaseString.split(",");

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", askForOptions)


function askForOptions() {
    var passwordSize = prompt("choose btw 8 and 128"); parseInt(passwordSize);
    console.log(passwordSize);

    if (passwordSize <= 8 || passwordSize >= 128) {
        alert("pls try again");
        return;
    }
    if (isNaN(passwordSize) === true)  {
        alert("pls try again");
        return;

    }

var isLower = confirm("yes lower")
var options = { 
    passwordSize,
    isLower
}

    
        

return options
    

}