//"Alphabetical sort" is the process of sorting elements based on their Unicode character code order, which is essentially sorting them as strings. In JavaScript, when you use the sort() method without providing a comparison function, it sorts elements alphabetically by default.
//This outputs all the numbers with 0 as first digit then with 1s then 2s and so on
let arr2 = [9,8,7,6,5,4,3,2,1,11,31,21,0, 19, 91,81,71]
console.log(arr2.sort())

//a and b are two elements being compared at a time during the sorting process.
//(b - a) calculates the difference between b and a.
//If the result is negative, it means b comes before a, so a should be placed before b in the sorted array.
//If the result is positive, it means a comes before b, so b should be placed before a in the sorted array.
//If the result is zero, the order remains unchanged.
console.log(arr2.sort((a,b)=>(b-a)))



let arr = [1, 100000, 21, 30, 4, -1, -3, -33, 33, 78, 90]
console.log(arr.sort())
//This is ascending order
console.log(arr.sort((a,b)=>(a-b)))
