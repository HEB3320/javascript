var car = {
    Make: "BMW",
    Model: "X5",
    Year:2019,
    Price:50000
};

console.log(car);
console.log(car.Make);
console.log(car["Make"]);

console.log("======================================================");

for (each in car){
    console.log(each);
}

for (each in car){
    console.log(car[each]);
}

for (each in car){
    console.log(each+": "+car[each]);
}