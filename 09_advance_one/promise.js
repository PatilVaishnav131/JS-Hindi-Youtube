//the XHR (xml http request) is not used nowadays
//instead we have the concept of the promises 
const promise1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        //console.log("Async Task 1")
        resolve()  //if we dont use the resolve function the function will not executed
    },500)
})  //lpromise is created
promise1.then(function(){
    //console.log("Async TAsk 1 is resolved")
}) //this was storing the promise inside the variable 

//doing this without storing inside the variable
new Promise(function(resolve, reject){
    setTimeout(function(){
       // console.log("Async task 2")
        resolve()
    },500)
}).then(function(){
   // console.log("Async task 2 is resolved")
})

//now passing the data through the resolve function
const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        //console.log("Async Task 3")
        resolve({username : "Vaishnav" ,email : "vaishnav@google.com"})
    },500)
})
promise3.then(function(user){  //the data passed in the resolve function is accessed using the then function parameter
    console.log(user)
})

//now lets talk when the promise is rejected
const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = false
        if(!error){
            console.log("Async Task 4 \n Task resolved no errors")
            resolve({username : "vishnu" , email : "vaihna@gnmail.com"})
        }
        else{
            reject("ERROR : Something Went Wrong !")
        }
    },500)
})
promise4.then((user)=>{
    console.log(user)
    return user.username    //chaning of then this returns the value to the next then fucntion not in the variable in which it is stored
}).then( (username) =>{
    console.log(`The username is ${username}`)
}).catch( (error) => {
    console.log(error)  //if there is a resolve the promise is rejected so we need to handle the error using the catch function !!
    return '5'
}).finally( (number)=> {  //this is like the default statement it is any how going to be executed
    console.log(`The Promise is either resolved or rejected ` )
})

//creating a new Promise 5 and and then using the async and await 
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        const error = false
        if(!error){
            console.log("Async task 5 there are no errors")
            resolve({name : "java" ,email:"js@gjaj"
            })
        }
        else{
            reject("ERROr in the Promise 5")
        }
    },500)
})

//now accessing the promise using the async and await keywords
async function consumedPromise5() {                 //NOTE: here we are not using the callback function therefore we need to write the name 
    //const response = await promise5     //NOTE : promise5 is not a method so we dont write()
    //console.log(resposne)  //throws error because there is a drawback of not using the catch() like the .then()
    //therefore we can use try catch

    try{
        const response  = await promise5
        console.log(response)
    }
    catch(error){
        console.log(error)

    }
    
}
consumedPromise5()

//now lets actually fetch the data using the api 
// async function getGitdta(){
//     try{
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data =  await response.json() //here we need to write the await keyword because it takes time to convert into json   //it is used to convert the the response into the json format  
        
//         console.log(typeof(data))
//         console.log(data)

//     }
//     catch(error){
//         console.log("E:",error)
//     }
// }
// getGitdta()

//now doing the same thing using the then() and catch()
fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( ()=> {
    console.log("there is an error")
})

//NOTE : the priority of the fetch is more than the setTimeout () fucntion 
// Task Queue for this and MicroTAskQueue / Priority Queue for the fetch
//fetch is the successor of the XHR making easier to understand the syntax
