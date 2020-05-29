/**
 * var variableName = [data1,data2,..];
 */

 var names =["Muhtar", "Medina", "Engin","Aylin"];

 console.log(names);
 console.log(names[2]);
 /**
  * sort()
  * push(value): adds the value to the array
  * pop(): Last in first out
  * shift(): first in first out
  * unshift(value): Inserts the given value to the Index 0
  * length
  */

  var num = [9,8,6,3,1];
  num.sort();
  console.log(num);
  
  var num1 = [1,2];
  num1.push(4);
  console.log(num1);

  var num2 =[5,6,7,8];
  console.log(num2);
  console.log(num2.pop());
  console.log(num2);


var str =["A","B","C","D"];
console.log(str.shift());
console.log(str.shift());
console.log(str.shift());
console.log(str);

var str =["E","F","G","H"];
str.unshift("K");
console.log(str);
console.log(str.length);
console.log(str.lastIndexOf("G"));