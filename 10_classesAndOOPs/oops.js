//create a constructor
//How “new” keyword works:-
/*
1. "new" keyword creates a new empty object or we can say instance.
2. constructor function is called that will have all the arguments
3. "this" keyword is injected in a new instance with all the arguments
4. We will receive the new object instance with all the arguments

*/
function User(username , loginCount ="1" , isLoggedIn = true){
    this.username = username
    this.username = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username} !!`)
    }
}

const user1 = new User("Vaishnav ",12,true)
console.log(user1.greeting())

console.log(user1)

const user2 = new User("Patil")
console.log(user2.greeting())

console.log(user2)