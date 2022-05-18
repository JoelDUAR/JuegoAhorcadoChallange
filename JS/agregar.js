let btnAgregar = document.querySelector(".btn-agregar");
let btnCerrarPopup = document.querySelector(".btn-cerrar-popup");
let btnCancelar = document.querySelector(".btn-cancelar");
let fondoOscuro = document.querySelector(".fondo-oscuro");
let popup = document.querySelector(".popup")



btnAgregar.addEventListener("click", function(){
    fondoOscuro.classList.add("active")
    popup.classList.add("active")
})

btnCerrarPopup.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
})

btnCancelar.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
})