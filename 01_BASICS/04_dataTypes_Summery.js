// # primitive datatypes -> 7 
//:string, number, boolean, null, undefined, symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false
const bigNumber = 34526138n;

// Reference (NON PRIMITIVE)
// Array, Objetcs, Functions
const heros = ["spiderman , ironman , hulk"]
let myObj = {
    name: "swayam",
    age:20,
}

const myFunction = function(){
    console.log("hello");
}
console.log(typeof id); // symbol
console.log(typeof outsideTemp); // object
console.log(typeof heros); // object
