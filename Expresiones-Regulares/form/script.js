
window.addEventListener('load', (e) => {
  // Cuenta Admin predeterminada para acceder a la pagina sin necesidad de registrarse.  
  e.preventDefault();
  let usuario = document.getElementById("usuario").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let password = document.getElementById("password").value;

  usuario = 'SuperAdmin';
  nombre = 'admin2023';
  apellido = 'admin';
  email = 'admin2023@admin.com';
  telefono = '+54 9 26123456789';
  password = 'superadmin2023';

  // Creamos una constante 'users' para que, en el caso
  // que se encuentren usuarios registrados los va a guardar
  // en la constante users, si no tiene ninguno , simplemente
  // va a tener un array vacío.

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // creamos una constante y usamos el metodo find para buscar el
  // correo ingresado, si el correo ya se encuentra en la base de datos
  // dira que el email ya esta registrado, si no, se procede a crear
  // la cuenta.
  const usersRegistrado = users.find((user) => user.email === email);
  
  if (!usersRegistrado) {
      //pusheamos los valores de los imputs como un nuevo objeto a 'users'
      // y lo transformamos en JSON para guardarlo en el localStorage.
      users.push({usuario: usuario, nombre: nombre, apellido: apellido, telefono: telefono, password: password, email: email});
      localStorage.setItem('users', JSON.stringify(users));
  }

})


const formulario = document.querySelectorAll("form input");
const form = document.querySelector("form");


const checks = {
  usuario: false,
  nombre: false,
  apellido: false,
  password: false,
  email: false,
  telefono: false,
};

const regex = {
  usuario: /^[a-zA-Z0-9\-\_\#\.]{4,10}$/,
  nombre: /^[a-zA-ZÀ-ÿ]*\s?[a-zA-Z]*\s?[a-zA-Z]{3,30}$/,
  apellido: /^[a-zA-ZÀ-ÿ]*\s?[a-zA-Z]{2,30}$/,
  password: /^[a-zA-Z0-9]{8,}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
  telefono: /^\+54\s+9+\s(261|011|264)[0-9]{7}$/,
};

const validacionCampo = (e) => {
  if (e.target.name === "nombre") valRegex(e.target, "nombre");
  if (e.target.name === "usuario") valRegex(e.target, "usuario");
  if (e.target.name === "apellido") valRegex(e.target, "apellido");
  if (e.target.name === "telefono") valRegex(e.target, "telefono");
  if (e.target.name === "email") valRegex(e.target, "email");
  if (e.target.name === "repcontraseña") {
    validacionPassword();
  }
  if (e.target.name === "password") {
    valRegex(e.target, "password");
    validacionPassword();
  }
};

const valRegex = (input, campo) => {
  if (regex[campo].test(input.value)) {
    document.getElementById(`msjaccess-${campo}`).classList.remove("inactive");
    document.getElementById(`msjerror-${campo}`).classList.add("inactive");
    input.style["outline-color"] = "#27AE60";
    checks[campo] = true;
  } else {
    document.getElementById(`msjerror-${campo}`).classList.remove("inactive");
    document.getElementById(`msjaccess-${campo}`).classList.add("inactive");
    input.style["outline-color"] = "#C0392B";
    checks[campo] = false;
  }
};

const validacionPassword = () => {
  const password = document.getElementById("password");
  const password2 = document.getElementById("repcontraseña");
  if (password.value === password2.value) {
    document
      .getElementById(`msjaccess-repcontraseña`)
      .classList.remove("inactive");
    document.getElementById(`msjerror-repcontraseña`).classList.add("inactive");
    password2.style["outline-color"] = "#27AE60";
  } else {
    document
      .getElementById(`msjerror-repcontraseña`)
      .classList.remove("inactive");
    document
      .getElementById(`msjaccess-repcontraseña`)
      .classList.add("inactive");
    password2.style["outline-color"] = "#C0392B";
  }
};

formulario.forEach((element) => {
  element.addEventListener("keyup", validacionCampo);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    checks.usuario &&
    checks.telefono &&
    checks.nombre &&
    checks.apellido &&
    checks.email &&
    checks.password
  ) {
    
    const usuario = document.getElementById("usuario").value;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const password = document.getElementById("password").value;
    // Creamos una constante 'users' para que, en el caso
    // que se encuentren usuarios registrados los va a guardar
    // en la constante users, si no tiene ninguno , simplemente
    // va a tener un array vacío.

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // creamos una constante y usamos el metodo find para buscar el
    // correo ingresado, si el correo ya se encuentra en la base de datos
    // dira que el email ya esta registrado, si no, se procede a crear
    // la cuenta.
    const usersRegistrado = users.find((user) => user.email === email);

    if (usersRegistrado) {
      return Swal.fire('El email ingresado ya está registrado.');
    }

    //pusheamos los valores de los imputs como un nuevo objeto a 'users'
    // y lo transformamos en JSON para guardarlo en el localStorage.
    users.push({usuario: usuario, nombre: nombre, apellido: apellido, telefono: telefono, password: password, email: email});
    localStorage.setItem('users', JSON.stringify(users));

    // importamos en HTML la libreria Sweetalert2.
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Usuario Registrado`,
      showConfirmButton: true,
      confirmButtonText: 'Ok',
      timer: 1500
    })
    // Al cargar el formulario y al haber registrado 
    // de manera exitosa el usuario nuevo, nos enviara al Login.
    window.location.href = '../login/login.html';
  } else{
    Swal.fire({
      title: 'Error!',
      text: 'Complete el Formulario',
      icon: 'error',
      confirmButtonText: 'volver a intentar'
    })
  }
});
