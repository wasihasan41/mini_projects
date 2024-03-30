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