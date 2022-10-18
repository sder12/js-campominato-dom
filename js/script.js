const btnPlay = document.getElementById("button-play");
const mainDiv = document.querySelector("main");

btnPlay.addEventListener("click", startgame);

let squareNumbers = 100;
//generate array bombs 16 random numbers without duplicate
const array16 = generateArrayRandomNumbers(16, squareNumbers);
console.log(array16);
// let array16item;
// for (let i = 0; i < array16.length; i++) {
//   array16item = array16[i];
//   console.log(array16item);
// }


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
  for (let i = 1; i <= squareNumbers; i++) {
    const squareDiv = createSquareDiv(i);
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
  if (array16.includes(clickedNumber)) {
    this.classList.add("red");
  } else {
    this.classList.add("blue");
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
