const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");

btnPlay.addEventListener("click", startgame);

//FUNCTION-------------------------------------------
/** STARTGAME
 * Description With the start/click create Grid - Square
 */
function startgame() {
  mainDiv.innerHTML = "";
  //Add grid
  const gridDiv = createGridDiv();
  mainDiv.append(gridDiv);

  // Create and add square
  for (let i = 1; i < 101; i++) {
    const squareDiv = createSquareDiv(i);
    // click add blue
    squareDiv.addEventListener("click", clickedSquare);
    gridDiv.append(squareDiv);
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
function createSquareDiv(numberInside) {
  const divSquare = document.createElement("div");
  divSquare.classList.add("square");
  divSquare.classList.add("square-simple");
  divSquare.innerHTML = numberInside;
  return divSquare;
}

/**FUNZIONE VOID > non ha return: CLICK del singolo NUMERO
 * Quando elemento è cliccato aggiungo la classe del colore a quell'elemento
 * e poi lo visualizzo nella console
 */
function clickedSquare() {
  this.classList.add("blue");
  const clickedNumber = this.textContent;
  console.log(clickedNumber);
}




//FUNCTION RANDOM NUMBER-----------------------
//RANDOM NUMBERS GENERATOR W3school
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ARRAY WITH RANDOM NUMBERS
 * Description La funzione genera una array composta da numeri senza duplicati.
 * La lunghezza dell'array viene decisa nel parametro
 * @param {number} arrayLength n° di numeri nell'array
 * @returns {array}
 */
function generateArrayRandomNumbers(arrayLength) {
  const arrayNumbers = [];
  while (arrayNumbers.length < arrayLength) {
    const randomNumber = getRndInteger(1, arrayLength);
    if (!arrayNumbers.includes(randomNumber)) {
      arrayNumbers.push(randomNumber);
    }
  }
  return arrayNumbers;
}
