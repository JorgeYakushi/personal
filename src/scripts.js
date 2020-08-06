const navButton = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list__container");
navButton.addEventListener("click", () => {
  toggleMenu();
});

const toggleMenu = () => {
  navButton.querySelector("span").classList.toggle("is-active");
  navList.classList.toggle("nav__list--passive");
  navList.classList.toggle("nav__list--active");
};

var firstIndex = 0;
var secondIndex = 1;
var thirdIndex = 2;

var activeSlide = 0;
const arrText = [
  "Hello there!",
  "¡Hola!",
  "Bonjour!",
  "Hallo!",
  "Ciao!",
  "Olá!",
  "Привет!",
  "こんにちは！",
  "你好!",
  "안녕하십니까!",
  "Γειά σου!",
];
const slideOne = document.getElementsByClassName("intro__big")[0];
const slideTwo = document.getElementsByClassName("intro__big")[1];
const slideThree = document.getElementsByClassName("intro__big")[2];

const time = () => {
  if (firstIndex >= arrText.length) {
    firstIndex = 0;
  }
  switch (activeSlide) {
    case 0:
      slideOne.classList.remove("slide__active");
      slideOne.classList.add("slide__hidden--left");
      slideThree.classList.remove("slide__hidden--right");
      slideThree.classList.add("slide__active");
      slideTwo.classList.remove("slide__hidden--left");
      slideTwo.classList.add("slide__hidden--right");
      slideThree.innerHTML = arrText[firstIndex];
      firstIndex++;
      break;
    case 1:
      slideThree.classList.remove("slide__active");
      slideThree.classList.add("slide__hidden--left");
      slideTwo.classList.remove("slide__hidden--right");
      slideTwo.classList.add("slide__active");
      slideOne.classList.remove("slide__hidden--left");
      slideOne.classList.add("slide__hidden--right");
      slideTwo.innerHTML = arrText[firstIndex];
      firstIndex++;
      break;
    case 2:
      slideTwo.classList.remove("slide__active");
      slideTwo.classList.add("slide__hidden--left");
      slideOne.classList.remove("slide__hidden--right");
      slideOne.classList.add("slide__active");
      slideThree.classList.remove("slide__hidden--left");
      slideThree.classList.add("slide__hidden--right");
      slideOne.innerHTML = arrText[firstIndex];
      firstIndex++;
      break;
  }

  if (activeSlide === 2) {
    activeSlide = 0;
  } else {
    activeSlide++;
  }
};
time();

setInterval(function () {
  time();
}, 2000);

console.log("_________________________________");
console.log("|:::::::::::::;;::::::::::::::::::|");
console.log("|:::::::::::'~||~~~``:::::::::::::|");
console.log("|::::::::'   .':     o`:::::::::::|");
console.log("|:::::::' oo | |o  o    ::::::::::|");
console.log("|::::::: 8  .'.'    8 o  :::::::::|");
console.log("|::::::: 8  | |     8    :::::::::|");
console.log("|::::::: _._| |_,...8    :::::::::|");
console.log("|::::::'~--.   .--. `.   `::::::::|");
console.log("|:::::'     =8     ~  \\ o ::::::::|");
console.log("|::::'       8._ 88.   \\ o::::::::|");
console.log("|:::'   __. ,.ooo~~.    \\ o`::::::|");
console.log("|:::   . -. 88`78o/:     \\  `:::::|");
console.log("|::'     /. o o \\ ::      \\88`::::|   Fight for the Empire!");
console.log("|:;     o|| 8 8 |d.        `8 `:::|");
console.log("|:.       - ^ ^ -'           `-`::|");
console.log("|::.                          .:::|");
console.log("|:::::.....           ::'     ``::|");
console.log("|::::::::-'`-        88          `|");
console.log("|:::::-'.          -       ::     |");
console.log("|:-~. . .                   :     |");
console.log("| .. .   ..:   o:8      88o       |");
console.log("|. .     :::   8:P     d888. . .  |");
console.log("|.   .   :88   88      888'  . .  |");
console.log("|   o8  d88P . 88   ' d88P   ..   |");
console.log("|  88P  888   d8P   ' 888         |");
console.log("|   8  d88P.'d:8  .- dP~ o8       |");
console.log("|      888   888    d~ o888    LS |");
console.log("|_________________________________|");
