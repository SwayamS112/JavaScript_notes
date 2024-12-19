const user = {
    name : "swayam",
    id : 4,
welcomeMessage: function(){
console.log(`${this.name},welcome to the website`);
console.log(this);
}}

user.welcomeMessage();//swayam,welcome to the website
user.name = "VANSHU"
user.welcomeMessage();//VANSHU,welcome to the website
console.log(this); // {} -> empty funtion

// this will print empty object in node envirnment 
// in arrow function it will print undefined
// but in window this will print its global  window variables

function one(){
     let name = "Swayam"
     console.log(this.name);//undefined 
// undefined becoz this key word in regular funtion this refers to global objects and let name is local variable
}
one()

const chai = () =>{
    let name2 ="swayam sood"
    console.log(this.name2); //undefined
}
chai()

const add2 = (n1,n2)=>{
// return n1+n2;
console.log(n1+n2);//5
}
add2(2,3);

const add3 =(n1,n2,n3)=>(n1 + n2 + n3)
console.log(add3(2,3,4)); //9
