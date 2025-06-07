//create a constructor
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