// document.designMode='on'; //can edit live on page
//console.table(objName)  //showing object in table format
// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   console.log(targetPosition);
// }
// smoothScroll(".section1", 1000);

// const student = {
//   age: 72,
//   func: function () {
//     return this.age;
//   },
// };
// console.log(student.func());

// const obj1 = {
//   name: "obj1",
//   getThis() {
//     return this;
//   },
// };
// const obj2 = {
//   name: "obj2",
// };
// obj2.getThis = obj1.getThis;
// console.log(obj2.getThis);

// const sentence = {
//   firstWord: "hello",
//   lastWord: "world",
//   fullWord: function () {
//     return this.firstWord + " " + this.lastWord;
//   },
// };
// console.log(sentence.fullWord());

// const person1 = {
//   firstName: "wasi",
//   lastName: "hasan",
// };

// const person2 = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const x = person2.fullName.apply(person1);
// console.log(x);

// --- reverse ---
// let rem =0 ;
// const num = prompt("enter a number");
// let n = parseInt(num);
// while(n>0){
// rem = n%10;
// console.log(rem);
//}

// --- factorial ---
// let num = prompt("enter a number");
// let fact = 1;
// for (let i= 1; i <= num; i++) {
//     fact = fact * i;
// }
// console.log(fact);

// --- fibonacci ---
// let num = prompt("enter a number");
// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for(let i = 3; i<=num; i++){
// fibo= a + b;
// a=b;
// b=fibo;
// console.log(fibo);
// }

// --- product ---
// let num = prompt("enter a number");
// for(let i = 1; i <= 10 ; i++){
//     table = num + " * " +  i + " = " + num* i;
//     console.log(table);
// }

// --- add ---
// let num1 = prompt("enter a number");
// let num2 = prompt("enter a number");
// let n1 = parseInt(num1);
// let n2 = parseInt(num2);
// let num = n1 + n2;
// console.log(num)

// --- leap ---
// let num = prompt("enter a number")
// if(num%4==0){
//     console.log("leap");
// }else{
//     console.log("not leap");
// }

// --- evod ---
// let num = prompt("enter a number");
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// --- max ---
// let num1 = prompt("enter 1 number");
// let num2 = prompt("enter 2 number");
// let num3 = prompt("enter 3 number");
// if (num1 > num2) {
//     console.log(num1)
// }
// if(num2 > num3){
//     console.log(num2)
// }
// if(num3 > num1){
//     console.log(num3)
// }

// --- swap ---
// let num1 = prompt("enter 1 number");
// let num2 = prompt("enter 2 number");
// let swap;
// swap = num1;
// num1 = num2;
// num2 = swap;
// console.log(num1, num2);

// --- pattern ---
// let num = prompt("enter a number");
// for(let i = 1; i <= num; i++){
//     for(let j = 1; j <= i; j++){
//         console.log("*");
//     }
//     console.log("");
// }

// let promise =new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("hello in 2 sec");
//         resolve(56);
//     }, 2000)
// });
// promise.then(function(value){
//     console.log(value)
// })

// setTimeout(function () {
//   console.log("3 second completed");
// }, 3000);

// setTimeout(function () {
//   console.log("6 second completed");
// }, 6000);
// try {
//   console.log(second);
// } catch (e) {
//   console.log(e);
// }
// setTimeout(function () {
//   console.log("9 second completed");
// }, 9000);

// try {
//   let num = 40;
//   if (num % 2 == 0) {
//     console.log("workin");
//   }
// } catch (err) {
//   console.log("invalid");
// }

// console.log("message")
// logger(); //it won't go ahead until the function is finished
// console.log(1);

// function logger() {
//   console.log(2);
//   finish();
//   console.log(3);
//   function finish(){
//     console.log("finished")
//   }
// }

// function first(){
//   console.log(1);
// }
// function second(){
//   setTimeout(function(){
//     console.log(2);
//   }, 0)
// }
// function third(){
//   console.log(3);
// }
// first();
// second();
// third();

// const promise = new Promise(function (resolve, reject) {
//   // resolve("we did it")
//   reject("oops server down");
// });
// promise.then(function(Data){
//   console.log(Data)
// })
// promise.catch(function (data) {
//   console.log(data);
// });

