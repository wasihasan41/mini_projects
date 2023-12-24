addEventListener("keypress", call)
function call(event){
    makeSound(event.key)
}
function makeSound(key) {
        switch (key) {
        case "p":
            var p = new Audio("/assets/miscellaneous/a.mp3");
            p.play();
            break;
        case "i":
            var i = new Audio("/assets/miscellaneous/b.wav");
            i.play();
            break;
        case "a":
            var a = new Audio("/assets/miscellaneous/c.wav");
            a.play();
            break;
        case "n":
            var n = new Audio("/assets/miscellaneous/d.wav");
            n.play();
            break;
        case "o":
            var o = new Audio("/assets/miscellaneous/e.wav");
            o.play();
            break;
        default:
            console.log(key)
    }
}
function keyPress(keys){
    document.querySelector("." + keys).classList.toggle("style");
}