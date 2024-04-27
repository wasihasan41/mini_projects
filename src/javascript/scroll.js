// document.designMode='on'; //can edit live on page
//console.table(objName)  //showing object in table format
function smoothScroll(target, duration){
    var target= document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
}
smoothScroll('.section1', 1000)




const student = {
    age: 72,
    func: function(){
        return this.age;
    }
}
console.log(student.func())

const obj1 = {
    name: "obj1",
    getThis(){
    return this;
}
}
const obj2 = {
    name: "obj2"
}
obj2.getThis = obj1.getThis;
console.log(obj2.getThis)

const sentence ={
    firstWord: "hello",
    lastWord: "world",
    fullWord: function(){
        return this.firstWord + " " + this.lastWord;
    }
}
console.log(sentence.fullWord());

const person1 = {
    firstName: "wasi",
    lastName: "hasan",
}

const person2 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
const x =  person2.fullName.apply(person1);
console.log(x);

// --- reverse ---
// let rem =0 ;
// const num = prompt("enter a number");
// let n = parseInt(num);
// while(n>0){
// rem = n%10;
// console.log(rem);
}

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