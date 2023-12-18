const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let button = document.getElementById("button");
let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");

let lenghtSix = document.getElementById("lenght6");
let lenghtEight = document.getElementById("lenght8");
let lenghtTen = document.getElementById("lenght10");
let lenghtTwelve = document.getElementById("lenght12");
let lenghtFourteen = document.getElementById("lenght14");
let lenghtSixteen = document.getElementById("lenght16");
let lenghtEighteen = document.getElementById("lenght18");
let lenghtTwenty = document.getElementById("lenght20");

let passwordLenght12 = 12;

function getRandomCharacter() {
  let randomPassword = Math.floor(Math.random() * characters.length);
  return characters[randomPassword];
}

function generateRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < passwordLenght12; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function generatePasswordButton() {
  const generatedPasswordOne = generateRandomPassword();
  const generatedPasswordTwo = generateRandomPassword();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate6() {
  let randomPassword = "";
  for (let i = 0; i < 6; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght6() {
  const generatedPasswordOne = generate6();
  const generatedPasswordTwo = generate6();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate8() {
  let randomPassword = "";
  for (let i = 0; i < 8; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght8() {
  const generatedPasswordOne = generate8();
  const generatedPasswordTwo = generate8();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate10() {
  let randomPassword = "";
  for (let i = 0; i < 10; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght10() {
  const generatedPasswordOne = generate10();
  const generatedPasswordTwo = generate10();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate12() {
  let randomPassword = "";
  for (let i = 0; i < 12; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght12() {
  const generatedPasswordOne = generate12();
  const generatedPasswordTwo = generate12();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate14() {
  let randomPassword = "";
  for (let i = 0; i < 14; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght14() {
  const generatedPasswordOne = generate14();
  const generatedPasswordTwo = generate14();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate16() {
  let randomPassword = "";
  for (let i = 0; i < 16; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght16() {
  const generatedPasswordOne = generate16();
  const generatedPasswordTwo = generate16();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate18() {
  let randomPassword = "";
  for (let i = 0; i < 18; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght18() {
  const generatedPasswordOne = generate18();
  const generatedPasswordTwo = generate18();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

function generate20() {
  let randomPassword = "";
  for (let i = 0; i < 20; i++) {
    randomPassword += getRandomCharacter();
  }
  return randomPassword;
}

function lenght20() {
  const generatedPasswordOne = generate20();
  const generatedPasswordTwo = generate20();

  password1.textContent = generatedPasswordOne;
  password2.textContent = generatedPasswordTwo;
}

// COPY

function copyText(htmlElement) {
  if (!htmlElement) {
    return;
  }
  let elementText = htmlElement.innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", elementText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
}
document.querySelector("#copy-text-btn1").onclick = function () {
  copyText(document.querySelector("#password-1"));
};
document.querySelector("#copy-text-btn2").onclick = function () {
  copyText(document.querySelector("#password-2"));
};
