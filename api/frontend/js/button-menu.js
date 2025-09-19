document.addEventListener('DOMContentLoaded', (event) => {
    console.log("El script button-menu.js se ha cargado correctamente");

    const botonMenuMobil = document.querySelector('.mobile-menu-button');
    const botonCerrarMenuMobil = document.querySelector('.close-menu-button');
    const menuMobil = document.querySelector('#mobile-menu');

    if (botonMenuMobil && botonCerrarMenuMobil && menuMobil) {
        botonMenuMobil.addEventListener('click', () => {
            console.log('Evento click en botonMenuMobil');
            menuMobil.style.display = 'flex';
            botonMenuMobil.style.display = 'none';
            botonCerrarMenuMobil.style.display = 'block'; // Asegúrate de mostrar el botón de cerrar
        });

        botonCerrarMenuMobil.addEventListener('click', () => {
            console.log('Evento click en botonCerrarMenuMobil');
            menuMobil.style.display = 'none';
            botonMenuMobil.style.display = 'flex'; // Asegúrate de mostrar el botón de menú
            botonCerrarMenuMobil.style.display = 'none';
        });
    } else {
        console.log('Uno o más elementos del menú no se encontraron');
    }
});




/*
document.addEventListener('DOMContentLoaded', (event) => {
    const botonMenuMobil = document.querySelector('.mobile-menu-button i');
    const botonCerrarMenuMobil = document.querySelector('.close-menu-button i');
    const menuMobil = document.querySelector('#mobile-menu');

    if (botonMenuMobil && botonCerrarMenuMobil && menuMobil) {
        botonMenuMobil.addEventListener('click', ()=>{
            console.log('Se ha clickeado el boton del menu')
            menuMobil.style.display='flex';
            botonMenuMobil.style.display='none';
        });

        botonCerrarMenuMobil.addEventListener('click', ()=>{
            menuMobil.style.display='none';
            botonMenuMobil.style.display='block';
        });
    }
});*/
