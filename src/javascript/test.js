const box = document.getElementsByClassName('box');
let active = document.getElementsByClassName('color')[0];
const randomNumber = document.querySelector('.randomNumber');
const randomNumberButton = document.querySelector('button');



randomNumberButton.addEventListener('click', getRandomNumber);

function getRandomNumber(){
  let random  = Math.floor(Math.random() * 6) + 1;
  let randomImage = `<img src="/assets/javascript/dice${random}.png" style="height:50px; width:50px;">`;
  randomNumber.innerHTML = randomImage;
    for (let i = 0; i < box.length; i++) {
      let elem = box[i];
      // console.log(elem , i)
      let activeNum = parseInt(active.dataset.number);
      let dataNum = parseInt(elem.dataset.number); 
      let newNum = (random + activeNum);
      
      
      if(newNum == dataNum){
        active.classList.remove('color');
        activeNum  =  newNum;
        active = document.querySelector(`[data-number="${activeNum}"]`);
        active.classList.add('color');
        if(active.textContent.includes('🐍')){
          setTimeout(()=>{
            active.classList.remove('color');
            active = box[i+4];
            alert(`Noo you got snake ! you will be now at ${active.dataset.number} position`);
            active.classList.add('color');
          },500)
        }
        if(active.textContent.includes('🦅')){
          setTimeout(()=>{
            active.classList.remove('color');
            active = box[i-4]
            alert(`Yay you got eagle ! you will be now at ${active.dataset.number} position`);
            
            active.classList.add('color');
          },500)
        }
      

      }
      if(active.dataset.number == 36){
        randomNumberButton.removeEventListener('click', getRandomNumber);
        setTimeout(()=>{
          alert('won')
        },500)
      } 
    }
    
    
}





