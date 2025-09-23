export const creaMenu = (elemento) => {
  elemento.innerHTML = `<div class="mobile-menu-button"><i class="fa-solid fa-bars"></i></div>
   
        <div class="logo-container">
        <img src="img/imagenes/Ric.jpeg" alt="">
   
    <nav id="mobile-menu">
      <ul>
         <li><a href="comprar_vivienda.html">Comprar Vivienda</a> </li>
         <li><a href="index.html">Alquilar</a> </li>
         <li><a href="Vender.html">Vender</a></li>
         <li><a href="empresahistoria.html">Empresa-Historia</a></li>
         <li><a href="empresaoficinas.html">Empresa-Oficinas</a></li>
         <li><a href="Contactar.html">Contactar</a> </li>
         <li><a href="Intranet.html">Intranet</a> </li>
         <li><a href="politica-privacidad.html">Política de Privacidad</a> </li>
       </ul> 
       <div class="close-menu-button"><i class="fa-regular fa-circle-xmark"></i></div>
   </nav>

   <nav id="desktop-menu">
      <ul>
      <li><a href="comprar_vivienda.html">Comprar Vivienda</a> </li>
      <li><a href="index.html">Alquilar</a> </li>
      <li><a href="Vender.html">Vender</a></li>
      <li><a href="empresahistoria.html">Empresa-Historia</a></li>
      <li><a href="empresaoficinas.html">Empresa-Oficinas</a></li>
      <li><a href="Contactar.html">Contactar</a> </li>
      <li><a href="Intranet.html">Intranet</a> </li>
      <li><a href="politica-privacidad.html">Política de Privacidad</a> </li>
       </ul> 
       <div class="close-menu-button"><i class="fa-regular fa-circle-xmark"></i></div>
   </nav>`;
};
export const creaFooter = (elemento) => {
  elemento.innerHTML = `<div class="footer-logo-container">
    <img src="img/imagenes/Ric.jpeg" alt="">
</div>

<div class="footer-icons-container">
    <i class="fa-brands fa-square-x-twitter"></i>
    <i class="fa-brands fa-facebook"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-tiktok"></i>
    <i class="fa-brands fa-whatsapp"></i>
</div>
<div class="footer-links-container">
    <ul>
        <li><a href="#">Contactar |</a></li>
        <li><a href="#">Blog |</a></li>
        <li><a href="#">Aviso Legal  |</a></li>
        <li><a href="#">Política de cookies  |</a></li>
        <li><a href="politica-privacidad.html">Política de Privacidad |</a></li>
        <li><a href="#">Valora tu inmueble |</a></li>
        <li><a href="#">Mapa del sitio |</a></li>
        <li><a href="#">Catastro |</a></li>
        <li><a href="#">Estadisticas |</a></li>
    </ul>
</div>
<div id="cookie-notice">
"¡Bienvenido! Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestro uso de cookies. Para obtener más información, consulta nuestra  política de privacidad."
    <button id="accept-cookies">Aceptar</button>
</div>
<div class="derechos-reservados">
    <p>© CHOW-MOLINA</p>
</div>`;
};
