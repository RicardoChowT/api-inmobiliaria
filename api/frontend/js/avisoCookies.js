//Creamos dos cookies con JS aunque estas deberian venir del server por ejemplo

document.cookie = "change4canton@gmail.com";
document.cookie =
  "session=87e1c5bedf042ae23f4947286f224847c7d00548ce47e47d35a1eb968a5ecfe7";

//Cogemos todas las cookies con document.cookie
// Y hacemos un split para tenerlas separadas

const cookies = document.cookie.split(";");
cookies.forEach((cookie) => {
  /*
    Como cada una es clave=valor,
    utilizamos ese = para hacer otro split
    y tener por separado ambos valores
    */
  const data = cookie.split("=");
  console.log(data);
});

window.onload = function () {
  const cookieNotice = document.getElementById("cookie-notice");
  const acceptCookies = document.getElementById("accept-cookies");

  // Comprobamos si el usuario ya ha aceptado las cookies
  if (!localStorage.getItem("cookiesAccepted")) {
    // Si no las ha aceptado, mostramos el aviso
    cookieNotice.style.display = "block";
  }

  // Cuando el usuario acepta las cookies, las guardamos en localStorage y ocultamos el aviso
  acceptCookies.onclick = function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieNotice.style.display = "none";
  };
};
