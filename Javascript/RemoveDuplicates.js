//Input: [1, 2, 3, 3, 4, 5, 5]
//Output: [1, 2, 3, 4, 5]

let arr = [6, 1, 4, 1, 5, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5];
// Using SET
let arr2 = new Set(arr);
console.log(arr2);
console.log(arr);

//Using Filter method
let arr3 = arr.filter( (item, index) =>{
  return arr.indexOf(item) === index
} )
console.log(arr3);

//Using forEach Loop
let unique = [];
for (let i=0; i< arr.length; i++){
  
  arr.forEach( item => {
    if(!unique.includes(item)){
      unique.push(item);
    }
  })
}
console.log(unique);
