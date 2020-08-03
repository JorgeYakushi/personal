const navButton = document.querySelector(".hamburger");
navButton.addEventListener("click", () => {
  navButton.querySelector("span").classList.toggle("is-active");
});
