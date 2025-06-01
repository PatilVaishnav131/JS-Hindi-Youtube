//Singleton Object using constructor
//const tinderUser = new Object()
const tinderUser = {}  //Not a singleton object

tinderUser.id = "234abc"
tinderUser.name = "Dubey"
tinderUser.isLoggedIn = false

//console.log(tinderUser);
//console.log(tinderUser1);
const regularUser = {
    email : "vaishnav@google.com",
    username : {
        userFullName : {
            firstname : "Vaishnav" ,
            lastname : "Patil"
        }
    }

}
//console.log(regularUser.username.userFullName.firstname);

const obj1 = {1: "a" ,2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" ,6:"b"}

//const obj4 = {obj1, obj2, obj3}
//const obj4 = Object.assign({},obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

//array of the objects
const users = [
    {
        name : "vaishnav"
    },
    {
        name : "vaish"
    },
    {
        name : "nav"
    }
]
// console.log(users[0]);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// ***********************PART 3 ***********//
//Destructuring of the objects
const employee = {
    
    Empname : "Baishnav",
    email : "vaishnav@google"
}
const {Empname : name} = employee;
console.log(name);

// {
//     {},
//     {},
//     {}
// } //Json Format




 


