// ---------- Animaciones on scroll ----------
const scrollElems = document.querySelectorAll("#servicios .card, #galeria img, #contacto .btn");

function isInView(el, offset = 120) {
  const top = el.getBoundingClientRect().top;
  return top <= (window.innerHeight || document.documentElement.clientHeight) - offset;
}

function handleScroll() {
  scrollElems.forEach(el => {
    if (isInView(el, 120)) el.classList.add("visible");
  });
}

// ---------- Pulse hover for touch and mouse ----------
function attachPulse() {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.classList.add("pulse"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("pulse"));
    // On touch devices: quick pulse on touchstart for feedback
    btn.addEventListener("touchstart", () => {
      btn.classList.add("pulse");
      setTimeout(() => btn.classList.remove("pulse"), 700);
    }, {passive:true});
  });
}

// ---------- Loader & initial animations ----------
window.addEventListener("load", () => {
  // Hide loader with fade
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => loader.remove(), 900); // remove from DOM after animation
  }

  // mark body loaded (for small entrance animations)
  document.body.classList.add("loaded");

  // ensure contact buttons visible immediately
  document.querySelectorAll("#contacto .btn").forEach(b => b.classList.add("visible"));

  // initial check for scroll elements
  handleScroll();
  attachPulse();
});

// throttle scroll for performance
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// ---------- Click logging (dev) ----------
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Botón presionado:", btn.textContent.trim());
  });
});
