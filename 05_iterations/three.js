//for of loop 
const newArr = [10,20,30,40,50,60,70,80,90,100]
for (const i of newArr) {
    //console.log(i)
    //console.log("the value of the iterator is ",i)   //the value of the itrator is the individual element of that array
}

const str = "Vaishnav Patil" //to iterate a string
for (const element of str) {
    //console.log(element)
    
}

//concept of the maps 
//maps are similar to the objects but they cannot be duplicated like objects and they are printed in the order they have been entered

const map1 = new Map()

map1.set("name", "vaishnav")
map1.set("age", 20)
map1.set("number", 67878)
console.log (map1)
for(const mapper of map1){
    console.log(mapper)
}

//if we try to iterate the objects through the for of loop 
const obj = {
    name : "vaishnav",
    age : 20
}
for (const i of obj){
    console.log(i)    //ERROR : obj is not iterable
}


