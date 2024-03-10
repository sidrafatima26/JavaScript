//Closures are functions bunduled to gether or enclsed along with references to its lexical environment. When an inner function has the scope of an outer function it is a closue
//Write a function that will allow you to do this

var addsix = createBase(6);
addsix(10); //output: 16
addsix(21); //output: 27

function createBase(num1) {
  return function (num2) {
    console.log( num1 + num2);
  }
}

//Use var only and print 0, 1,2 ..
  for(var i=0;i< 3;i++){
    function A(i){ 
      setTimeout( function(){
        console.log(i)
      }, 1000 * i )
    }
    A(i);
  }


//Add and count
function add() {
  let cnt = 0;
  function count() {
    cnt = cnt + 1;
  }
  count();
  console.log(cnt);
  return cnt;
}
add();

//When are closures used?
//Closures are used when we want only a particular funcion to manipulate its properties. A closure can be used to associate a function with a set of "private" variables, which persist over several invocations of the function.
