//Optimising is a standard way to measure how long your code takes to run. The standard way is to use method perfromance.now() which provides a timestamp of the time taken by your code to run. This method is very accurate.

//adding 100 paragraph. In this code we are creating a loop in which a hundred paragraphs are created with the text "This is a para " along with the loop iteration number. Finally each paragraph is appended in the ocumnet body
const t1 = performance.now(); //In JavaScript performance.now() method can be used to check the performance of your code. 
for (let i = 1; i <= 100; i++) // 100 Reflow and 100 Repaint
{
  let newElement = document.createElement('p');
  newElement.textContent = "This is a para " + i;
  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took  " + (t2 - t1) + "ms");

//After Optimising the above code. In this code we are creating a loop in which One Div is created. Inside the div a hundred paragraphs are created with the text "This is a para " along with the loop iteration number. Each paragraph is appended in the Div and the Div itself is appended in the document body
const t3 = performance.now();
let myDiv = document.createElement('div');
for (let i = 1; i < 100; i++) {
  let element = document.createElement('p');
  element.textContent = "This is a para " + i;
  myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This took  " + (t4 - t3) + "ms");
//Whenever you add a new element some mathematical calculations happen in the backend. Reflow is the process of the browser laying out the page. It happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. This is a fairly expensive (slow) process. 
//When the reflow is done the process of creating the new layout on your screen pixel by pixel is called repaint. Repaint happens after reflow as the browser draws the new layout to the screen. Repaint is faster than reflow.
//Best practice is to incorporate fewer Reflow and Repaint in your code.
//Document Fragment is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. All additions to the document fragment have No replow and no repaint is done. Reflow and repaint are done for documnet fragment when you add the document fragment ot the actual Document.
//First add all paragraphs in a document fragment. Then add the document fragment to the Document

let fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  let newElement = document.createElement('p');
  newElement.textContent = "This is a para " + i;
  fragment.appendChild(newElement);
}
document.body.appendChild(fragment); //1 reflow and 1 repaint

//Single Threading Javascript is a single-threaded language, meaning that just one line of code may be run at once because originally, it was only a web browser scripting language created to serve the needs of a single user on a single window of the browser, eliminating the need for multithreading.
//Call Stack: The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. We use call stack for memorizing which function is running right now.
function addPara() {
  let para = document.createElement('p');
  para.textContent = "JS is single threaded";
  document.body.appendChild(para);
}
function appendNewMessage() {
  let para = document.createElement('p');
  para.textContent = "This is appendNewMessage Function";
  document.body.appendChild(para);
}
addPara();
appendNewMessage();
//Observations in the nature of Javascript : 1. Top to bottom approach while executing the code 2. Run to Completion  3. JS does not execute multiple lines/ functios at the same time
//Synchronous - Occuring at the same time. As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.
//Asynchronous - Asynchronous  code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface. Network Calls are Async in nature.
//Event Listener, setTimeOut are asynchronous. All Async code uses Event Loop and gets executed by the help of event loop. All Async codes are handled by the browser. When this async code is ready to be executed it goes to the Event Queue where it waits for the call stack to becomes empty. Once empty the Async code goes into call stack and finally gets executed.
//Event Loop : An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty. The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.
document.addEventListener('click', function() {
  console.log('You are have clicke don the document');
});

//setTimeOut method: This method will run code at a later point of time. There are 2 parameters of this fuction 1. The function that you want to run 2.The amount of time in ms after which the function will run. When the browser detects a setTimeout method it starts the timer. When the timer is finished it moves to the event queue and finally when the call stack is empty it moves to the call stack for execution. 
//The setTimeout() is a method inside the window object, it calls the specified function or evaluates a JavaScript expression provided as a string after a given time period only once. 
//What if the time in setTimeout method is set to 0? It will not run the callback function immidiately. It will still go to the browser as this is an asynchronous code. It will go to event queue as there is 0ms time. Now it will still wait for the call stack to get empty and then get executed. This is very useful because if in a scenario you want to check when the call stack is getting empty you can use this.
setTimeout(
  function() {
    console.log("You are inside setTimeout method");
  }, 4000);   //4000millisecond



