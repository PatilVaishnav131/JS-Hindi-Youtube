// setInterval( function(){
//     setTimeout( function(){
//     console.log("2 seconds passed")
// } ,2000)
// },2000)


// const Promise1 = new Promise(function(resolve , reject){
//     setTimeout( function(){
//     //console.log("2 seconds passed")
//     resolve("2 seconds passed \nThe task is finished !")
// } ,2000)
// })
// Promise1.then( () =>{
//     console.log("Promise is finished")
// })

// async function waitAndPrint(){
//     const message = await Promise1
//     await console.log(message)
// }

function delay(ms,message = "Done waiting"){
    return new Promise( (resolve , reject) => {
        setTimeout(() => {
            resolve (`${ms/1000} Seconds Passed ! \n ${message}`)
        }, ms);
    })
}

//using the delay fucntion
// async function waitAndPrint(){
//     const response = await delay(2000);
//     console.log(response,"2 seconds passed")
// }
// waitAndPrint()

//lets see how much time the sequential flow of the tasks take 
async function runSequential(){
   // console.time("Sequential")  //creates a timestamp label

    const result1 = await delay(2000, "Task A finished")
   // console.log(result1)

    const result2 = await delay(2000, "Task B finished")
   // console.log(result2)

    //console.timeEnd("Sequential")  //used to mark the end of the timeStamp
//so we can see the total time taken is 2 + 2 s for the sequential flow

}
runSequential()

//now lets see the power of the async function where the 2 processes can run at a time !
async function runParallel(){
    console.time("Parallel")
    const taskA = delay(2000, "Task A finished")
    const taskB = delay(2000, "Task B finished")
    const results = await Promise.all([taskA , taskB])
    results.forEach( (result) => {
        console.log(result)
    })
    console.timeEnd("Parallel")

}
runParallel()
