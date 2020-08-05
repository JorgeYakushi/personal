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
