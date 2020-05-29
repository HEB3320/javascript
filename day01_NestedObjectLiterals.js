var myCars ={
BMW:{
    Year:2009,
    Model:"X5",
    MadeIn:"Germany"
},
Toyota:{
    Year:2015,
    Model:"Corolla",
    MadeIn:"Japan"
},
Mercedes:{
    Year:2020,
    Model:"C Class",
    MadeIn:"Germany"
}

};

console.log(myCars);
console.log(myCars.BMW.Year);
console.log(myCars["BMW"]["MadeIn"]);

console.log("===========================================");

for(eachCar in myCars){
    console.log(myCars[eachCar]);
}
console.log("===========================================");
var yearToyota =myCars.Toyota.Year;
console.log(yearToyota);

console.log("===========================================");
//ncopy objects

var oldCars =JSON.parse(JSON.stringify(myCars));
console.log(oldCars);
