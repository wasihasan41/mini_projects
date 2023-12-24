
const ludo = document.getElementById("ludo")
const col = document.createElement("col");
const row = document.createElement("row")
var number = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]]
let table = ""
for (let row = 0; row < 4 ; row++) {
    table += `<div class="row">`
    for (let col = 0; col < 4; col++) {
        table += `<div class="col" data-number=${number[row][col]}> ${number[row][col]}</div>`
    }
    table += `</div>`
}
ludo.innerHTML = table;

const btn = document.getElementById("button")
let image = document.getElementById("image")
let activeElement = document.getElementsByClassName("col")[0]
activeElement.classList.add("color")
btn.addEventListener("click", function(){
    const randomDice = Math.floor(Math.random() * 6) + 1
    image.innerHTML=`<img src='/assets/javascript/dice${randomDice}.png' style='width:50px; height:50px'/>`;
    if(`dice${randomDice}.png`){
            const allElement = document.querySelectorAll(".col")
            for (let i = 0; i < allElement.length; i++) {
                const removeClass = allElement[i];
                removeClass.classList.remove("color")
            }
    }
    if(`dice${randomDice}.png`=='dice1.png'){
        document.getElementsByClassName("col")[1].classList.add("color")
    }
    if(`dice${randomDice}.png`=='dice2.png'){
        document.getElementsByClassName("col")[2].classList.add("color")
    }
    if(`dice${randomDice}.png`=='dice3.png'){
        document.getElementsByClassName("col")[3].classList.add("color")
    }
    if(`dice${randomDice}.png`=='dice4.png'){
        document.getElementsByClassName("col")[4].classList.add("color")
    }
    if(`dice${randomDice}.png`=='dice5.png'){
        document.getElementsByClassName("col")[5].classList.add("color")
    }
    if(`dice${randomDice}.png`=='dice6.png'){
        document.getElementsByClassName("col")[6].classList.add("color")
    }
})