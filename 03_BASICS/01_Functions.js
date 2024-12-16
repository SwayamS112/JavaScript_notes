function sayMyName(){
    console.log("s");
    console.log("w");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("m");
}
// sayMyName();
//                     |-> those are parameters
function addTwoNum (num1 , num2){
    console.log(num1 + num2);
return num1 + num2;
}       
const result = addTwoNum(3,5) // 8
console.log("value :" , result); //value : 8 
// addTwoNum(2,"4") //24
 //          |->those are arguments
// addTwoNum(2,"a") // 2a

function LoginUser(userName){
    if(userName === undefined){ 
        console.log("Please enter Username");
        return
    }
    return `${userName} , just logged in`
}

console.log(LoginUser("Swayam"))//swayam , just logged in
console.log(LoginUser())//undefined , just logged in

function Username2(student = "sam"){ // if no value pass then default sam will be print
    return `${student},just logged in`
}
console.log(Username2());//sam,just logged in
console.log(Username2("Sood sahab")); //Sood sahab,just logged in

function calculateCartPrice(val1,val2,...num1){ //rest operator as per usage also know as spread operator
return num1
}

console.log(calculateCartPrice(200,400,600))//[ 200, 400, 600 ]
console.log(calculateCartPrice(200,400,600,800))//[ 600, 800 ]

const user3 = {
    userNAme : "Swayam",
    price : 234
}

const user4 = {
    fullname : "SWAYAM SOOD",
    age : 25
}

function handleObject(anyObeject){
    console.log(`username is ${anyObeject.fullname} and price is ${anyObeject.price}`);
}
handleObject(user3)//username is undefined and price is 234

handleObject(user4)//username is SWAYAM SOOD and price is undefined

handleObject({
    fullname : "SAM",
    price : 2567
}) //username is SAM and price is 2567

const arr = [32,45,67,89]
function returnSecondValue(getArray){ // this is function to get a second value from an array
    return getArray[1]
}
console.log(returnSecondValue(arr)); // 45
