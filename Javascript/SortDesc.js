//Move all zeros to the end of an array
//Arrange in descending order

let arr = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0];
console.log(
  arr.sort(function (a, b) {
    return b - a;
  }),
);

//Count the maximum occuring character in a string
let s = "BananaBBBBaaannnnnn";
let cnt = 0;
let total = 0;
for (let i = 0; i < s.length; i++) {
  cnt = 0;
  for (let j = i; j < s.length; j++) {
    if (s[i] == s[j]) {
      cnt++;
    }
  }
  if (cnt > total) {
    total = cnt;
  }
}
console.log(total);
