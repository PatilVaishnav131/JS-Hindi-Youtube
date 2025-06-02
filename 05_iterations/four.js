//for in loop
// this can be used to iterate the objects
const obj = {
    name : "vaishnav",
    age : 18
}

for(const key in obj){  //stores the keys of the element
    console.log(key + "=>" +obj[key])
}

//this can be used on the arrays to 
const arr = [1,23,,4,5,7,7]
for(const index in arr){
    console.log(`the ${index}th element is ${arr[index]}`)
}

//for in loop cannot be used to iterate the maps