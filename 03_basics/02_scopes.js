// global scope 
let a = 30; //global variable 
if(true){ //block scope the variables declared using let and cosnt are limited to this scope only cannot be accessed outside the block scope but on the other hand this block scope can modify all the global scope variables 

//but the variable declared using var are accessed outside the block scope which leds to the problem
    let a = 10
    var b = 20
    const c = 30
    console.log(`This is the inner a ${a}`);
    
}
//console.log(a);  it says not defined 
console.log(b);
//console.log(c);
console.log(`This is the outer a : ${a}`)


