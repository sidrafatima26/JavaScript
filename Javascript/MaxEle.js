//Input: [3, 9, 1, 7, 4]
//Output: 9

//Using Math.max function
let arr = [3, 9, 1, 7, 4];
console.log(Math.max(...arr));

//For Loop
let max=0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);
