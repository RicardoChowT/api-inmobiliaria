/*
import { creaFooter, creaMenu } from "./menu.js";

// Crear menú y footer dinámicamente
creaMenu(document.querySelector('nav'));
creaFooter(document.querySelector('footer'));

// Referencias a los elementos del DOM
const formulario = document.getElementById('searchForm');
const mainElement = document.querySelector('main');
let imagesSection = document.querySelector('#images');

// Crear la sección de imágenes si no existe
if (!imagesSection) {
    imagesSection = document.createElement('section');
    imagesSection.id = 'images';
    mainElement.appendChild(imagesSection);
}

// Manejar el evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir recarga de página
    imagesSection.innerHTML = ''; // Limpia solo la sección de imágenes

    const estatus = document.querySelector('#status');
    const locale = document.querySelector("#location").value;
    const tipo = document.querySelector("#tipo").value;

    // Solicitud fetch
    fetch(`http://localhost:3001/comprar_vivienda/${locale}/${tipo}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.statusText}`);
            }
            return response.json();
        })
        .then(procesada => {
            // Mostrar mensaje de estado
            estatus.classList.add('visible');
            if (procesada.cantidad > 0) {
                estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para tu búsqueda.`;
                estatus.classList.remove('error');
                estatus.classList.add('success');

                // Crear tarjetas dinámicamente
                procesada.msg.forEach(vivienda => {
                    // Crear tarjeta
                    let tarjeta = document.createElement('div');
                    tarjeta.classList.add('tarjeta');

                    // Crear contenedor de texto
                    let textoContenedor = document.createElement('div');
                    textoContenedor.classList.add('texto-contenedor');

                    // Título y párrafo
                    let titulo = document.createElement('h3');
                    titulo.textContent = vivienda.titulo;

                    let parrafo = document.createElement('p');
                    parrafo.textContent = vivienda.parrafo;

                    // Añadir título y párrafo al contenedor de texto
                    textoContenedor.appendChild(titulo);
                    textoContenedor.appendChild(parrafo);

                    // Crear elementos adicionales
                    let imagen = document.createElement('img');
                    imagen.src = vivienda.ruta;
                    imagen.alt = 'Imagen de la vivienda';
                    imagen.classList.add('imagen-vivienda');

                    let habitaciones = document.createElement('p');
                    habitaciones.textContent = `Habitaciones: ${vivienda.habitaciones}`;

                    let coordenadas = document.createElement('p');
                    coordenadas.textContent = `Coordenadas: ${vivienda.coordenadas}`;

                    let piscina = document.createElement('p');
                    piscina.textContent = `Piscina: ${vivienda.piscina ? 'Sí' : 'No'}`;

                    let alquiler = document.createElement('p');
                    alquiler.textContent = `Alquiler: ${vivienda.alquiler ? 'Sí' : 'No'}`;

                    let descripcion = document.createElement('p');
                    descripcion.textContent = `Descripción: ${vivienda.descripcion}`;

                    let superficie = document.createElement('p');
                    superficie.textContent = `Superficie: ${vivienda.superficie}`;

                    let venta = document.createElement('p');
                    venta.textContent = `Venta: ${vivienda.venta ? 'Sí' : 'No'}`;

                    // Añadir elementos a la tarjeta
                    tarjeta.appendChild(textoContenedor);
                    tarjeta.appendChild(imagen);
                    tarjeta.appendChild(habitaciones);
                    tarjeta.appendChild(coordenadas);
                    tarjeta.appendChild(piscina);
                    tarjeta.appendChild(alquiler);
                    tarjeta.appendChild(descripcion);
                    tarjeta.appendChild(superficie);
                    tarjeta.appendChild(venta);

                    // Añadir tarjeta a la sección de imágenes
                    imagesSection.appendChild(tarjeta);
                });
            } else {
                // Mensaje cuando no hay resultados
                estatus.textContent = 'No se han encontrado resultados.';
                estatus.classList.remove('success');
                estatus.classList.add('error');
            }
        })
        .catch(error => {
            // Manejo de errores
            estatus.textContent = `Error al realizar la búsqueda: ${error.message}`;
            estatus.classList.remove('success');
            estatus.classList.add('error');
            console.error('Error al realizar la solicitud fetch:', error);
        });
});
*/


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

    fetch(`http://localhost:3001/comprar_vivienda/${locale}/${tipo}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error de red: ${response.statusText}`);
        }
        return response.json();
    })
    .then(procesada => {
        estatus.classList.add('visible');
        if (procesada.cantidad > 0) {
            estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para tu búsqueda.`;
            estatus.classList.remove('error');
            estatus.classList.add('success');

            procesada.msg.forEach(vivienda => {
                let tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta'); // Añade una clase para estilo

                let titulo = document.createElement('h3');
                titulo.textContent = vivienda.titulo;

                let parrafo = document.createElement('p');
                parrafo.textContent = vivienda.parrafo;
                    

                let imagen = document.createElement('img');
                imagen.src = vivienda['ruta'];
                imagen.alt = 'Imagen de la vivienda';
                imagen.classList.add('imagen-vivienda'); // Añade una clase para estilos

                let habitaciones = document.createElement('p');
                habitaciones.textContent = `Habitaciones: ${vivienda.habitaciones}`;

                let coordenadas = document.createElement('p');
                coordenadas.textContent = `Coordenadas: ${vivienda.coordenadas}`;

                let piscina = document.createElement('p');
                piscina.textContent = `Piscina: ${vivienda.piscina ? 'Sí' : 'No'}`;

                let alquiler = document.createElement('p');
                alquiler.textContent = `Alquiler: ${vivienda.alquiler ? 'Sí' : 'No'}`;

                let descripcion = document.createElement('p');
                descripcion.textContent = `Descripción: ${vivienda.descripcion}`;

                let superficie = document.createElement('p');
                superficie.textContent = `Superficie: ${vivienda.superficie}`;

                let venta = document.createElement('p');
                venta.textContent = `Venta: ${vivienda.venta ? 'Sí' : 'No'}`;

                // Añade los elementos a la tarjeta
                tarjeta.appendChild(titulo);
                tarjeta.appendChild(parrafo);
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















/*import { creaFooter, creaMenu } from "./menu.js";

creaMenu(document.querySelector('nav'))
creaFooter(document.querySelector('footer'))

const formulario = document.getElementById('searchForm');

const mainElement = document.querySelector('main')

// Crea la sección de imágenes una sola vez
let imagesSection = document.querySelector('#images');
if (!imagesSection) {
    imagesSection = document.createElement('section');
    imagesSection.id = 'images';
    mainElement.appendChild(imagesSection);
}

formulario.addEventListener('submit', function(event) {
    console.log(event)
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    // Limpia solo la sección de imágenes
    imagesSection.innerHTML = '';

    const estatus = document.querySelector('#status');
    const informacion = new URLSearchParams(location.search);
    
    const locale = document.querySelector("#location").value
    const tipo = document.querySelector("#tipo").value
    
    fetch(`http://localhost:3000/vivienda/${locale}/${tipo}`)
    .then(info => info.json())
    .then(procesada => {
        console.log(procesada)
        estatus.classList.add('visible');
        if (procesada.cantidad > 0) {
            estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para tu búsqueda.`;
            estatus.classList.add('success');

            procesada.msg.forEach(vivienda => {
                let tarjeta = document.createElement('div')
                let imagen = document.createElement('img')
                imagen.src = vivienda['ruta'] // Establece el atributo 'src' de la imagen a la ruta de la imagen de la vivienda
                imagen.alt = 'Imagen de la vivienda'; // Establece un texto alternativo para la imagen
            
                // Crea elementos de párrafo para cada propiedad de la vivienda y establece su contenido de texto
                let habitaciones = document.createElement('p');
                habitaciones.textContent = `Habitaciones: ${vivienda.habitaciones}`;
            
                let ubicacion = document.createElement('p');
                ubicacion.textContent = `Ubicación: ${vivienda.ubicacion}`;

                let piscina = document.createElement('p');
                piscina.textContent = `Piscina: ${vivienda.piscina ? 'Sí' : 'No'}`;

                let alquiler = document.createElement('p');
                alquiler.textContent = `Alquiler: ${vivienda.alquiler ? 'Sí' : 'No'}`;

                let descripcion = document.createElement('p');
                descripcion.textContent = `Descripción: ${vivienda.descripcion}`;

                let superficie = document.createElement('p');
                superficie.textContent = `Superficie: ${vivienda.superficie}`;

                let venta = document.createElement('p');
                venta.textContent = `Venta: ${vivienda.venta ? 'Sí' : 'No'}`;
            
                // Añade los elementos a la tarjeta
                tarjeta.appendChild(imagen)
                tarjeta.appendChild(habitaciones)
                tarjeta.appendChild(ubicacion)
                tarjeta.appendChild(piscina)
                tarjeta.appendChild(alquiler)
                tarjeta.appendChild(descripcion)
                tarjeta.appendChild(superficie)
                tarjeta.appendChild(venta)
            
                // Añade la tarjeta a la sección de imágenes
                imagesSection.appendChild(tarjeta)
            });
        } else {
            estatus.textContent = 'No se ha encontrado resultados.';
            estatus.classList.add('error');
        }
    })
    .catch(error => {
        console.log(error);
    });
})












/*

import { creaFooter, creaMenu } from "./menu.js";

creaMenu(document.querySelector('nav'))
creaFooter(document.querySelector('footer'))

const formulario = document.getElementById('searchForm');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const estatus = document.querySelector('#status');
    const contenido = document.querySelector('#contenido');
    const locale = document.querySelector("#location").value;
    const tipo = document.querySelector("#tipo").value;

    fetch(`http://localhost:3000/vivienda/${locale}/${tipo}`)
        .then(info => info.json())
        .then(procesada => {
            estatus.classList.add('visible');
            if (procesada.cantidad > 0) {
                estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para tu búsqueda.`;
                estatus.classList.add('success');

                // Limpiar el contenido existente
                contenido.innerHTML = '';

                // Crear y agregar nuevos elementos para cada resultado
                procesada.msg.forEach(vivienda => {
                    const viviendaElement = document.createElement('div');
                    viviendaElement.classList.add('vivienda');

                    // Aquí puedes agregar más detalles de cada vivienda
                    viviendaElement.innerHTML = `
                        <h2>${vivienda.tipo}</h2>
                        <p>${vivienda.descripcion}</p>
                    `;

                    // Crear un elemento de imagen para cada vivienda
                    const imgElement = document.createElement('img');
                    imgElement.src = vivienda.imagen;
                    imgElement.alt = vivienda.tipo;

                    // Agregar el elemento de imagen al elemento de vivienda
                    viviendaElement.appendChild(imgElement);

                    contenido.appendChild(viviendaElement);
                });
            } else {
                estatus.textContent = 'No se ha encontrado resultados.';
                estatus.classList.add('error');
            }
        })
        .catch(error => {
            console.log(error);
        });
});*/






/*formulario.addEventListener('submit', function(event) {
    console.log(event)
    event.preventDefault(); // Prevenir la recarga de la página al enviar el formulario

    const estatus = document.querySelector('#status');
    const informacion = new URLSearchParams(location.search);

    //fetch(`http://localhost:3000/vivienda/${informacion.get("location")}/${informacion.get("tipo")}`)
    
    const locale = document.querySelector("#location").value
    const tipo = document.querySelector("#tipo").value
    
    fetch(`http://localhost:3000/vivienda/${locale}/${tipo}`)
        .then(info => info.json())
        .then(procesada => {
            console.log(procesada)
            estatus.classList.add('visible');
            if (procesada.cantidad > 0) {
                estatus.textContent = `Se han encontrado (${procesada.cantidad}) viviendas para tu búsqueda.`;
                estatus.classList.add('success');
            } else {
                estatus.textContent = 'No se ha encontrado resultados.';
                estatus.classList.add('error');
            }
        })
        .catch(error => {
            console.log(error);
        });
});
*/


















/*const formulario = document.querySelector('form')
formulario.on('submit', (e)=>{
    e.preventDefault()

})

let direccUrl = location.href
direccUrl = direccUrl.split('?')[1]
direccUrl = direccUrl.split('&')

const punto = direccUrl[0].split('1')
const tipo  = direccUrl[1].split('1')
console.log(punto, tipo)

fetch(`/comprar/${punto}/${tipo}`)
.then(datos=>console.log(datos))
.catch(error=>{console.log(error)})*/