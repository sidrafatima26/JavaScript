//Closures are functions bunduled to gether or enclsed along with references to its lexical environment. When an inner function has the scope of an outer function it is a closue

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
