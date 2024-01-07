function debounce(func, delay) {
    let timerId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);
        timerId = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
}


function delayFuncExec() { 
    console.log("I AM GFG "); 
} 
  
let timerId = setTimeout(delayFuncExec, 1000) 
  
console.log("Timer Id: " + timerId);


