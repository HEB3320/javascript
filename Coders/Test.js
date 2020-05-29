/*
Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

let myName ='Engin "Bekem"'
myName="Engin 'Bekem'"

console.log(myName);
console.log(myName[0]);

console.log(myName.substring(0,1));

var global =7;
function alfa (){
      num =9;
}

function beta (){

    if ( typeof global != "undefined"){
        console.log(global);
    }

    if (typeof num != "undefined"){
        console.log(num);
    }
}
beta();


function gamma (){

    num2 =9; // var num2 =9 dersek method disinda gorulmez
    console.log(num2);
}
gamma();

console.log(num2);