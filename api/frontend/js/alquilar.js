import { creaFooter, creaMenu } from "./menu.js";

creaMenu(document.querySelector('nav'));
creaFooter(document.querySelector('footer'));

const formulario = document.getElementById('searchForm');
const mainElement = document.querySelector('main');
let imagesSection = document.querySelector('#images');

if (!imagesSection) {
    imagesSection = document.createElement('section');
    imagesSection.id = 'images';
    mainElement.appendChild(imagesSection);
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario
    imagesSection.innerHTML = ''; // Limpia solo la sección de imágenes
  
    const estatus = document.querySelector('#status');
    const locale = document.querySelector("#location").value;
    const tipo = document.querySelector("#tipo").value;
  
    fetch(`http://localhost:3001/alquilar/${locale}/${tipo}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error de red: ${response.statusText}`);
        }
        return response.json();
      })
      .then(procesada => {
        console.log(procesada)
        estatus.classList.add('visible');
        if (procesada.cantidad > 0) {
          estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para alquiler.`;
          estatus.classList.remove('error');
          estatus.classList.add('success');
  
          procesada.msg.forEach(alquilar => {
            let tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta'); // Añade una clase para estilos
  
            let imagen = document.createElement('img');
            imagen.src = alquilar['ruta'];
            imagen.alt = 'Imagen de la vivienda en alquiler';
            imagen.classList.add('imagen-vivienda'); // Añade una clase para estilos
  
            let habitaciones = document.createElement('p');
            habitaciones.textContent = `Habitaciones: ${alquilar.habitaciones}`;
  
            let coordenadas = document.createElement('p');
            coordenadas.textContent = `Coordenadas: ${alquilar.coordenadas}`;
            let piscina = document.createElement('p');
            piscina.textContent = `Piscina: ${alquilar.piscina ? 'Sí' : 'No'}`;
  
            let alquiler = document.createElement('p');
            alquiler.textContent = `Alquiler: ${alquilar.alquiler ? 'Sí' : 'No'}`;
  
            let descripcion = document.createElement('p');
            descripcion.textContent = `Descripción: ${alquilar.descripcion}`;
  
            let superficie = document.createElement('p');
            superficie.textContent = `Superficie: ${alquilar.superficie}`;
  
            let venta = document.createElement('p');
            venta.textContent = `Venta: ${alquilar.venta ? 'Sí' : 'No'}`;
  
            // Añade los elementos a la tarjeta
            tarjeta.appendChild(imagen);
            tarjeta.appendChild(habitaciones);
            tarjeta.appendChild(coordenadas);
            tarjeta.appendChild(piscina);
            tarjeta.appendChild(alquiler);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(superficie);
            tarjeta.appendChild(venta);
  
            // Añade la tarjeta a la sección de imágenes
            imagesSection.appendChild(tarjeta);
          });
        } else {
          estatus.textContent = 'No se ha encontrado resultados.';
          estatus.classList.remove('success');
          estatus.classList.add('error');
        }
      })
      .catch(error => {
        estatus.textContent = `Error al realizar la búsqueda: ${error.message}`;
        estatus.classList.remove('success');
        estatus.classList.add('error');
        console.error('Error al realizar la solicitud fetch:', error);
      });
  });
  
