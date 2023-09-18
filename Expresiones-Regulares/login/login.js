const formLogin = document.querySelector('form');
const inputsForm = document.querySelectorAll('form input');


formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usersIngresado = users.find(user => user.email === email && user.password === password);

    if (!usersIngresado) {
        return Swal.fire({
            title: 'Error!',
            text: 'Email y/o contraseña incorrecta',
            icon: 'error',
            confirmButtonText: 'volver a intentar'
        })
    }

    // validamos para que un usuario no acceda al Home 
    // de la App sin haberse registrado o iniciado sesión previamente.
    localStorage.setItem('login_success', JSON.stringify(usersIngresado));
    window.location.href = '../index.html';
})