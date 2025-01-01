//conditions
// <,>,<=, == , != , === , !==
//=== (as check the type (2 === "2")-> false because one is string and one is number )
// || &&

const balance = 24;
if(balance > 200)
console.log("true");
else if(balance == 24)
console.log("25");
else
console.log("Else");
console.log("always");

const userLogged = true
const debited = false 
if(userLogged && debited){
    console.log("Allowed to buy");
}
else
console.log("Not allowed to buy");
/*FALSY VALUE ->
false, 0, -0, BigInt 0n, "", null, undefined, NaN

TRUTY VALUE ->
"0", "false", " ", [], {}, function(){}(thid is empty object)
*/
// TERNAIRY OPERATOR
const price = 56
price >= 67 ? console.log("price is greater than 67") : console.log("price is less then 67");

