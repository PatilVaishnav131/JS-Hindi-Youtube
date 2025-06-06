 //primitive data types 
 // 1. String 2.Number 3.Boolean 4.Null 5. Undefined 6.Symbol 7.BigInt
 
 //Non primitive (Reference)
 //1. Arrays 2.Objects 3. Functions

 let name = "vaishnav"
 let age = 20
 let isLoggedIn = true
 let email;
 let temperature = null
let mobile_no = 966552246236894634667959459454673474787473478414745n;

const id1 = Symbol('123') //note - Symbol must be written in ' ' not " "
const id2 = Symbol('123')

console.log(id1 === id2)
console.log(typeof(age),typeof(isLoggedIn),typeof(email),typeof(temperature),typeof(id1),typeof(id2))


const heroes = ["vaishnav", "patil"]
let obj = {
    name : "vaishnav",
    age : 20
}
const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof heroes, typeof myfunction , typeof obj)
console.log(typeof(mobile_no))


/*************************************************** */
// Stack (Non-primitive) Heap(Primitive / REFERENCES)
let num1 = 66446
let num2 = num1
num2 = 453
console.log(num1);
console.log(num2);
//here num1 and num2 are different because the copy of the variables are stored

const emp1 = {
    name : "Vaishnav",
    email : "vaishnav@gmail"
}

const emp2 = emp1

emp2.email = "ghfgh@gmail"
emp1.email = "wegweg"
console.log(emp2);
console.log(emp1);



