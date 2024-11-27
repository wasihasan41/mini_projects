let rates = document.querySelectorAll('.rate');
rates.forEach((rateText)=>{      
  const addCart = document.querySelectorAll(".add-cart");
  let calcBox = document.querySelector('.calc');

  addCart.forEach((button)=>{
    let counterNum = 1; 
    button.addEventListener("click", ()=>{
      firstCart(button)
    });

    function firstCart(button){
      const container = document.createElement('div')
      container.id = 'container';
      const minusBtn = document.createElement('button')
      minusBtn.className='minus';
      minusBtn.textContent= '-';
      const counter = document.createElement('div')
      counter.className='counter'
      counter.textContent= counterNum;
      const plusBtn = document.createElement('button') 
      plusBtn.className='plus';
      plusBtn.textContent= '+';
      button.textContent=''
      button.appendChild(container);
      container.appendChild(minusBtn);
      container.appendChild(counter);
      container.appendChild(plusBtn);
      button.classList.remove('add-cart')
      button.classList.add('reset')

      function rateCalc(rateText){
        const rate = Number(rateText.textContent)
        console.log("rate: " + rate, " countNum: " +counterNum)
        calcBox.textContent = rate * counterNum
        }

      plusBtn.addEventListener('click', ()=>{
        counterNum++;
        rateCalc(rateText)
      })
          
      minusBtn.addEventListener('click', ()=>{
        counterNum--;
        if(counterNum==0){
          const addCartBtn = document.createElement('button');
          button.replaceWith(addCartBtn)
          addCartBtn.textContent='Add to Cart';
          addCartBtn.className='add-cart';
          addCartBtn.addEventListener('click',()=> {
            firstCart(addCartBtn)
          });
          counterNum=1;
        };
      })  
    }
  })
})




  
  
  
  //   for (let i=0; i<addCart.length; i++) {
  //   const cartBtn = addCart[i];
  //   let counterNum=0;
  //   cartBtn.addEventListener("click", ()=>{
  //     cartBtn.innerHTML=`
  //   <div class="counters">
  //     <button class="minus"> - </button>
  //     <div class="counter">${counterNum}</div>
  //     <button class="plus"> + </button>
  //   </div>
  //   `
  //   const minus = document.querySelector('.minus');
  //   const plus = document.querySelector('.plus');
  //   cartBtn.classList.remove('add-cart')
  //   cartBtn.classList.add('reset')
  //   plus.addEventListener('click', incNum);
  //   function incNum(){
  //     counterNum++;
  //   }
  //   minus.addEventListener('click', decNum)
  //   function decNum(){
  //     counterNum--;
  //     if(counterNum<=0){
        
  //     cartBtn.remove()  
        
  //     }
  //   }
  //   })
    
    
  // }