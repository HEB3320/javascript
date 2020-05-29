var ourDog = {
    "name":"Camper",
    "legs": 4,
    "tails":1,
    "friends": ["everything!"]
};

var myDog ={
    "name is":"Quincy",
    "legs": 3,
    "tails":2,
    "friends": []
};
var bool = myDog.hasOwnProperty("name");
console.log(bool);

ourDog.name = "Happy Camper"
myDog["bark"]="woof!"
delete myDog.tails;

console.log(ourDog.name);
console.log(myDog["name is"]); // arada bosluk oldugu icin koseli parantez kullandik
console.log(myDog);


console.log("=========================================================================");


var myMusic =[

{
"artist": "Billy Joel",
"title": "Piano Man",
"release_year": 1973,
"formats":["CD","8T","LP"],
"golds":true
},

{
    "artist": "Engin",
    "title": "Creal man",
    "release_year": 1965,
    "formats":["youtube"],
    "gold":true
}

]
console.log(myMusic[1].artist);