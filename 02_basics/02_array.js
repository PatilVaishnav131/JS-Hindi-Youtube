const marvel_heroes = ["thor" , "ironman","spiderman"]
const dc_heroes = ["superman", "batman" , "flash"]

//push dc into marvel
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
//push directly modifies the existing array
//here two arrays are created 

//now using the concat 
const new_arr = marvel_heroes.concat(dc_heroes)
console.log(new_arr); //here all are seperated

//one more method of spread operator ...
const all_new_heroes  = [...marvel_heroes, ...dc_heroes] 
//think as glass dropped and all the pieces of the glass are broken down into pieces


//when there is a case of nested arrays having depth 'n' we use flat method 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//Methods of array 

//isArray
const str = "vaishnav"
console.log(Array.isArray(str))

//COnvert the object or string into array 
str_array = Array.from(str)
console.log(str_array)

//arraty to 
let var1=  20
let var2=  30
let var3=  40
const new_array = Array.of(var1,var2,var3)
console.log(new_array);






