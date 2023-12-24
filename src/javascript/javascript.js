//  ___API___
console.log("This is text");
console.warn("This is warning");
console.error("this is error");

// ___js variables___
// variable = container to store data values.
var number1 = 28;
var number2 = 22;
console.log(number1 + number2);

//  ___js data___ 
// numebrs            //numbers show in blue and string show in black in chrome while in console mode
var num1 = 25;
var num2 = 48.60;
// strings
var str1 = 'this is a strign';
var str2 = "this is also a string";
// objects
var marks = {
    ravi: 34,
    ajay: 45,
    wasi: 49
}
console.log(marks);

//  ___booleans___
// var true false
var a = true;
var b = false;
console.log(a, b);
// var und = undefined
var und = undefined;
console.log(und);
// var null
var n = null;
console.log(n);

// ___arrays___
var arr = [1, 2, 3, 4, 5]
console.log(arr)
// if you want to show a specific numeber like 2 then:
console.log(arr[2])

// also can add strings to arrays:
var arr = [1, "wasi", 3, 4 ]
console.log(arr[1])

/* At a very high level, there are two types of data types in javascript
1. primitive data type: undefined, null, number, string, booleans, symbol 
2. reference data type: arrays and objects
*/

// ___operators in javascript___
// Arithimetic operators
var a = 100;
var b = 10;
console.log("a = 100, b = 10");
console.log("The value of 100 + 10 is :", a + b);    //operators = 'a, b' ; operands = '+'
console.log("The value of 100 - 10 is :", a - b);
console.log("The value of 100 / 10 is :", a / b);
console.log("The value of 100 * 10 is :", a * b);

// assignment operators
var c = b;
console.log(c);

var c = b;
c+=2; //c = c + 2
// c-=2;
// c/=2;
// c*=2;
console.log(c);

// comparison operator
var x = 34;       
var y = 56;
console.log(x == y);
console.log(x <= y);
console.log(x >= y);
console.log(x > y);
console.log(x < y);
console.log(x != y);

// logical operators
//logical and
console.log( true && true);      // it will not show true until true && true
console.log( true && false);      
console.log( false && true);     
console.log( false && false);    
//logical or
console.log( true || true);     //it will not show false  until false || false
console.log( true || false);
console.log( false || true);
console.log( 5< 6 || 6<7 || 7<8 || false || true);
//logical not
console.log(!true);             //it will show false to true and true to false
console.log(!false);

// ___function___
function avg(a, b){
    return  (a + b)/2;
}
// void
function avg(a, b){
    console.log ((a + b)/2);
}

avg(10, 20);
c1 = avg(4, 6);
c2 = avg(29, 51);
console.log(c1, c2);

// ___condtionals in javascript___
var age = 34;
if (age > 50 ){
    console.log(" you can not drive");
}
else if(age < 18 ){
    console.log("you can not drive");
}
else{
    console.log("you can drive")
}

//___loops___
//for loop
var arr = [1,2,3,4,5,6,7];
console.log(arr);
for ( i=0 ; i < arr.length; i++) {
    console.log(arr[i]);
    
}
//for each loop
var arr = [1,2,3,4,5,6,7];
arr.forEach(function(elements) {
    console.log(elements);
})
//while loop
var arr = [1,2,3,4,5,6,7];
let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}
//do while loop
var arr = [1,2,3,4,5,6,7];
let p = 0;
do {
    console.log(arr[p]);
    p++;
} while (p < arr.length);

// ___break and continue statement___
//break
let w = 0;
var arr = [1, 2, 3, 4, 5, 6, 7];
for (let w = 0; w < arr.length; w++) {
    if(w==2){
        break;                       //it breaks the loop if the given condition is true
    }
    console.log(arr[w]);
}

//continue
var arr = [1, 2, 3, 4, 5, 6, 7];
for (let r = 0; r < arr.length; r++) {
    if(r==2){
        continue;                       //it cancels the loop of the given condition
    }
    console.log(arr[r]);
}

// ___array method___
let myArr = ["fan", "camera", 34, "toyota", null, true]; 

console.log(myArr.length);                     //it will tell the length of the array

// myArr.pop();                                //it will remove last element from the array
// console.log(myArr);

// myArr.shift();                              //it will remove first element from the array
// console.log(myArr);

// myArr.push("adil");                         //for pushing an element into an array    
// console.log(myArr);

// myArr.unshift("adil");                      //it will add new element at the start of an array and tell its length   
// console.log(myArr);

//myArr.sort();                                //it will make everthing sorted i.e. (aplhabetically) 
//console.log(myArr);

// ___string methods in javascript___
let string = "hey what is the meaning of what";              
console.log(string.length);                      //it will tell the length of string

// console.log(string.indexOf("what"))            //it will tell the position of the letter 

// console.log(string.lastIndexOf("what"));       //it will tell the position of the same last letter

// console.log(string.slice(4, 8));               //it will show string given by the number (4=1st string, 8=last string)

// console.log(string.replace("hey", "listen"))   //it will replace one letter with other (hey=from which, listen=to change)

//___dates in javaascript___
let date = new Date                            //for getting all time info
console.log(date);

console.log(date.getTime())                       //tells time in seconds

console.log(date.getFullYear())                   //tells year

console.log(date.getMinutes())                    //tells minutes

console.log(date.getHours())                      //tells hour

console.log(date.getDate())                       //tells date

console.log(date.getDay())                       //tells day in array form

// ___DOM manipulation___

document.getElementById("click").style.background="yellow";

let elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);

// elemClass[0].style.background="red";

elemClass[0].classList.add("bg-primary");
elemClass[1].classList.add("text-success");
elemClass[0].classList.remove("bg-primary");

console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tm = document.getElementsByTagName("p");
console.log(tm);

createdElement = document.createElement("p");
createdElement.innerText = "its adil";
tm[0].appendChild(createdElement);

createdElement2 = document.createElement("b");
createdElement2.innerText = " sorry wasi here";
tm[0].replaceChild(createdElement2, createdElement);

// ___Selecting using queries___
sel = document.querySelector(".container");
console.log(sel);
sel = document.querySelectorAll(".container");
console.log(sel);

// ___Events in javascript___
function clicked() {
    console.log("The button was clicked");
}
window.onload = function(){
    console.log("The doc was loaded");
}

// click.addEventListener('click', function(){
//     document.querySelectorAll('.container')[0].innerHTML= "<b> you have clicked </b>";
//     console.log("clicked on cantainer");
// })

// click.addEventListener('mouseover', function(){
//     console.log("hover on cantainer");
// })

// click.addEventListener('mouseout', function(){
//     console.log("hover-out of cantainer");
// })

// click.addEventListener('mouseup', function(){
//     console.log("mouse up from cantainer");
// })

// click.addEventListener('mouseout', function(){
//     console.log("hold-on on cantainer");
// })


// ___arrow functions___
function sum(a, b){
    return a+b;
}
const sum = (a, b)=>{
    return a+b;
}

// ___SetTimeout and SetIntervals___
logkro = ()=>{
    console.log("i m wasi")
}
// setTimeout(logkro, 4000);
// setInterval(logkro, 4000);  //use clr for cancelling it

// ___local storage___
localStorage.setItem('namee', 'harry');

// ___Template literals - backticks___
a = 34;
console.log(`this is my ${a}`);