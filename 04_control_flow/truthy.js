//const email = "vaishnav@gmail.com" already assumed true
const email = "" //empty string assumed to be false 
if(email){
    console.log("user has email");
}
else{
    console.log("user dont has email");
    
}

//falsy values
// false , "" , null , undefined , 0 , -0 ,BigInt 0n ,NaN

//truthy values (surprising)
// "0" , "false " , [] , " " (space) , {} , function(){}

//how to check whether the array is empty or not 
const arr = []
if(arr.length === 0){
    console.log("Array is empty");
    
}

//check whether the object is empty or not 
const emptyObj = {}
if((Object.keys(emptyObj)).length === 0){
    console.log("object is empty")
}

//Nullish Coalescing Operator (??): null undefined 
let val1;
//val1 = 10 ?? 5
val1 = null ?? 5 ?? 10
val1 = undefined ?? 100?? 10
val1 = null ?? undefined
console.log(val1) 

//Ternary Operator 
// condition ? true : false
const price = 80 
price >=80 ? console.log("true") : console.log("false ");

