// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.innerHTML = navbar.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Hero slider (auto change every 5s)
let slides = document.querySelectorAll(".slide");
let index = 0;
function showSlide() {
  slides.forEach((s, i) => s.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}
setInterval(showSlide, 4000);

// Modals (About Page)
const modalBtns = document.querySelectorAll("button[data-modal]");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-btn");

modalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.modal).style.display = "flex";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});