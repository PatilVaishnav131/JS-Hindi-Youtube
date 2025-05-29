const accountId = 14553
let accountEmail = "vaishnav@gmail.com"
var accountPassword = "vaishnav"
accountCity = "Maharashtra"


// accountId = 2
console.log(accountId);
accountEmail = "gmail.com"
accountPassword = "vaishnav"
accountCity = "Bengaluru"


/*
Prefer not to use var because of issue in block scope and functional scope 
*/
console.log([accountId, accountEmail, accountPassword , accountCity]);
console.log(accountId, accountEmail, accountPassword , accountCity);
console.table([accountId , accountEmail ,accountPassword , accountCity])


