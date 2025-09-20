// Obtener viviendas publicadas
//fetch("http://localhost:3001/vender_vivienda?")
fetch("/api/vender_vivienda?")
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error al obtener viviendas: ${response.status} ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((data) => {
    console.log("Viviendas publicadas:", data);
  })
  .catch((error) => {
    console.error("Error al obtener viviendas:", error);
    if (error.message.includes("Unexpected token")) {
      alert(
        "Error en la respuesta del servidor. Asegúrate de que el servidor esté respondiendo con formato JSON."
      );
    } else {
      alert(error.message);
    }
  });

import { creaFooter, creaMenu } from "./menu.js";

// Crear el menú y el footer
creaMenu(document.querySelector("nav"));
creaFooter(document.querySelector("footer"));

// Obtener el formulario y la sección de estado
const formulario = document.getElementById("propertyForm");
const statusElement = document.getElementById("status");

// Función para validar campos vacíos
function validarCampos(campos) {
  let valido = true;
  limpiarErrores(campos);

  campos.forEach((campo) => {
    const input = document.getElementById(campo);
    if (!input || !input.value.trim()) {
      valido = false;
      if (input) {
        input.classList.add("error");
      }
      statusElement.textContent = `Por favor, completa el campo: ${campo}`;
      statusElement.classList.remove("success");
      statusElement.classList.add("error");
    }
  });
  return valido;
}

// Función para limpiar mensajes de error
function limpiarErrores(campos) {
  campos.forEach((campo) => {
    const input = document.getElementById(campo);
    if (input) {
      input.classList.remove("error");
    }
  });
  statusElement.textContent = "";
}

// Manejar el envío del formulario
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const camposRequeridos = [
    "titulo",
    "parrafo",
    "habitaciones",
    "coordenadas",
    "anio",
    "descripcion",
    "ruta",
    "location",
    "tipo",
    "superficie",
    "alt",
  ];

  if (!validarCampos(camposRequeridos)) {
    return;
  }

  const tipoMap = {
    villa: 1,
    piso: 2,
    apartamento: 3,
  };

  const tipo = tipoMap[document.getElementById("tipo").value.trim()] || 0;

  const propiedad = {
    titulo: document.getElementById("titulo").value.trim(),
    parrafo: document.getElementById("parrafo").value.trim(),
    habitaciones: parseInt(document.getElementById("habitaciones").value),
    coordenadas: document.getElementById("coordenadas").value.trim(), // ⚠️ ¿Lo usas?
    anio: parseInt(document.getElementById("anio").value),
    piscina: document.getElementById("piscina").checked ? 1 : 0,
    descripcion: document.getElementById("descripcion").value.trim(),
    ruta: document.getElementById("ruta").value.trim(),
    location: document.getElementById("location").value.trim(),
    tipo: tipo, // Debe ser 1, 2 o 3
    venta: document.getElementById("venta").checked ? 1 : 0,
    alquilar: document.getElementById("alquilar").checked ? 1 : 0,
    superficie: parseFloat(document.getElementById("superficie").value),
    alt: document.getElementById("alt").value.trim(),
  };

  console.log("Datos a enviar:", propiedad);
  fetch("http://localhost:3001/vender_vivienda", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(propiedad),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
          "La respuesta no es JSON. Revisa la ruta del servidor."
        );
      }
      return response.json();
    })
    .then((data) => {
      statusElement.textContent = "Propiedad agregada correctamente.";
      statusElement.classList.remove("error");
      statusElement.classList.add("success");
      formulario.reset();
    })
    .catch((error) => {
      statusElement.textContent = `Error: ${error.message}`;
      statusElement.classList.add("error");
      statusElement.classList.remove("success");
      console.error("Error al enviar la propiedad:", error);
    });
});
