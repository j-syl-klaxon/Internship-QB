console.log("Stuff!"); //outputs text to console.

const left_Eye = document.querySelector('.lefteye');

let l_button = document.querySelector(".leftpupil");
l_button.addEventListener("mousedown",makeEyeRed); //adds an event (a click,mousedown,etc.) to a variable
l_toggle = false;

function makeEyeRed() {
    setInterval(function() {
        left_Eye.style.fill = l_toggle ? "#FF0000" : "#FFFFFF";
        l_toggle = !l_toggle;
    }, 1000);
};
