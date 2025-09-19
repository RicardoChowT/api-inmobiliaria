import { creaFooter, creaMenu } from "./menu.js";

creaMenu(document.querySelector('nav'))
creaFooter(document.querySelector('footer'))



const mainElement = document.querySelector('main')
const loading = document.querySelector('#loader')

if(mainElement && loading){

    const textSection = document.createElement('section')
    textSection.id = 'text'
    mainElement.appendChild(textSection)

    const imagesSection = document.createElement('section')
    imagesSection.id = 'images'
    mainElement.appendChild(imagesSection)

    fetch('http://localhost:3001/empresahistoria')
    .then(info => info.json())
    .then(procesada =>{

        loading.style.display = 'none'
        procesada.forEach(element => {
            let tarjeta = document.createElement('div')
            let titulo = document.createElement('h2')
            let parrafo = document.createElement('p')
            let imagen = document.createElement('img')

            titulo.innerHTML = element.titulo
            parrafo.innerHTML = element.parrafo
            imagen.src = element.ruta
            imagen.setAttribute('alt', element.alt)

            tarjeta.classList.add('tarjeta')

            tarjeta.appendChild(titulo)
            tarjeta.appendChild(parrafo)
            tarjeta.appendChild(imagen)

            mainElement.appendChild(tarjeta)
        })
    })
}