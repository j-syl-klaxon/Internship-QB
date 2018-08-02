console.log("Stuff!"); //outputs text to console.

let l_button = document.querySelector(".leftpupil"); //turns the button into a variable to do stuff with
const left_Eye = document.querySelector('.lefteye');//same...

l_button.addEventListener("mousedown", function() {  //adds an event (a click,mousedown,etc.) to a variable
    makeEyeRed(left_Eye);                           //linking it to a function to do the event on.
});
l_button.addEventListener("mouseup", function(){ //same as the other... 
    redEye_mouseUp(left_Eye)
});


let r_button = document.querySelector(".rightpupil"); //turns the button into a variable to do stuff with
const right_Eye = document.querySelector('.righteye'); //same...

r_button.addEventListener("mousedown", function() {  //adds an event (a click,mousedown,etc.) to a variable
    makeEyeRed(right_Eye);
});
r_button.addEventListener("mouseup", function(){ //same as the other... 
    redEye_mouseUp(right_Eye)
});

// let l_toggle = false;





