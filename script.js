// Saludo dinámico según la hora
window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hora = new Date().getHours();
  let saludo = "";

  if (hora < 12) saludo = "☀️ Buenos días, bienvenido a mi portafolio";
  else if (hora < 18) saludo = "🌤️ Buenas tardes, disfruta de mi portafolio";
  else saludo = "🌙 Buenas noches, gracias por visitar mi portafolio";

  header.textContent = saludo;
});

// Efecto de onda en los botones
document.querySelectorAll(".botones a").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    circle.classList.add("ripple");

    const rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// Cambio automático de fondo
const colores = [
  "linear-gradient(to right, #1e3c72, #2a5298)",
  "linear-gradient(to right, #ff512f, #dd2476)",
  "linear-gradient(to right, #00b09b, #96c93d)",
  "linear-gradient(to right, #373b44, #4286f4)"
];

let index = 0;
setInterval(() => {
  document.body.style.background = colores[index];
  index = (index + 1) % colores.length;
}, 8000);
