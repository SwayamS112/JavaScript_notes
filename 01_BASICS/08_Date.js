// DATES
let myDate = new Date()
console.log(myDate); // complex date_time 2024-12-13T18:04:39.184Z
console.log(myDate.toString()); // easy readable Fri Dec 13 2024 23:34:39 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Dec 13 2024
console.log(myDate.toLocaleDateString()); // date 12/13/2024
console.log(myDate.toLocaleString()); // date with time 12/13/2024, 11:36:05 PM
console.log(typeof myDate); //object

let myCreatedDate = new Date(2024 ,11 ,13 ,5 ,3) 
console.log(myCreatedDate.toDateString()); // Fri Dec 13 2024 month starts from 0 as index 
console.log(myCreatedDate.toLocaleString()); // 12/13/2024, 5:03:00 AM




