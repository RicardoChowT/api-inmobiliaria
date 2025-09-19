// Importar funciones del menú y footer
import { creaFooter, creaMenu } from "./menu.js";

// Inicializar componentes del DOM
creaMenu(document.querySelector('nav'));
creaFooter(document.querySelector('footer'));

const registerForm = document.getElementById('registerForm');
const registerStatus = document.getElementById('register-status');
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('login-status');
const loginSection = document.getElementById('login-section');
const registerSection = document.getElementById('register-section');
const contentSection = document.getElementById('content-section');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const alertMessage = document.getElementById('alert-message');

// Función para mostrar una sección específica
function mostrarSeccion(id) {
    const section = document.getElementById(id);
    if (section) {
        section.style.display = 'block';
    }
}

// Funciones adicionales para cargar contenido tras inicio de sesión
function cargarDashboard() {
    console.log("Cargando dashboard con estadísticas...");
    mostrarSeccion("dashboard");
}

function cargarCalendario() {
    console.log("Integrando calendario corporativo...");
    mostrarSeccion("calendar");
}

function cargarDocumentos() {
    console.log("Habilitando gestión de documentos...");
    mostrarSeccion("documents");
}

function cargarChatInterno() {
    console.log("Activando chat interno...");
    mostrarSeccion("internal-chat");
}

function habilitarBuscadorInterno() {
    console.log("Activando buscador interno...");
    mostrarSeccion("search-bar");
}

function integrarHerramientasExternas() {
    console.log("Integrando herramientas externas...");
    mostrarSeccion("external-tools");
}

// Llamar funciones adicionales tras inicio de sesión exitoso
function iniciarAplicacion() {
    contentSection.style.display = 'block';
    cargarDashboard();
    cargarCalendario();
    cargarDocumentos();
    cargarChatInterno();
    habilitarBuscadorInterno();
    integrarHerramientasExternas();
}

// Mostrar formulario de registro
showRegister.addEventListener('click', function (event) {
    event.preventDefault();
    loginSection.style.display = 'none';
    registerSection.style.display = 'block';
});

// Mostrar formulario de inicio de sesión
showLogin.addEventListener('click', function (event) {
    event.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

// Manejar el registro
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        username: document.getElementById('register-username').value,
        password: document.getElementById('register-password').value,
        email: document.getElementById('register-email').value
    };

    console.log("Enviando datos al backend:", data);

    fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                registerStatus.textContent = 'Registro exitoso';
                registerStatus.classList.remove('error');
                registerStatus.classList.add('success');
                registerSection.style.display = 'none';
                loginSection.style.display = 'block';
            } else {
                registerStatus.textContent = 'Error en el registro';
                registerStatus.classList.remove('success');
                registerStatus.classList.add('error');
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud fetch:', error);
            registerStatus.textContent = 'Error al registrar. Inténtalo de nuevo.';
            registerStatus.classList.remove('success');
            registerStatus.classList.add('error');
        });
});

// Manejar el inicio de sesión
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const data = {
        username: document.getElementById('login-username').value,
        password: document.getElementById('login-password').value
    };

    console.log("Datos enviados al backend:", data);

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loginStatus.textContent = 'Inicio de sesión exitoso';
                loginStatus.classList.remove('error');
                loginStatus.classList.add('success');
                loginSection.style.display = 'none';

                // Iniciar aplicación tras inicio de sesión exitoso
                iniciarAplicacion();
            } else {
                alertMessage.textContent = 'Usuario o contraseña incorrectos.';
                alertMessage.style.display = 'block';
                alertMessage.classList.add('alert-error');
                loginStatus.classList.remove('success');
                loginStatus.classList.add('error');
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud fetch:', error);
            alertMessage.textContent = 'Error al iniciar sesión. Inténtalo de nuevo.';
            alertMessage.style.display = 'block';
            alertMessage.classList.add('alert-error');
            loginStatus.classList.remove('success');
            loginStatus.classList.add('error');
        });
});

// Asegurarse de que las funciones adicionales se carguen cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Ocultar todas las secciones al cargar la página
    const sections = ['dashboard', 'calendar', 'documents', 'internal-chat', 'search-bar', 'external-tools'];
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
});




/*import { creaFooter, creaMenu } from "./menu.js";

creaMenu(document.querySelector('nav'));
creaFooter(document.querySelector('footer'));

const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('login-status');
const loginSection = document.getElementById('login-section');
const contentSection = document.getElementById('content-section');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loginStatus.textContent = 'Inicio de sesión exitoso';
            loginStatus.classList.remove('error');
            loginStatus.classList.add('success');
            loginSection.style.display = 'none';
            contentSection.style.display = 'block';
        } else {
            loginStatus.textContent = 'Error en el inicio de sesión';
            loginStatus.classList.remove('success');
            loginStatus.classList.add('error');
        }
    })
    .catch(error => {
        loginStatus.textContent = `Error al iniciar sesión: ${error.message}`;
        loginStatus.classList.remove('success');
        loginStatus.classList.add('error');
        console.error('Error al realizar la solicitud fetch:', error);
    });
});
*/
