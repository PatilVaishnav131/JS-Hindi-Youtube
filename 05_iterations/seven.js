//Mapping an array
//mapping means simply modifying an array and returning it to a new array"
const myNums = [1,2,3,4,5,6,7,8,9,10]
//const modifiedNums  = myNums.map( (num) => num + 10)
//console.log(modifiedNums)


//concept of the chaining
//chaning means applying multiple maps and filter
const newNums = myNums
                .map( (num) => num*10) //the mapped array is passed to the next
                .map( (num) => num+1)
                .filter( (num) => num>=40)
console.log(newNums)