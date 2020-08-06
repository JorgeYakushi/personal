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

var activeSlide = 1;
const arrText = [
  "Bonjour!",
  "Hallo!",
  "Hello there!",
  "Ciao!",

  "¡Hola!",
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
  slideOne.innerHTML = arrText[firstIndex];
  slideTwo.innerHTML = arrText[secondIndex];
  slideThree.innerHTML = arrText[thirdIndex];
  if (firstIndex >= arrText.length) {
    firstIndex = 0;
  }
  console.log(activeSlide);
  console.log(firstIndex);
  switch (activeSlide) {
    case 0:
      slideOne.classList.remove("slide__active");
      slideOne.classList.add("slide__hidden--left");
      slideThree.classList.remove("slide__hidden--right");
      slideThree.classList.add("slide__active");
      slideTwo.classList.remove("slide__hidden--left");
      slideTwo.classList.add("slide__hidden--right");
      slideOne.innerHTML = arrText[firstIndex];

      firstIndex++;
      break;
    case 1:
      slideThree.classList.remove("slide__active");
      slideThree.classList.add("slide__hidden--left");
      slideTwo.classList.remove("slide__hidden--right");
      slideTwo.classList.add("slide__active");
      slideOne.classList.remove("slide__hidden--left");
      slideOne.classList.add("slide__hidden--right");
      slideThree.innerHTML = arrText[firstIndex];

      firstIndex++;
      break;
    case 2:
      slideTwo.classList.remove("slide__active");
      slideTwo.classList.add("slide__hidden--left");
      slideOne.classList.remove("slide__hidden--right");
      slideOne.classList.add("slide__active");
      slideThree.classList.remove("slide__hidden--left");
      slideThree.classList.add("slide__hidden--right");
      slideTwo.innerHTML = arrText[firstIndex];

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
time();
time();
setInterval(function () {
  time();
}, 3000);
