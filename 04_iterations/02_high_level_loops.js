const arr = [1,2,3,4,5,6]
for(const num of arr){
console.log(num);
}

const greatings = "Hello javascript"
for(const great of greatings){
    console.log(great);
}

//maps ->
const map = new Map()
//       |->key  |-> value 
map.set('IN', "India")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("FR", "FRANCE")
map.set('IN', "India") // DOES ADD SECOND TIME SAME 
console.log(map);

for(const [key,value] of map){
    console.log(key, ": ",value);   
}

const coding =["js","ruby","html","c++","c","C#"]

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach((item)=>{
console.log(item);
})