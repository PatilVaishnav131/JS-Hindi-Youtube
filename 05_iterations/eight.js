//Reduce an array
//usually used to calculate the total amount of the shopping cart

const initalCount = 0
const cartValue = [20,35,145]
const TOtal = cartValue.reduce ( function(accumulator , current_value){   
    console.log(`Accumulator : ${accumulator} Current : ${current_value}`)      
    return accumulator + current_value 

},initalCount)
console.log(TOtal);


//using the arrow function
const newCart = [3436,364,23676]
const newTotal = newCart.reduce( (accumulator,current_value) => accumulator + current_value , 0)
console.log(newTotal);

