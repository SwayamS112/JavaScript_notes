//     ****NUMBER***
const score = 400
console.log(score); //typeof number

const balance = new Number(100)
console.log(balance); // typeof object

console.log(balance.toString()) //100 become string now we can do operation of strings in it
console.log(balance.toFixed(2)); // it will give decimal upto 2 decimal number
const num1 = 23.8634 
const num2 = 123.8909 
console.log(num1.toPrecision(3));// 23.9 give upto 3 number it round of of 3 digits
console.log(num2.toPrecision(3));//124

const num4 = 1000000
console.log(num4.toLocaleString()); // 1,000,000
console.log(num4.toLocaleString('en-IN')); //10,00,000 for indian comas 


//             *****MATHS********
console.log(Math.abs(-4)); // it always convert only the value from - to + not + to -
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.8)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(2,5,8,1)); // 1
console.log(Math.max(2,4,7,9)); // 9
console.log(Math.floor(Math.random() * 10) + 1); // random number

