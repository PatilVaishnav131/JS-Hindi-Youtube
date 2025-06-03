// const coding = ["js","c++","ruby","swift"]
// //drawback in the for each loop it does not return any value
// const values = coding.forEach( (item) =>{
//     console.log(item);
    
// })
// console.log(values); //undefined

//therefore we use filter
const myNums = [0,1,2,3,4,5,6,7,8,9,10]

//const nums = myNums.filter( (numbers)=> numbers>4)
//returns an array satisfying the condition
//console.log(nums)

const nums = myNums.filter( (number)=>{
    return (number<4)
})
console.log(nums)
//how to copy using the for each loop
const greater4 = []
myNums.forEach( (num) =>{
    if(num>4){
        greater4.push(num)
    }
})
console.log(greater4);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //using the filter on the array of the objects
  let userBooks = books.filter( (book) => book.genre === "History" && book.publish >1990)
  console.log(userBooks)
