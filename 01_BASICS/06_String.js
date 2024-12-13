const name = "Swayam"
const repoCount = 50 
//concat
console.log(name + " " + repoCount + " Value"); 
//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName = new String("swayam-Sood-com")
console.log(gameName[0]);
console.log(gameName.toUpperCase);
console.log(name.toUpperCase);

const newString = gameName.substring(0,4)
const newString2 = gameName.substring(-8,4)
console.log(newString); //sway
// this will print sway if i send argument even in negative it starts from 0 
console.log(newString2); 

const anotherString = gameName.slice(-8,1)
// this will give from negative means from behind
console.log(anotherString);

const newString3 = "  swayam   "
console.log(newString3);
console.log(newString3.trim());//swayam

const url = "https://swayam.com/sood%30swayam"
console.log(url.replace("%30","-")); //https://swayam.com/sood-swayam
console.log(url.split("/")); //[ 'https:', '', 'swayam.com', 'sood%30swayam' ]
