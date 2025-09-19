import { creaMenu, creaFooter } from './menu.js';

// Mueve la creación del menú y el pie de página aquí
creaMenu(document.querySelector('nav'));
creaFooter(document.querySelector('footer'));

document.addEventListener('DOMContentLoaded', (event) => {
    const mainElement = document.querySelector('main');
    const loading = document.querySelector('#loader');
    const imagesSection = document.createElement('section');
    imagesSection.id = 'images';
    mainElement.appendChild(imagesSection);

    

    fetch('http://localhost:3001/contactar')
        .then(info => info.json())
        .then(procesada => {
            loading.style.display = 'none';
            console.log(procesada);

            procesada.forEach(element => {
                let tarjeta = document.createElement('div');
                let imagen = document.createElement('img');
                imagen.src = element.ruta;
                imagen.setAttribute('alt', element.alt);
                imagen.classList.add('img-contacto');
                tarjeta.classList.add('tarjeta');
                tarjeta.appendChild(imagen);
                imagesSection.appendChild(tarjeta);
            });
        })
        .catch(error => console.error(error));
});
