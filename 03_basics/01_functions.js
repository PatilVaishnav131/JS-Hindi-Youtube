function printName(){
    console.log("vaishnav");
}

//printName //Function REference
//printName(); //Function Execution 

function add(number1 , number2){ //function definition parameters 
    return (number1 + number2)
}
const sum = add(4,undefined) //while calling functions we pass the arguments
console.log(sum);

// ********************************** //
function calculateCartPrice(val1 , val2 , ...num1){
    return num1  //here ... rest operator is used as there can be many items in the cart the 3rd value will be entered in the form of array num1
}
console.log(calculateCartPrice(1,2,34,5634,67))

//how to pass the objects in the functions
const user = {
    username : "vaishnav",
    age : 20
}

function userdetails(anyobject){
    return `THE username is ${anyobject.username} and the age is ${anyobject.age}`
}
console.log(userdetails(user))
console.log(
    userdetails(
        {
            username : "ddhf",
            age : 40
        }
    )
)

//how to pass an array in functions
const arr = [1,2,3,4,4,5,6,7]
function getSecondValue(getArray){
    return getArray[1]
}
console.log(getSecondValue(arr));
console.log(getSecondValue([345,575,35]));





