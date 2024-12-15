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
const result = addTwoNum(3,5)
console.log("value :" , result);
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
