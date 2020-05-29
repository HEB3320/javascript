var car1 ={

    Make: "Toyota",
    Model:"Corolla",
    Year: 2019

};

function car (Make,Model,Year){
this.Make=Make;
this.Model=Model;
this.Year=Year;
}

var car2 =new car("BMW", "X5",2020);
var car3 = new car("Lexus","RX",2021);
console.log(car2);
console.log(car3);
console.log(car2.Model);
console.log(car2["Model"]);
