

 

function abc(){
    "use strict";
    const x=6;
if (true){
     const x=7;
    console.log(x);
}

console.log(x);
 return x;
}

abc();

console.log("===================================");

const s =[2,3,4];
s[0]=0;
console.log(s);