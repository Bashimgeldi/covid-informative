var scrollPosition = window.scrollY;
var logoContainer = document.querySelector(".header");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= 30) {
    logoContainer.classList.add("scrolled");
  } else {
    logoContainer.classList.remove("scrolled");
  }
});

const openMenu = document.getElementById("open-menu");
const navLinks = document.getElementById("nav-links");

openMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-open");
});

function loader() {
  let body = document.querySelector("body");

  body.classList.remove("loading");
}














