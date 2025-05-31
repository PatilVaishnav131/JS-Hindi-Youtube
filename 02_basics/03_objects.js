//Objects literals "

//Symbols 
const str = Symbol()
const JsUser = {
    "name" : "vaishnav", //key : value
    [str] : '767',
    age : 20,
    email : "vaishnavpatil@gmail.com",
    isLoggedIn : false,
    isLoggedIndays : ["sunday","monday"]
}
console.log(JsUser)

//two ways to access the objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["name"]);

JsUser.mobile = 8464986394
console.log(JsUser.mobile);
console.log(JsUser)

//Object.freeze(JsUser) to lock
JsUser.age = 21


