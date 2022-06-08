let btnNocturno = document.querySelector("#btn-nocturno");
let btnDiurno = document.querySelector("#btn-diurno");
let body = document.querySelector("#overview");
let logo = document.querySelector("#logo-alura");
let logoNocturno = document.querySelector("#logo2-alura");
let titulo = document.querySelector(".titulo");
let btnInicio = document.querySelector(".btn-inicio");
let botonAgregar = document.querySelector(".btn-agregar");
let footer = document.querySelector("#footer");
let iconoslinkedin = document.querySelector(".fa-linkedin");
let iconosGithub = document.querySelector(".fa-github");
let icono = document.querySelector("#logo");
let icono2 = document.querySelector("#logo2");
let popupNocturno = document.querySelector(".popup");
let fondoClaro = document.querySelector(".fondo-oscuro")
let btnAgregarNocturno = document.querySelector(".btn-agregar")

btnNocturno.addEventListener("click", () => {
    btnNocturno.classList.add("invisible");
    btnDiurno.classList.remove("invisible");
    body.classList.add("bodyNocturno");
    logoNocturno.classList.remove("invisible");
    logo.classList.add("invisible");
    titulo.classList.remove("titulo");
    titulo.classList.add("tituloNocturno");
    btnInicio.classList.add("btnNuevoNocturno");
    btnInicio.classList.remove("btn-inicio");
    botonAgregar.classList.add("btnAgregarNocturno");
    botonAgregar.classList.remove("btn-agregar");
    footer.classList.add("footerNocturno");
    iconoslinkedin.classList.add("fa-brands2");
    iconosGithub.classList.add("fa-brands2");
    icono2.classList.remove("invisible");
    icono.classList.add("invisible");
    
});

btnDiurno.addEventListener("click", () => {
    btnDiurno.classList.add("invisible");
    btnNocturno.classList.remove("invisible");
    body.classList.remove("bodyNocturno");
    logoNocturno.classList.add("invisible");
    logo.classList.remove("invisible");
    titulo.classList.remove("tituloNocturno");
    titulo.classList.add("titulo");
    btnInicio.classList.remove("btnNuevoNocturno");
    btnInicio.classList.add("btn-inicio");
    botonAgregar.classList.remove("btnAgregarNocturno");
    botonAgregar.classList.add("btn-agregar");
    footer.classList.remove("footerNocturno");
    iconoslinkedin.classList.remove("fa-brands2");
    iconosGithub.classList.remove("fa-brands2");
    icono2.classList.add("invisible");
    icono.classList.remove("invisible");
});