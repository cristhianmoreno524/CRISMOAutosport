function validar() {
  var contra = document.getElementById("password").value;

  var formSuccess = document.getElementById("formSuccess");
  var formFail = document.getElementById("formFail");

  if (contra == "admin123") {
    formSuccess.style.display = "block";
    formFail.style.display = "none";
  } else {
    formSuccess.style.display = "none";
    formFail.style.display = "block";
  }
}

function validarInicio() {
  var contra = document.forms["inicio"]["email"].value;
  var contra = document.forms["inicio"]["password"].value;

  // localStorage.setItem(correo, contra); //parejas ordenadas

  if (contra == "admin123") {
    return true;
  }
  var formFail = document.getElementById("formFail");
  formFail.style.display = "block";
  return false;
}

const email = document.getElementById("email");
const pass = document.getElementById("password");
const parrafo = document.getElementById("warnings");
/* 
form.addEventListener("submit", e => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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
