//for each loop
const coding = ["js","c++","ruby","swift"]

coding.forEach( function (index){  //function should be callback function that is it should not have any name
    //console.log(index)

})

//using the arrow function 
coding.forEach((index)=>{
    //console.log(index)

})

//creating a seperate function and passing its just reference not actually calling it 
function printMe(index){
    //console.log(index)
}
//coding.forEach(printMe)  //here we have not written printMe() !!!!!!!!!!!!!


//there are toal of three parameters (item,index,array)
coding.forEach((item, index, array)=>{
    //console.log(index,item,array)
    //console.log(index);
     //console.log(item);
     //console.log(array);
})

//array of the objects
const myCoding = [
    {
        languagename : "java",
        languageFileName : "js"
    },
    {
        languagename : "C++",
        languageFileName : "cpp"
    },
    {
        languagename : "Python",
        languageFileName : "py"
    },
]
myCoding.forEach((item)=>{
    console.log(`File name : ${item.languageFileName} File Type : ${item.languagename}`)
})
    
    
    

