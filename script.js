// Mostrar elementos al hacer scroll
const elements = document.querySelectorAll("#servicios .card, #galeria img, #contacto .btn");

function showOnScroll() {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  showOnScroll();
});

// Efecto pulso en botones
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => btn.classList.add("pulse"));
  btn.addEventListener("mouseleave", () => btn.classList.remove("pulse"));
});
