//One drawback of writing JS code in the console inside inspect element of a webpage is that on load/ repload/ refresh all the code gets executed.A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute
//EventTarget is a top level interface and has no parent. It has 3 methods. Node inherits from EventTarget. Node= HTML Characters -> tags -> tokens -> Nodes -> DOM. EventTarget is an interface implemented by objects that can receive events and may have listeners for them. Event hone ke baad jo action hoga vo eventlistener define karga.Tere are three methods in EventTarget 1.addEventListener()2.removeEventListener()3.dispatchEvent() class or interfaces = Blueprints, Objects= Reality
//Adding an EventListener() on an EventTarget(): 1.Listen to an Event 2.Respond to Event 3.Hook to Event. Window is a global object and EventTarget is an interface.
//Syntax:- <EventTarget>.addEventListener(<Event to Listen for>,<Function to run when Event Happens>). Pehle suno aur fir act karo. you will need 3 things 1.EventTarget-IOn which component of the HTML docment does the user want to apply EventTarget to. It can be the whole documnet, a div, a p, a q, a span, an article, a video etc. 2.EventType:- Eg-Click, Scroll, Double Click 3.Function- Define what to do when an event happens
// document.addEventListener('click', function(){ 
//     console.log("I clicked on document");
//  });
// let content = document.querySelector('h1');
// console.log("content")
// content.addEventListener('click', function(){ 
//     content.style.background='red';
// });

// let subheading = document.querySelectorAll('h2');
// console.log(subheading);
// subheading.addEventListener('click', function(){subheading.style.background='green';});
// console.log(monitorEvents(document));
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
//   }
//removeEventListener method requires you to pass the same exact listener function to it as the one passed in addEventListener. Loose equality ==, Strict equality ===. In strict equality the value and type must be same but in loose equality only value is same. Type Coersion JS will try to convert items compared into same type. === prevents type coersion and == allows it. Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values.
// 
function print(){
    console.log("I clicked on the heading of this WebPage");
}
const heading = document.querySelector('h1');
heading.addEventListener('click', print);
//heading.removeEventListener('click', print); //There are  3 thing must for removeEventListener to work:- 1. Same Target 2. Same Type 3. Same Function
//Phases of an Event 1. Capturing Phase - Look for an elemnt in the HTML Document like finding a div or p etc 2. Add Target Phase - Once you have reached the element you were looking for add your target 3. Bubbling - Go Back to where you came from ie starting of the HTML Document. useCapture in which particular phase doy ou want to capture the phase (Capturing phase or bubbling phase).By default it is in Bubbling Phase. addEventListener(type, listener, useCapture). If you want to use it in the capturing phase you have to define a third parameter in boolean. True = in capturing phase.
//The Event Object. When an event occurs, adddEventListener's function gets an event object in which there is info about the event

const content = document.querySelector('#wrapper');
content.addEventListener('click', function(event){
    console.log(event);
    console.log("The Event Object is When an event occurs, adddEventListener's function gets an event object in which there is info about the event")
});

//The Defalut Action. eg: Anchor tag opens a link. if you want you can prevent this action called preventDefault()
let links = document.querySelectorAll('a');
//links
let thirdlink = links[2];
//thirdlink
thirdlink.addEventListener('click', function(event){
     event.preventDefault(); 
     console.log("We are implementing preventDefault method. The thirdlink will not redirect to the googl homepage because we have restricted its action. ");
    });

// let myDiv = document.createElement('div'); //Creating a div element
// for(let i=1; i<=100; i++) //loop to create a new paragraph element. Print This is a paragraph with the loop iteration number. Adding an eventListener to each para that prints I have clicked on paragraph wheneer this event occurs
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is a Paragraph' + i;
//     newElement.addEventListener('click', function(event){
//         console.log('I ahve clicked on paragraph');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
//Below is an optimised version of the above code as we are attaching the event listener to div and not p. We have lost the individuality of p.
let myDiv = document.createElement('div'); //Creating a div element
 
function paraStatus(event){ //Creating only one function that each para refers to
    console.log("I have clicked on para." + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus); //attaching it to div rather than paragraph
for(let i=1; i<=5; i++) //loop to create a new paragraph element. Print This is a paragraph with the loop iteration number. Adding an eventListener to each para that prints I have clicked on paragraph wheneer this event occurs
{
    let newElement = document.createElement('p');
    newElement.textContent = 'This is  Paragraph Number - ' + i;
    //newElement.addEventListener('click', paraStatus);
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

//The target property returns the element where the event occured.The target property is read-only.The target property returns the element on which the event occurred, opposed to the currentTarget property, which returns the element whose event listener triggered the event.
//  let ele = document.querySelector('#container');
//  ele.addEventListener('click', function(event){
  //  if(event.target.nodenodeName === 'span'){
//     console.log("You have clicked on span tag " + event.target.textContent);}
//  });



