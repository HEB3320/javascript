let leet =9;
console.log(leet**leet);

let fn ='Engin';
console.log(typeof fn);
console.log(fn instanceof String);

let fruits =['apple','banana','orange'] ;

for(p of fruits){
    console.log(p);
}

fruits.splice(1,1,'melon');
console.log(fruits);

let citrus = fruits.slice(1,2);
console.log(citrus);

let even =[4,6];
let odd =[1,3];
let numb =even+","+odd;
console.log(numb);
