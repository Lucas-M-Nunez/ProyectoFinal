
// si tiene la sesion iniciada, va a poder ingresar al Home de nuestra
// aplicacion, hasta que oprima el boton de Log Out.

// Cuando Cierre sesión, la variable 'login_success' se removera del storage
// eliminando las sesiones abiertas y asi, validando que no puedan acceder
// al inicio de la app sin antes haber iniciado sesion o registrado.


const user = JSON.parse(localStorage.getItem('login_success')) || false;
if (!user) {
    window.location.href = './login/login.html';
}

const logOut = document.getElementById("btn-logOut");

logOut.addEventListener( 'click', () => {
    localStorage.removeItem('login_success');
    window.location.href = './login/login.html';
})


const btnSidebar = document.querySelector('.toggle__btn');

btnSidebar.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('active');
})