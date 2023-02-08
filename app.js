document.addEventListener("DOMContentLoaded", () => {
  /*Creert 200 divs in HTML.*/
  for (x = 0; x < 200; x++) {
    let grid = document.createElement("div");
    grid.className = "grid";
    document.getElementById("board")
    .appendChild(grid);
  }
  /*Maakt een Array van de 200 div elementen */
const grid = document.querySelector('.grid')
let vierkanten = Array.from(document.querySelectorAll('.grid div'))
const ScoreDisplay = document.querySelector('#score')
const StartBtn = document.querySelector('#start-button')
const width = 10;

//Tetromino//
const lTetromino = [
  [1, width+1, width*2, 2],
  [width, width+1, width+2, width*2+2],
  [1, width+1, width*2+1, width*2],
  [width, width*2, width*2+1, width*2+2]
]
const zTetromino = [
[0, width,width+1,width*2+1],
[width+1, width+2,width*2,width*2+1],
[0,width,width+1,width*2+1],
[width+1, width+2,width*2,width*2+1]

]
const oTetromino = [
[0,1,width,width+1]

]



});
