var i = 0;
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var v = this.innerHTML;
        drum(v);
    });
}
document.addEventListener("keypress", function (event) {
    drum(event.key);
})
function drum(p) {
    switch (p) {
        case "w":
            var n = new Audio("sounds/crash.mp3");
            n.play();
            break;
        case "a":
            var n = new Audio("sounds/kick-bass.mp3");
            n.play();
            break;
        case "s":
            var n = new Audio("sounds/snare.mp3");
            n.play();
            break;
        case "d":
            var n = new Audio("sounds/tom-1.mp3");
            n.play();
            break;
        case "j":
            var n = new Audio("sounds/tom-2.mp3");
            n.play();
            break;
        case "k":
            var n = new Audio("sounds/tom-3.mp3");
            n.play();
            break;
        case "l":
            var n = new Audio("sounds/tom-4.mp3");
            n.play();
            break;
        default: console.log();
            break;
    }
}


