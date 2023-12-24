var life = 100;  //This is my life bar
life = life - 10;
//life = 100 - 10 i.e. 90
life = life - 10;
//now, life = 90 -10 i.e. 80
var name = "adil"; //This is the name displayed in the game STRING  

var checkout = true; //booleans

var box; //undefined

const Life = 100;  //once you declare it it can't be changed nor you can't create other variable of this name

const Name = "adil";
function toUpper(text){
    const upperCase = text.toUpperCase();
    console.log(upperCase);
}
//const toUpper = ()=>{}
//toUpper("hello");

const myAge = 24;
const yourAge = 21;
//console.log(myAge + yourAge)

const urname = "adil";
//console.log(`hello ${urname}`);

const schedule  = ['wake up', 'eat', 'film a video', 'watch thing in netflix'];
//schedule.unshift("at begiining");// adds a new element at the first
//schedule.shift(); //removes the first element
//schedule.push("hey a new thing got added");  //adds a new element at the last 
//schedule.pop(); //remove the last element 
// const index = schedule.indexOf("film a video");  //tells the index number
//console.log(index);


const user  = {
    name: "edwin",
    age: 24,
    married: false,
    purchased: ["phone", "car", "laptop"],
    sayName: function(){
        console.log(this.name);
    }
}

// console.log(user);
//user.sayName();

//...functions that are attcahed to objects are called methods...

//this  //window object


// const namee= ['edward', 'maria', 'john', 'elvish', 'harry', 'potter'];
// for( names of namee){
//     console.log(names);
//     if(names == 'elvish'){
//         console.log(`yes ${names} is in our list`);
//         break;
//     }
// }


// let loading = 0;
// while(loading< 100){
//     console.log('website is still loading');
//     loading++;
// }


const text = document.querySelector('h1');
const changeColor = document.querySelector('.changeColor');

//text.style.color= "red";
//text.style.backgroundColor='yellow';
//text.classList.add('change');

changeColor.addEventListener('click', function(){
    changeColor.classList.toggle('change');
})

const userList  = document.querySelector('.name-list');
console.log(userList);
// for(User of userList){
//     User.addEventListener('click', function(){
//         //console.log(this)
//         this.style.color="red";
//     })
// }

const listInput = document.querySelector('.list-input');
console.log(listInput.value);
const addListBtn = document.querySelector('.addListBtn');
addListBtn.addEventListener('click', function(){
const newLi = document.createElement('li');
const liContent = document.createTextNode(listInput.value);
newLi.appendChild(liContent);
userList.appendChild(newLi);
})

