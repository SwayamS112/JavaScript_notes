const myArrays = [0,1,2,3,4,5]
console.log(myArrays[3]); // 3
//    **** ARRAYS METHODS ******
myArrays.push(6)
myArrays.push(7)
console.log(myArrays);// [0,1,2,3,4,5,6,7]
myArrays.pop() // 0,1,2,3,4,5,6  last element removed
myArrays.unshift(9) // 9,0,1,2,3,4,5,6 first element add
myArrays.shift() // 0,1,2,3,4,5,6 remove first element

console.log(myArrays.includes(3)); // true
console.log(myArrays.includes(9)); // false
console.log(myArrays.indexOf(9)); //all value ehich is not include in array always give -1
console.log(myArrays.indexOf(3)); // 3

const newArr = myArrays.join() // join will add all the elements to the array to string 
console.log(myArrays); //[0,1,2,3,4,5]
console.log(newArr); //0 1 2 3 4 5

console.log(typeof myArrays); // object
console.log(typeof newArr); // string

console.log("Original array",myArrays);//[ 0, 1, 2, 3, 4, 5 ]
const n1 = myArrays.slice(1,3)//slice dont changes the original array 
console.log(n1);//[ 1, 2 ]
console.log("after slice",myArrays);//after slice [ 0, 1, 2, 3, 4, 5 ]

const n2 = myArrays.splice(1,3)//splice manuplates the original array
console.log(n2); //[ 1, 2, 3 ]
console.log("after splice",myArrays);//after splice [ 0, 4, 5 ]

const marvel = ["spiderman","ironman","hulk"]
const dc = ["superman","flash","batman"]

marvel.push(dc)
//this will add whole dc array as a single element for marvel
console.log(marvel);//[ 'spiderman', 'ironman', 'hulk', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel[3]);//[ 'superman', 'flash', 'batman' ]

const merged = marvel.concat(dc)
console.log(merged);//[ 'spiderman', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

const allnewHeros = [...marvel,...dc] // ... spread operator
console.log(allnewHeros);//[ 'spiderman', 'ironman', 'hulk', 'superman', 'flash', 'batman' ]

const arr1 = [1,2,3,[4,5,6],[7,8,9],[10,11,12]]
const realArray = arr1.flat(Infinity) 
console.log(realArray);//[1,2,3,4,5,6,7,8,9,10,11,12]

console.log(Array.isArray("swayam")); // false
console.log(Array.from("swayam"));//[ 's', 'w', 'a', 'y', 'a', 'm' ]
console.log(Array.from({name : "swayam"})); 
//|-> [](empty array) we have to give it argument to make a array from keys or from values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

