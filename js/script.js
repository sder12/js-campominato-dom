const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");
const selectLevel = document.getElementById("level");

btnPlay.addEventListener("click", startgame);

let score = [];
let array16 = [];
let squareNumbers;
let squareRow;

//FUNCTION WITH CLICK-------------------------------------
/* START GAME - Play Btn */
function startgame() {
  //Clean the code
  mainDiv.innerHTML = "";
  //Layout grid in base a level
  const level = parseInt(selectLevel.value);
  squareNumbers = decededNumbersInGrid(level);
  squareRow = decededNumbersInRow(level);
  //Array 16 numbers
  array16 = generateArrayRandomNumbers(16, squareNumbers);
  console.log(array16.sort(function(a, b){return a-b}))
  //Add grid
  const gridDiv = createGridDiv();
  mainDiv.append(gridDiv);
  // Create and add square
  for (let i = 1; i <= squareNumbers; i++) {
    let squareDiv = createSquareDiv(i, squareRow);
    // click add blue
    squareDiv.addEventListener("click", clickedSquare);
    gridDiv.append(squareDiv);
  }
}

// CLICKED SQUARE - input user
function clickedSquare() {
  const clickedNumber = parseInt(this.textContent);
  let scoreMessage = score.length;
  let resultMessage;

  //se NON è una bomba!
  if (!array16.includes(clickedNumber)) {
    this.classList.add("blue");
    if (!score.includes(clickedNumber)) {
      score.push(clickedNumber);
    }
    if (score.length === squareNumbers - 16) {
      resultMessage = `<h3 class="result"> CONGRATULAZIONI! Hai vinto! </h3>`
      mainDiv.innerHTML += resultMessage;
    }
  }
  //se è una bomba:
  else {
    this.classList.add("red");
    resultMessage = `<h3 class="result"> Hai cliccato su una bomba! Hai perso!</h3>`;
    mainDiv.innerHTML += `${resultMessage} Punteggio: ${scoreMessage}`;
    //pulire array score
    score = [];
  }
}

// UI FUNCTION -- create elements in html------------
/** GRID
 * Description Create a div with class grid
 * @returns {object}
 */
function createGridDiv() {
  const divGrid = document.createElement("div");
  divGrid.classList.add("grid");
  return divGrid;
}
/** SQUARE
 * Description Create a div SQUARE con lo style inline per le dimensioni
 * @param {number} numberInside che testo inserisco nel div
 * @param {number} numberOfSquaresInRow quanti square voglio per riga
 * @returns {object} il div square
 */
function createSquareDiv(numberInside, numberOfSquaresInRow) {
  const divSquare = document.createElement("div");
  divSquare.classList.add("square");
  divSquare.style.width = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.style.height = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.innerHTML = numberInside;
  return divSquare;
}

//FUNCTION RANDOM NUMBER---------------------------
//RANDOM NUMBERS GENERATOR W3school
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ARRAY WITH RANDOM NUMBERS
 * Description La funzione genera una array composta da numeri senza duplicati.
 * La lunghezza dell'array e il max-range di numeri vengono decisi nel parametro
 * @param {number} arrayLength quanti numeri voglio nell'array
 * @param {number} maxRangeNumber il range va da 1 a quale altro numero?
 * @returns {array}
 */
function generateArrayRandomNumbers(arrayLength, maxRangeNumber) {
  const arrayNumbers = [];
  while (arrayNumbers.length < arrayLength) {
    const randomNumber = getRndInteger(1, maxRangeNumber);
    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
}

//FUNCTION LAYOUT GRID ------------------------------------------

/** DATO IL LIVELLO DECIDO QUANTI QUADRATI REALIZZARE
 * Description funzione che decide quanti quadrati totali voglio
 * @param {number} difficultyLevel il livello selezionato
 * @returns {number} quanti quadrati ci sono nella griglia
 */
function decededNumbersInGrid(difficultyLevel) {
  if (difficultyLevel === 1) {
    squareInGrid = 100;
  } else if (difficultyLevel === 2) {
    squareInGrid = 81;
  } else {
    squareInGrid = 49;
  }
  return squareInGrid;
}

/** DATO IL LIVELLO DECIDO QUANTI QUADRATI PER FILA MI SERVONO
 * Description funzione che decide quanti quadrati voglio per riga
 * @param {number} difficultyLevel il livello selezionato
 * @returns {number} quanti quadrati ci sono per riga
 */
function decededNumbersInRow(difficultyLevel) {
  if (difficultyLevel === 1) {
    squareInRow = 10;
  } else if (difficultyLevel === 2) {
    squareInRow = 9;
  } else {
    squareInRow = 7;
  }
  return squareInRow;
}
