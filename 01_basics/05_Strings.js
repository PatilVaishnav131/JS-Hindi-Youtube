const name = "vaishnav"
const count = 40

//traditional way 
// console.log(name + count + "value");

//Modern way 
console.log(`Hello my name is ${name} and my repo count is ${count}`)
//String Interpolation
const myname = new String ("Vaishnav")  //class is created
console.log(myname[0]);

//Visit console and see all the methods
console.log(myname.length);
console.log(myname.toUpperCase()) //here the orignal string remains the same because we have only made changes in the stack 
console.log(myname);
console.log(name);
console.log(`Orignal string traditional - ${name} \n New class method ${myname}`);

console.log(myname.charAt(1));
console.log(myname.indexOf('a'));

const newString = "   vaishnav  "
console.log(newString);
console.log(newString.trim())

const testStr = "0123321"
const len = testStr.length 
const zero = testStr.charAt(0)
const neg1 = testStr.at(-1) 
console.log(`This is the 0th index : ${zero} \n THis is the string at -1th index ${neg1}`);







