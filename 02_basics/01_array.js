//Array part 1
 const myarr = [0,1,2,3,4,5]
// console.log(myarr)

const arr = new Array(0,1,2,3,4,5)
// console.log(arr[1])

//Array methods 
// console.log(arr.push(1))
// console.log(arr)
// console.log(arr.pop())
// console.log(arr);

const newarr = arr.join()
// console.log(`${newarr} - ${typeof(newarr)}`)

//Slice and Splice 
console.log(`THis is the orignal array - ${arr}`)
const arr1 = arr.slice(0,3) //does not includes 3
console.log("A",arr1);
console.log(`THis is the orignal array after slice - ${arr}`)
const arr2 = arr.splice(4,5) //does includes the 5th
console.log("B",arr2);
console.log(`THis is the orignal array after splice- ${arr}`)


