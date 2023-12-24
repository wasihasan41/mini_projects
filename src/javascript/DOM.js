var randomNumber1 = Math.floor(Math.random()* 6) + 1
var randomNumber2 = Math.floor(Math.random()* 6) + 1
var randomDice1= "/assets/javascript/dice" +randomNumber1 +".png";
var randomDice2= "/assets/javascript/dice" +randomNumber2 +".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice1)
document.querySelectorAll("img")[1].setAttribute("src", randomDice2)
window.onbeforeunload = document.querySelector("h1").textContent="refresh"
window.onload = randomDice1;
window.onload = randomDice2;
document.querySelectorAll("img")[0].classList.add("height");
document.querySelectorAll("img")[1].classList.add("height");
if (randomDice1 > randomDice2) {
    document.querySelector("h1").textContent="Player 1 wins"
}
if(randomDice2> randomDice1){
    document.querySelector("h1").textContent="Player 2 wins"
}
if(randomDice2 == randomDice1){
    document.querySelector("h1").textContent="Draw"
}