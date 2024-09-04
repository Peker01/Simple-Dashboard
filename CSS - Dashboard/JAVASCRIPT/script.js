const navToggle = document.querySelector(".nav-toggle");
const sidebar = document.querySelector(".sidebar");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
