const accId = 124;
let accEmail = "soodswayam41@gmail.com"
var accPAss = "1232"
accCity = "Sujanpur" // this is acceptable but not suggested
let accState //will give undefined

// accId = 2 // this will throw error due to const  
// console.log(accId);
accEmail = "soodswayam"
accPAss = "6789"
accCity = "chandigarh"
console.log(accEmail);
console.table([ accId ,accEmail , accPAss , accCity , accState])

/*
Preffer not to use var
because of issue in block scope and functional scope
*/