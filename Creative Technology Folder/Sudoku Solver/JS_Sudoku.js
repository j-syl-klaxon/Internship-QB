// r1 = [c1,c2,c3]
// r2 = [c1,c2,c3]
// r3 = [c1,c2,c3]
// s_map = [r1,r2,r3]


// function(){
// //solve

// }


// get contents of row

const row1 = document.querySelector('.row1'); //"1,0,9" ==> ["1","0","9"]
const state = row1.innerHTML
    .split(',') //turns string of numbers into an array of srings
    .map(function(item) {
        return +item; //turns an array of strings into an array of numbers
    });

console.log(state);