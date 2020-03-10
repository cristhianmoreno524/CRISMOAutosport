const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const pass = document.getElementById("contraseña");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
/* 
form.addEventListener("submit", e => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (nombre.value.length < 6) {
    warnings += `El Nombre No es Valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El Email No es Valido <br>`;
    entrar = true;
  }

  if (pass.value.length < 8) {
    warnings += `La Contraseña No es Valida <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  }
});
 */
function validar() {
  var nombre, documento, genero, celular, email, contraseña, expresion;

  nombre = document.getElementById("nombre").value;
  documento = document.getElementById("documento").value;
  genero = document.getElementById("genero").value;
  celular = document.getElementById("celular").value;
  email = document.getElementById("email").value;
  contraseña = document.getElementById("contraseña").value;

  expresion = /\w+@\w+\.+[a-z]/;

  if (
    nombre === "" ||
    documento === "" ||
    genero === "" ||
    celular === "" ||
    email === "" ||
    contraseña === ""
  ) {
    alert("Todos Los Campos Son Obligatorios");
    return false;
  } else if (nombre.length > 110) {
    alert("El Nombre No es Valido");
    return false;
  } else if (documento.length > 10) {
    alert("El Documento No es Valido");
    return false;
  } else if (genero.length > 1) {
    alert("El Genero es Muy Largo");
    return false;
  } else if (celular.length > 10) {
    alert("El N° de Celular Es Incorrecto");
    return false;
  } else if (email.length > 100) {
    alert("El Email Es Incorrecto");
    return false;
  } else if (contraseña.length > 20) {
    alert("La Contraseña Es Incorrecta");
    return false;
  } else if (isNaN(celular)) {
    alert("El teléfono Ingresado No es un Número");
    return false;
  }
  return true;
}
