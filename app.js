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
const ScoreDisplay = document.getElementById('#score')
const StartBtn = document.getElementById('#start-button')
const width = 10;






});
