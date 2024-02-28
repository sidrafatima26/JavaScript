//Input: "hello"
//Output: "olleh"

//Using split reverse and join
let str = "hello";
console.log(str.split('').reverse().join(''))

//Using loop
let strrev='';
console.log(str);
console.log(str.length);
console.log(strrev.length);
j=0;
for(let i=str.length-1; i >= 0; i--){
  strrev += str.charAt(i);
  j++;
}
console.log(strrev)
