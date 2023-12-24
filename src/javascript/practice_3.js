const buttons = document.getElementsByClassName("item");

for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];

    button.addEventListener('click', function(event){
        const activeButton = document.getElementsByClassName('active')[0];
        activeButton.classList.remove('active');
    
        event.target.classList.add("active");
    });
    
}
