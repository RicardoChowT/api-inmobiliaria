// frontend/js/politicas.js
import config from "./config.js";
import { creaMenu, creaFooter } from "./menu.js";

// Crear menú y footer
creaMenu(document.querySelector("nav"));
creaFooter(document.querySelector("footer"));

// Loader y sección de texto
const loader = document.getElementById("loader");
const textSection = document.getElementById("text");

// 🔹 Detectar tipo según el nombre del archivo
const page = window.location.pathname.split("/").pop(); // ej: politica-privacidad.html
const tipo = page.replace("politica-", "").replace(".html", "");
console.log("Cargando política tipo:", tipo);

// Mostrar loader
loader.style.display = "block";

// Fetch dinámico desde backend
fetch(`${config.apiBaseUrl}/politicas/${tipo}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("No se encontró información para esta política.");
    }
    return res.json();
  })
  .then((policyData) => {
    loader.style.display = "none";

    if (!policyData || !policyData.titulo) {
      textSection.innerHTML =
        "<p>No se encontró información para esta política.</p>";
      return;
    }

    // Dividir el contenido en incisos usando el número seguido de punto como separador
    const incisos = policyData.parrafo.split(/(?=\d+\.)/);

    // Limpiar el contenedor
    textSection.innerHTML = `
      <div class="tarjeta">
        <h2>${policyData.titulo}</h2>
      </div>
    `;

    const tarjeta = textSection.querySelector(".tarjeta");

    // Construir cada inciso con estructura CSS
    incisos.forEach((incisoText) => {
      // Separar número, título y contenido
      const match = incisoText.match(/^(\d+)\.\s*(.*?)\s*-\s*(.*)$/);
      let numero = "";
      let titulo = "";
      let contenido = incisoText;

      if (match) {
        numero = match[1];
        titulo = match[2];
        contenido = match[3];
      }

      const div = document.createElement("div");
      div.classList.add("politica-inciso");

      div.innerHTML = `
        <span class="politica-inciso-number">${numero}</span>
        <span class="politica-inciso-title">${titulo}</span>
        <p class="politica-inciso-content">${contenido}</p>
      `;

      tarjeta.appendChild(div);
    });

    // Añadir fecha de actualización
    const small = document.createElement("small");
    small.textContent =
      "Última actualización: " +
      (policyData.ultima_actualizacion || new Date().toLocaleDateString());
    tarjeta.appendChild(small);
  })
  .catch((err) => {
    loader.style.display = "none";
    textSection.innerHTML = `<p>Error al cargar la política: ${err.message}</p>`;
  });
