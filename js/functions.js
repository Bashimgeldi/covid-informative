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

function loader() {
  let body = document.querySelector("body");

  body.classList.remove("loading");
}














