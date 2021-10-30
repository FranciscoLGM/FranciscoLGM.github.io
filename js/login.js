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
    if (usernameLogin.value.length < 6) {
        warning += `¡El usuario no es valido!<br>`
        entrada = true
        e.preventDefault()
    }
    if (!regexEmail.test(emailLogin.value)) {
        warning += `¡El email no es valido!<br>`
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