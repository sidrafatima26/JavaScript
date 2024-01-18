//Map
let arr = [10,20,70,30, 3, 7, 9, 11]
let arrmap= arr.map( (item)=>{
  return item*2;
  
} )
console.log(arrmap)

//Filter
let arrfilt = arr.filter( (item) =>{
  return item%2==0;
} )
console.log(arrfilt);

//Reduce
let arrred = arr.reduce( (prev,curr) =>{
  return prev+curr;
} )
console.log(arrred)
