
function freezeObject (){


    const math_constant ={
    pi:3.14
};

Object.freeze(math_constant);

try{
    math_constant.pi=99;
   }
catch(ex){
    console.log(ex);
   }
return math_constant.pi;
}

const PI =freezeObject();
console.log(PI);


