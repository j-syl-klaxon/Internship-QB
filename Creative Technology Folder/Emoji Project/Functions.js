var currentAmount = 0;
let e_interval = null;

function makeEyeRed(element) {
    clearInterval(e_interval); //clear any timer using this variable
    e_interval = setInterval(function() {
        currentAmount = Math.min(1, currentAmount + 0.1);
        element.style.fill = lerpColor('#FFFFFF', '#FF0000', currentAmount); //changes colour from white to red varying on "+ 0.1"
    }, 100); // changes to a shade every 0.1 seconds. 

    // left_Eye.style.fill = l_toggle ? "#FF0000" : "#FFFFFF";
    // l_toggle = !l_toggle;
};

function redEye_mouseUp(element) {
    clearInterval(e_interval); //clear any timer using this variable
    
    e_interval = setInterval(function() {
        currentAmount = Math.max(0, currentAmount - 0.1); //changes colour from red to white varying on "- 0.1"
        element.style.fill = lerpColor('#FFFFFF', '#FF0000', currentAmount);
    }, 100); // changes to a shade every 0.1 seconds. 


};

//Hex code: #FF|FF|FF => rgb(255,255,255)
// "255" in decimal == "FF" in hex.
//diferent numbers gives different hex codes...
//givng different colours.
//the type of colour increased or decreased...
//adds to the complexity of colours.