// async function getList() {
//   try {
//     const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(data);
//     const JSON = await data.json();
//     console.log(JSON);
//   } catch (err) {
//     console.log("please ensure u have established a internet conncetion");
//   }
// }
// getList();

// //___PROMISES___
// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve(); //we have to call this method for connecting it with .then
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "chai", email: "chai@example.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "chai", password: "123" });
//     } else {
//       reject("spmething went wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then(function (user2) {
//     console.log(user2);
//     return user2.password;
//   })
//   .then(function (password) {
//     console.log(password);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(function(){ //will happen always (default)
//     console.log("promise is either resolved or rejected")
//   })

// ___FreeCodeCamp___

//synchronous

// console.log("I ");

// console.log("eat ");

// console.log("ice cream ");

// console.log("with a ");

// console.log("spoon ");

//Asynchronous

//function abc(a, b){...};   //regular function
//let abc=(a, b)=>{...};    //arrow function

// console.log("I ");

// console.log("eat ");

// setTimeout(() => {
//   console.log("ice cream ");
// }, 4000);

// console.log("with a ");

// console.log("spoon ");

//CAllbacks

//calling  FUNCITON inside another function

// function one(call_2) {
//   call_2();
//   console.log("step 1");
// }
// function two() {
//   console.log("step 2");
// }
// one(two);

let stock = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toping: ["chocolate", "peanut"],
};
//call back hell

// let order = (fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stock.fruits[fruit_name]} was selected`);
//     call_production();
//   }, 2000);
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("prouction has started");

//     setTimeout(() => {
//       console.log("The fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the machine was started");

//           setTimeout(() => {
//             console.log(`ice cream was placed on ${stock.holder[0]}`);

//             setTimeout(() => {
//               console.log(`${stock.toping[0]} was added as toppings`);

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order("0", production);

//___PROMISES___
let is_shop_open = true;

//___PROMISES___

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop is closed"));
//     }
//   });
// };
// order(2000, () => console.log(`${stock.fruits[0]} was selected`))
//   .then(() => {
//     return order(0000, () => console.log("production has started")); //must use return keyword and don't use semi colons before using then keyword for chaining
//   })

//   .then(() => {
//     return order(2000, () => console.log("the fruit was chopped"));
//   })

//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`)
//     );
//   })

//   .then(() => {
//     return order(1000, () => console.log("start the machine"));
//   })

//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stock.holder[0]}`)
//     );
//   })

//   .then(() => {
//     return order(3000, () => console.log(`${stock.toping[0]} was selected`));
//   })

//   .then(() => {
//     return order(2000, () => console.log("ice cream was served"));
//   })

//   .catch(() => {
//     console.log("customer left");
//   })

//   .finally(() => console.log("Day ended , shop is closed"));

// ___PROMISE SYNTAX___
// let order = ()=>{
//   return new Promise ((resolve, reject)=>{
//     if(true){
//       resolve()
//     }
//     else{
//       reject()
//     }
//   })
// }

// order() //
// .then() //      if resolved
// .then() //      "
// .then() //      "
// .catch()  //    if rejected
// .finally()  //  in both

//  ___ASYNC AWAIT SYNTAX___
// async function order (){
//   try{
//     await abc;
//     }
//     catch(error){
//       console.log("abc doesnt exist", error);
//     }
//     finally{
//       console.log("runs code anyways")
//     }
//   }
// order().then(()=>console.log("qwerty")) //u can use finally and catch targetPosition

// let toppings_choice = (()=>{
//  return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve(
//       console.log("which topping would you love?")
//     );
//   }, 3000)
//  })
// })

// async function kitchen(){
//   console.log("a")
//   console.log("b")
//   console.log("c")
//   await toppings_choice()
//   console.log("d")
//   console.log("e")
// }
// kitchen();
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking the order")

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stock.fruits[1]} was selected`);

    await time(0000);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added `);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`ice creaam placed on ${stock.holder[0]}`);

    await time(3000);
    console.log(`${stock.toping[0]} was selected `);

    await time(1000);
    console.log("serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day ended, shop is closed");
  }
}
kitchen();
