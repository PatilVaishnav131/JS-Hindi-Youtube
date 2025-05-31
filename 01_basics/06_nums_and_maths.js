const num = 100 //Normal method to declare a number 
const bal = new Number(300) //using the objects
// console.log(num);
// console.log(bal);

// console.log(num.toExponential(2))
// console.log(num.toFixed)
// console.log(num.toLocaleString)
// console.log(num.toExponential)
// console.log(num.valueOf())

console.log(Math.random()) //generates a random number from 0 to 1 in decimal 

//What if we just want a single number
console.log(Math.floor((Math.random()) * 10) + 1)  //gives a random number from 1 to 10

//what if we want a random number within a range 
min = 10; max = 100
console.log(Math.floor((Math.random()) * (max - min +1)) + min)



