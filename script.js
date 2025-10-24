// ===============================
// ANIMACIONES SUAVES AL HACER SCROLL
// ===============================

// Detectar todos los elementos que aparecerán al hacer scroll
const scrollElements = document.querySelectorAll(
  "#servicios .card, #galeria img, #contacto .btn"
);

// Función para detectar visibilidad
function elementInView(el, offset = 100) {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
}

// Agrega o quita la clase 'visible' según la posición
function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 150)) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", () => {
  handleScrollAnimation();

  // Fuerza visibilidad de los botones al cargar
  document.querySelectorAll("#contacto .btn").forEach(btn => {
    btn.classList.add("visible");
  });
});

// ===============================
// EFECTO DE PULSO EN BOTONES
// ===============================
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.classList.add("pulse");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("pulse");
  });
});

// ===============================
// LOG DE CLICS EN WHATSAPP Y FACEBOOK
// ===============================
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`Botón presionado: ${btn.textContent.trim()}`);
  });
});

// Al cargar la página, activa las animaciones de entrada
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
