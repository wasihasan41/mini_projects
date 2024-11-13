const box = document.getElementsByClassName('box');
let active = document.getElementsByClassName('color')[0];
const randomNumber = document.querySelector('.randomNumber');
const randomNumberButton = document.querySelector('button');

randomNumberButton.addEventListener('click', getRandomNumber);
function getRandomNumber(){
  let random  = Math.floor(Math.random() * 6) + 1
  randomNumber.textContent = random
    for (let i = 0; i < box.length; i++) {
      const elem = box[i];
      
      let activeNum = parseInt(active.dataset.number)
      let dataNum = parseInt(elem.dataset.number) 
      let newNum = (random + activeNum)
      if(newNum == dataNum){
        active.classList.remove('color')
        activeNum  =  newNum
        active = document.querySelector(`[data-number="${activeNum}"]`)
        console.log(active);
        active.classList.add('color');
      }
      if(active.dataset.number == 16){
        randomNumberButton.removeEventListener('click', getRandomNumber);
        setTimeout(()=>{
          alert('won')
        },500)
      } 
    }
}



