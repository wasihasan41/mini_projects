function smoothScroll(target, duration){
    var target= document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition);
}
smoothScroll('.section1', 1000)


document.designMode='on';
//console.table(objName)  //showing object in table format