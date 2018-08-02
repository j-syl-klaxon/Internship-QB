var time = 5; 
var tbutton = document.querySelector(".trafficbutton");   //links the class to a variable in javascript
var red = document.getElementById('redLight');	         //assign variable "red" to the document.getElementById() ....
                                                        //method which changes the div element with id "redLight" to desired code.
var yellow = document.getElementById('yellowLight');    //links "yellow" & "yellowLight" id/div element
var green = document.getElementById('greenLight');	  //links "green" & "greenLight" id/div element
var color = ["#FF0000","#FFB300","#05FF0D","#7A0000","#7A5C00","#008000"]; //  array [red, yellow, green, redoff, yellowoff, greenoff]

var hasBeenClicked = false;
var interval = null;


tbutton.addEventListener("click",startLight); //adds an event (a click) to a variable

// 
// 
// 
// 
// 
// 

function originColor(){
    red.style.background = color[3];     // change "red" css background to the corresponding array value and....
    yellow.style.background = color[4]; // same to "yellow" css background and...
    green.style.background = color[5]; // same to "green" css background and...    
}

function changeColor() {
    if(time == 5) {	                           //"if" time is 5...
        red.style.background = color[0];      // change "red" css background to the corresponding array value and....
        yellow.style.background = color[4];  // same to "yellow" css background and...
        green.style.background = color[5];  // same to "green" css background and...
        time = 1;						   // change "time" to "1" (creates a loop)
    }
    else if(time == 2 || time == 4) {          //else if "time" is 2 or 4,....
        red.style.background = color[3] ;     //change "red"'s css background to the corresponding array value and...
        yellow.style.background = color[1];  //same to "yellow" css background and...
        green.style.background = color[5];  //same to "green" css background.
    }
    else if(time == 3) {                       //else if "time" is 3,....
        red.style.background = color[3] ;     //change "red"'s css background to the corresponding array value and...
        yellow.style.background = color[4];  //same to "yellow" css background and...
        green.style.background = color[2];  //same to "green" css background.
    }   
    time += 1; //increment time by 1.
    
}


var time = 5; //assign the variable "time" to the value "5"
function startLight(){   //the function "startLight()"

if (!hasBeenClicked) {
    //array for the hexadecimal colours with the identifier "color"
    hasBeenClicked = true;
    interval = setInterval(changeColor, 1000); //repeats the argument every 3000 milliseconds (3 seconds)
}
else {
    clearInterval(interval);
    originColor();
    time = 5;
    hasBeenClicked = false;
    return;
}



}; //ends the function