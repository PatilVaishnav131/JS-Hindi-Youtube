//Immediately Invoked Function Expression IIFE
/*SUMMARY :

1. IIFE is a function which immediately executes after it's creation . It is wriiten as one parentheses for wrapping the function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. IIFE written with function name is named IIFE and not with name are unnamed/anonymous. 
4.We can use parameter inside first parentheses.
5. To write two or multiple IIFE one should be end with semicolon ;

*/
(function add(num1, num2){
    //named IIFE
    console.log(`DB1`)
})(5,7);                        // ()() 1st ()to write the fucntion 2nd() to pass a parameter

//Creating an IIFE using arrow NOTE : -  for using IIFE use ;
( (num1,num2)=> {
    console.log(`DB2`)
})(4,6);

