const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");
const selectLevel = document.getElementById("level");

btnPlay.addEventListener("click", startgame);

let score = [];
let array16 = [];
let squareNumbers;

//FUNCTION-------------------------------------------
/** STARTGAME
 * Description With the start/click create Grid - Square
 */
function startgame() {
  const level = parseInt(selectLevel.value);

  
  let squareRow;
  if(level === 1){
    squareNumbers = 100;
    squareRow = 10;
  } else if (level === 2){
    squareNumbers = 81;
    squareRow = 9;
  } else {
    squareNumbers = 49;
    squareRow = 7;
  } 
  //Array 16 numbers
  array16 = generateArrayRandomNumbers(16, squareNumbers);
  console.log(array16);
  //Clean
  mainDiv.innerHTML = "";
  //Add grid
  const gridDiv = createGridDiv();
  mainDiv.append(gridDiv);

  // Create and add square
  for (let i = 1; i <= squareNumbers; i++) {
    const squareDiv = createSquareDiv(i, squareRow);
    // click add blue
    squareDiv.addEventListener("click", clickedSquare);
    gridDiv.append(squareDiv);
  }
}

/**CLICK SQUARE
 * Quando elemento è cliccato aggiungo la classe del colore a quell'elemento
 * e poi lo visualizzo nella console
 */
function clickedSquare() {
  const clickedNumber = parseInt(this.textContent);
  console.log(clickedNumber);

  let scoreMessage = score.length;

  if (!array16.includes(clickedNumber)) {
    this.classList.add("blue");
    if (!score.includes(clickedNumber)) {
      score.push(clickedNumber);
    }
    if (score.length === squareNumbers - 16) {
      mainDiv.innerHTML += `<h3 class="result"> CONGRATULAZIONI! Hai vinto! </h3>`;
    }
  } else {
    this.classList.add("red");
    let resultMessage = `<h3 class="result"> Hai cliccato su una bomba! Hai perso!</h3>`;
    mainDiv.innerHTML += `${resultMessage} Punteggio: ${scoreMessage}`;
  }
}

// UI FUNCTION -- create elements in html
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
 * Description Create a div with two classes and a number inside
 * @param {number} numberInside
 * @returns {object}
 */
function createSquareDiv(numberInside, numberOfSquaresInRow) {
  const divSquare = document.createElement("div");
  divSquare.classList.add("square");
  // divSquare.classList.add("square-simple");
  divSquare.style.width = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.style.height = `calc(100% / ${numberOfSquaresInRow})`;
  divSquare.innerHTML = numberInside;
  return divSquare;
}

//FUNCTION RANDOM NUMBER-----------------------
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
