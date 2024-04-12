let textElement = document.getElementById("text-result");

let button1 = document.getElementById("button-1");
button1.onclick = (event) => numberInput(1);

let button2 = document.getElementById("button-2");
button2.onclick = (event) => numberInput(2);

let button3 = document.getElementById("button-3");
button3.onclick = (event) => numberInput(3);

let button4 = document.getElementById("button-4");
button4.onclick = (event) => numberInput(4);

let button5 = document.getElementById("button-5");
button5.onclick = (event) => numberInput(5);

let buttonPlus = document.getElementById("button-plus");
buttonPlus.onclick = (event) => signInput(1);

let buttonMinus = document.getElementById("button-minus");
buttonMinus.onclick = (event) => signInput(0);

let buttonEquals = document.getElementById("button-equals");
buttonEquals.onclick = (event) => result();

let A = 0;
let B = 0;
let C = 0;

let state = 0; // 0 - A, 1 - B, 2 - C
let sign = 0; // 0 - minus, 1 - plus

function numberInput(number) {
  if (state == 2) {
    reset();
  }

  if (state == 0) {
    A = number;
  } else if (state == 1) {
    B = number;
  }
  updateText();
}

function signInput(signParametr) {
  sign = signParametr;
  state = 1;
  updateText();
}

function result() {
  if (sign == 0) {
    C = A - B;
  } else {
    C = A + B;
  }
  state = 2;
  updateText();
}

function updateText() {
  //text.textContent ;
  // Add A
  let resultText = A;

  if (state == 0) {
    showText(resultText);
    return;
  }

  // Add sign
  if (sign == 0) {
    resultText = resultText + "-";
  } else {
    resultText = resultText + "+";
  }

  if (B == 0) {
    showText(resultText);
    return;
  }

  // Add B
  resultText = resultText + B;

  if (state == 1) {
    showText(resultText);
    return;
  }

  // Add =
  resultText = resultText + "=";

  // Add C
  resultText = resultText + C;

  showText(resultText);
}

function showText(text) {
  textElement.textContent = text;
}

function reset() {
  A = 0;
  B = 0;
  C = 0;
  state = 0;
  sign = 0;
}
