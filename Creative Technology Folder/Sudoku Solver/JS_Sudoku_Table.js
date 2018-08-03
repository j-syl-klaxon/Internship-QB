    // var mytable = "<table border=\"1\" border=\"1\"><tbody><tr>";



    // for (var i = 1; i < 82; i++) {
    //   if (i % 9 == 1 && i != 1) {
    //     mytable += "</tr><tr>";

    //   };
    //   if (i % 3 == 0 && i % 9 != 0){
    //     mytable += "<td class='spacer row" + i + "'>" + i + "</td>";
    //   }
    //   else{
    //     mytable += "<td class=row" + i + ">" + i + "</td>";
    //   };
        
    // }
    
    // mytable += "</tr></tbody></table>";
    
    // document.write(mytable); 
    
// function InnerBox(){
//   var mytable2 = "<table border=\"1\" border=\"1\"><tbody><tr>";
//   for (var i = 1; i < 10; i++){
//     if (i % 3 == 1 && i != 1) {
//       mytable2 += "</tr><tr>";
    
//     };

//     console.log(typeof i);

//     mytable2 += "<td class=innerbox" + i + ">" + i + "</td>";
//   };
//   mytable2 += "</tr></tbody></table>";
//   document.write(mytable2);
// };


// var mytable = "<table border=\"1\" border=\"1\"><tbody><tr>";
// for (var i = 1; i < 10; i++){
//   if (i % 3 == 1 && i != 1) {
//     mytable += "</tr><tr>";
//   };

  
//   mytable += "<td class=row" + i + ">" + InnerBox(); + "</td>";
// };
// mytable += "</tr></tbody></table>";
// document.write(mytable);



// main table wrapper

let mainTable = "<div class='sudokuboard'>";

for (let i = 0; i < 9; i++) {
  mainTable += "<div class='inner'>";
  
  for (let j = 0; j < 9; j++) {
    mainTable += "<div class='boxitem'>";
    if ((i+j)%2 == 0){ //for the algorithm
      mainTable += "<span>" + (Math.floor(Math.random() * 9) + 1) + "</span>"; //to write text
    }
    mainTable += "</div>"; 
  }

  mainTable += "</div>";
}

mainTable += "</div>";

console.log(mainTable);

document.write(mainTable);
