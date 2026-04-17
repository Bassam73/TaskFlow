const menuButton = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if ((window.innerWidth = 768)) {
    navLinks.classList.remove("active");
  }
});
