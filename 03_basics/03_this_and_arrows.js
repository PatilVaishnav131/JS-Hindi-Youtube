//Everything about the this operator
const user = {
    name : "Vaishnav",
    price : 99,
    welcome : function(){
         console.log(`${this.name} , Welcome`)  //this refers to the current context that is the current scope variables
         console.log(this)
    }
}
//user.welcome()
user.name = "Sam"
//user.welcome()

//what does this gives context for the global scope of the node environment 
//console.log(this) // returns {} empty set 

//but in the browser it gives windows check that out 

function chai(){
    const username = "vaishnav"
    //console.log(this)
    console.log(this.username) //returns undefined because this only works with the objects
}
//chai() 

// **********ARROWS***************** \\
// function add(num1 , num2){ //Normal way to create a function
//     return num1 + num2
// }
// console.log(add(4,6));

//using arrows 
// const addTHREe = (num1,num2 , num3) => {
//     return num1 + num2 + num3
// }

//now without using the explicit return that is implicit return
const addThree = (num1 , num2 , num3) => (num1 + num2 + num3)
console.log(addThree(3,4,5));

const addObj = (object1 , object2) => ({name : "vaishnav"})
ob1 = {
    name : "vaishnav"
}
ob2 = {
    name : "nav"
}
console.log(addObj(2,3))

//now what does the this operator gives result  in the arrow function
const addTWO = (num1, num2) => {
    console.log(this)  //returns empty set 
    return (num1 + num2) 
    
}
console.log(addTWO(3,5))




