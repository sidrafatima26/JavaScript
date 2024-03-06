var gs = "I am global scope";

function outerFuncion(){
  var of = "I am outher Function";
  function innerFunction(){
    var innf = "I am inner Function";

    console.log(innf)
    console.log(of)
     console.log(gs)
  }
  innerFunction();
}
outerFuncion()
