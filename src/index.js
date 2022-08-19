const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const audio = document.getElementById("audio");
const wm = document.getElementById("wm");
const lm = document.getElementById("lm");
const lvllabel = document.getElementById("levellbl");
let btnsClicked = [];
let btnsToClick = [];
let difficulty = 1;
let userTurn = false;
let btnI = 0;
let i = 0;
let n = 0;

btn1.onclick = function () {
  if (userTurn === true) {
    buttonClicked(1, btn1);
    b1c();
  }
};
function b1c() {
  audio.play();
  btn1.style.backgroundColor = "green";
  setTimeout(reverse, 500);
}
btn2.onclick = function () {
  if (userTurn === true) {
    buttonClicked(2, btn2);
    b2c();
  }
};
function b2c() {
  audio.play();
  btn2.style.backgroundColor = "green";
  setTimeout(reverse, 500);
}
btn3.onclick = function () {
  if (userTurn === true) {
    buttonClicked(3);
    b3c();
  }
};
function b3c() {
  audio.play();
  btn3.style.backgroundColor = "green";
  setTimeout(reverse, 500);
}
btn4.onclick = function () {
  if (userTurn === true) {
    buttonClicked(4);
    b4c();
  }
};
function b4c() {
  audio.play();
  btn4.style.backgroundColor = "green";
  setTimeout(reverse, 500);
}
function reverse() {
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "white";
  btn4.style.backgroundColor = "white";
}
function buttonClicked(btn) {
  btnsClicked[btnsClicked.length] = btn;
  console.log(btnsClicked);
  if (btnsToClick.join(",") === btnsClicked.join(",")) {
    wm.style.visibility = "visible";
    setTimeout(startAgain, 1000);
  }
  if (btnsToClick[btnI] !== btnsClicked[btnI]) {
    lm.style.visibility = "visible";
    setTimeout(startAgain, 1500);
  }
  btnI++;
}
function aI() {
  let randomInt = randomIntFromInterval(1, 4);
  if (randomInt === 1) {
    btnsToClick[btnsToClick.length] = 1;
    b1c();
  } else if (randomInt === 2) {
    btnsToClick[btnsToClick.length] = 2;
    b2c();
  } else if (randomInt === 3) {
    btnsToClick[btnsToClick.length] = 3;
    b3c();
  } else if (randomInt === 4) {
    btnsToClick[btnsToClick.length] = 4;
    b4c();
  }
  console.log(btnsToClick);
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function repeditiveAI() {
  let repeats = difficulty;
  if (i >= repeats) {
    userTurn = true;
    return;
  }
  let delay = 1; //Seconds
  setTimeout(aI, delay * 1000);
  setTimeout(repeditiveAI, delay * 1000);
  i++;
}
repeditiveAI();

function startAgain() {
  difficulty++;
  userTurn = false;
  btnI = 0;
  i = 0;
  n = 0;
  btnsClicked = [];
  btnsToClick = [];
  lvllabel.innerText = "Level: " + difficulty;
  lm.style.visibility = "hidden";
  wm.style.visibility = "hidden";
  repeditiveAI();
}
document.addEventListener("keydown", function (k) {
  if (k.keyCode === 82) {
    startAgain();
  }
});
