// singleton 
//Object.create
// object literals
const mySym = Symbol("key1") // syntax to define symbol

const user1 = {
[mySym] : "key1", // syntex for symbol
"full Name" : "swayam sood",
name : "swayam",
age : 20,
location : "sujanpur",
isLoggedIn : false,
lastLoggedInDays : ["monday","tuesday"]
}

console.log(user1.name); // swayam
console.log(user1["name"]); // swayam
console.log(user1["full Name"]); //swayam sood
console.log(user1[mySym]); //key1
console.log(typeof user1[mySym]); //symbol
user1.age = 21 // change the value using its keys
console.log(user1.age); 
//Object.freeze(user1) // to freeze the object from this line no chnage will chnage the object
// user1.location="baddi"
// console.log(user1.location); // sujanpur (value not changed due to freeze)
// console.log(user1);

user1.greeting = function(){
console.log("hello js");
}

user1.greeting2 = function(){
    console.log(`hello js, ${this.name}`);
}

console.log(user1.greeting());
//hello js
//undefined
// undefned is due to becoz function doesnot return anything
console.log(user1.greeting2());
// hello js, swayam
// undefined


user1.greeting3 = function () {
  return "hello js";
};

user1.greeting4 = function () {
  return `hello js, ${this.name}`;
};

console.log(user1.greeting3());  // Output: hello js
console.log(user1.greeting4()); // Output: hello js, swayam