// Queer Developer Network
// Landing Page by Jacob Stordahl / jacobstordahl.net / @stordahl_
// psst - i'm looking for a mentor - hmu!

let queerIdArr = [
  "trans",
  "gay",
  "intersex",
  "bi",
  "grey",
  "non-binary",
  "lesbian",
  "pan",
  "ace",
  "gender-queer",
  "omni",
  "demi"
];

let queerIdElem = document.getElementById('queer');

//Text Loop

let i = 0;
let intervalId = setInterval(()=> {
  queerIdElem.textContent = "< " + queerIdArr[i] + " >";
  if (i === (queerIdArr.length - 1)) {
    i = 0;
    clearInterval(intervalId);
    queerIdElem.textContent = "< queer >";
  } else {
    i++;
  }
}, 2500);
