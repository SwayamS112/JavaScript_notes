// var c = 30 // this doesnot work good for block scope\
let a = 300
{} //-> also know as scope
if(true){
    let a = 10
    const b = 20
    var c = 40
    console.log("inner a",a);
    
}

console.log("outer",a);
// console.log(b);  // if i log A nd B then this will throw error
console.log(c); // but c will not throw any error coz of var

function one(){
    const username = "Swayam"

    function two(){
        const id = 32
        console.log(username);
        
    }
    //console.log(id); // throw error dur to scope of id is upto inside two 
 two()
}
one()

if(true){
    const username1 = "Swayam sood"
    if(username1 === "Swayam sood"){
        const id1 = 24
        console.log(`my username :${username1} and id is :${id1}`);
    }
  console.log(username1);
  
    // console.log(id1); //throw error due to scope
}
//console.log(username1); //this is in if statement and i am loged it outside the scope 

// **********IMP**********************
console.log(add1(5)); // no error and result 6
function add1(num){
return num+1
}

//add2(4) // error due to hoisting 
const add2= function(num){ //function expression
    return num + 2
}
add2(4) 