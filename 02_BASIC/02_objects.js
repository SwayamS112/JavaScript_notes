// singleton 
//Object.create
// object literals
/*
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
*/

//const tinderuser = new Object() // other way to define object
const tinderuser = {}
tinderuser.id = "123"
tinderuser.name = "sam"
tinderuser.isloggedIn = false

const regularUser = {
    email : "sood@gmail.com",
    fullname : {
        userFullName :{
            firstname : "swayam",
            lastname : "sood"
        }
    }
}
console.log(regularUser.fullname); //{ userFullName: { firstname: 'swayam', lastname: 'sood' } }
console.log(regularUser.fullname.userFullName);//{ firstname: 'swayam', lastname: 'sood' }
 
const obj = {1: "a" , 2: "b"}
 const obj2 = {3: "c" , 4: "d"}
const obj3 = {...obj,...obj2} // ... spread operator
const obj4 = Object.assign(obj , obj2)
 console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
 
const user2 = [
    {
        id :1,
        email : "1@gmail.com"
    },
    {
        id :2,
        email : "2@gmail.com"
    },
    {
        id :3,
        email : "3@gmail.com"
    },
]
console.log( user2[1].email);

console.log(Object.keys(tinderuser));//[ 'id', 'name', 'isloggedIn' ]
console.log(Object.values(tinderuser));//[ '123', 'sam', false ]
console.log(Object.entries(tinderuser));//[ [ 'id', '123' ], [ 'name', 'sam' ], [ 'isloggedIn', false ] ]

console.log(tinderuser.hasOwnProperty("isloggedIn"));//true
console.log(tinderuser.hasOwnProperty("fullname"));//false

