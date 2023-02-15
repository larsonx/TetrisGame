document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisplay = document.querySelector("#score");
  const startBtn = document.querySelector("#start-button");
  const width = 10;
  let nextRandom = 0
  let timerId

  //Tetromino + Posities//
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2],
  ];

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1],
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
  ];

  const theTetrominoes = [
    lTetromino,
    zTetromino,
    tTetromino,
    oTetromino,
    iTetromino,
  ];

  let currentPosition = 4;
  let currentRotation = 0;

  console.log(theTetrominoes[0][0]);

  //Selecteert een Tetromino en de standaard positie
  let random = Math.floor(Math.random() * theTetrominoes.length);
  let current = theTetrominoes[random][currentRotation];

  function draw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
  //undraw the Tetromino
  function undraw() {
    current.forEach((index) => {
      squares[currentPosition + index].classList.remove("tetromino");
    });
  }

  // dropdown per seconde
  timerId = setInterval(moveDown, 1000);

  //functies adden aan keycodes (e) = event
  function control(e) {
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }
  document.addEventListener("keyup", control);
  //move down function
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  //freeze function
  function freeze() {
    if (
      current.some((index) =>
        squares[currentPosition + index + width].classList.contains("taken")
      )
    ) {
      current.forEach((index) =>
        squares[currentPosition + index].classList.add("taken")
      );
      //start new
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
      displayShape()
    }
  }

  // move left
  function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(
      (index) => (currentPosition + index) % width === 0
    );
    if (!isAtLeftEdge) currentPosition -= 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("taken")
      )
    ) {
      currentPosition += 1;
    }
    draw();
  }
  function moveRight() {
    undraw();
    const isAtRightEdge = current.some(
      (index) => (currentPosition + index) % width === width - 1
    );
    if (!isAtRightEdge) currentPosition += 1;
    if (
      current.some((index) =>
        squares[currentPosition + index].classList.contains("taken")
      )
    ) {
      currentPosition -= 1;
    }
    draw();
  }
  //roteer
  function rotate() {
    undraw();
    currentRotation++;
    if (currentRotation === current.length) {
      //Als de huidige rotatie 4 behaald, ga terug naar 0
      currentRotation = 0;
    }
    current = theTetrominoes[random][currentRotation];
    draw();
  }

  const displaySquares = document.querySelectorAll('.mini-grid div')
  const displayWidth = 4
  const displayIndex = 0


  //the Tetrominos without rotations
  const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //lTetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1], //zTetromino
    [1, displayWidth, displayWidth+1, displayWidth+2], //tTetromino
    [0, 1, displayWidth, displayWidth+1], //oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1] //iTetromino
  ]

  //display the shape in the mini-grid display
  function displayShape() {
    //remove any trace of a tetromino form the entire grid
    displaySquares.forEach(square => {
      square.classList.remove('tetromino')
      
    })
    upNextTetrominoes[nextRandom].forEach( index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
      
    })
  }
startBtn.addEventListener('click', () => {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }else {
    draw()
    timerId = setInterval(moveDown, 1000)
    nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    displayShape()
  }
})
//button functionaliteit





























});