// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


// Validación de correo electrónico, nombre de usuario y el password en el formulario de registro

const email = document.getElementById("validationCustom03")
const username = document.getElementById("validationCustomUsername")
const password = document.getElementById("validationCustom04")
const repetPassword = document.getElementById("validationCustom05")
const form = document.getElementById("form")
const parrafo = document.getElementById("warning")

form.addEventListener("submit", e => {
  let warning = ""
  let entrada = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  if (!regexEmail.test(email.value)) {
    warning += `¡El email no es valido!<br>`
    entrada = true
    e.preventDefault()
  }
  if (username.value.length < 6) {
    warning += `¡El Nombre de usuario no es valido!<br>`
    entrada = true
    e.preventDefault()
  }
  if (password.value.length < 8) {
    warning += `¡La contraseña no es valida!<br>`
    entrada = true
    e.preventDefault()
  }
  if (repetPassword.value != password.value) {
    if (repetPassword.value == "") {
      warning += `¡Repita la contraseña!<br>`
      e.preventDefault()
    } else {
      warning += `¡Las contraseñas no coinciden!<br>`
      entrada = true
      e.preventDefault()
    }
  }
  if (entrada) {
    parrafo.innerHTML = warning
  }
})



// Validación de nombre de usuario, correo electrónico y password en el formulario de Login

const emailLogin = document.getElementById("email")
const usernameLogin = document.getElementById("username")
const passwordLogin = document.getElementById("password")
const formLogin = document.getElementById("form")
const parrafoLogin = document.getElementById("warning")

form.addEventListener("submit", e => {
  let warning = ""
  let entrada = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafoLogin.innerHTML = ""
  if (!regexEmail.test(emailLogin.value)) {
    warning += `¡El email no es valido!<br>`
    entrada = true
    e.preventDefault()
  }
  if (usernameLogin.value.length < 6) {
    warning += `¡El Nombre de usuario no es valido!<br>`
    entrada = true
    e.preventDefault()
  }
  if (passwordLogin.value.length < 8) {
    warning += `¡La contraseña no es valida!<br>`
    entrada = true
    e.preventDefault()
  }
  if (entrada) {
    parrafoLogin.innerHTML = warning
  }
})