//for loop 
for (let i=0; i<=10; i++){
    //console.log(i);
    
}
let myArr = ["batman", "superman" , "krish"]
console.log(myArr.length)
for(let i=0; i<myArr.length; i++){
    //console.log(`${i+1}th elemnt : ${myArr[i]}`)
}

//break and continue
for(let i=0; i<5; i++){
    if(i==3){
        //console.log("3 detected ")
        //break; //terminates any further loop and jumps out of the scope 
        continue //jumps out of the scope for the current loop but continues the other iterations
    } 
    //console.log(`Value of i is ${i}`)
}
for(let i=1;i<=5;i++){
    console.log("value of i is " + i)
    if(i==4){
        console.log("i=4 detected breaking the inner loop")
        break;
    }
    for(let j=1;j<=5; j++){
        if(j==4){
            console.log("4 detected breaking the inner loop")
            break;
        }
        console.log("the value of j is " + j);
        
    }
}