var btnAgregar = document.querySelector(".btn-agregar");
var btnCerrarPopup = document.querySelector(".btn-cerrar-popup");
var btnCancelar = document.querySelector(".btn-cancelar");
var fondoOscuro = document.querySelector(".fondo-oscuro");
var popup = document.querySelector(".popup")
var btnGuardar = document.querySelector(".btn-guardar");
var input = document.querySelector(".palabra-nueva");
let imagenError = document.querySelector("#img-error");
var palabraCoincidencia = false;
var palabras = ["FRONTEND","BACKEND","FULLSTACK","AJAX","VUE","ANGULAR","ETIQUETA", "ORACLE", "NEXT", "ALURA", "LATAM", "HTML", "CSS", "JAVASCRIPT", "LENGUAJE", "LOGICA", "INSIGNIA", "NOTEBOOK", "PC", "APRENDIZAJE", "PROYECTO", "VICTORIA", "JUEGO", "AHORCADO"];


btnAgregar.addEventListener("click", function(){
    fondoOscuro.classList.add("active");
    popup.classList.add("active");
})

btnCerrarPopup.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
    limpiarMensajeError();
    input.value = "";

})

btnCancelar.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
    limpiarMensajeError();
    input.value = "";
})

 /* guardar palabra en localStorage */

 function guardarLocalStorge(palabra){
    localStorage.setItem("palabra", palabra);
}

btnGuardar.addEventListener("click", function (){
    let errores = [];
    let patron = /\b[A-Z]+\b/;
    let expresion = new RegExp(patron, "s");

    if(input.value == 0){
        errores.push("POR FAVOR INGRESAR UN VALOR");
        imagenError.classList.add("active");
        return mostrarErrores(errores);
    }
    if(!expresion.test(input.value)){
        errores.push("INGRESAR SOLO LETRAS MAYÚSCULAS");
        imagenError.classList.add("active");
        return mostrarErrores(errores); 
    }
    for(let i=0; i<palabras.length;i++){
        if(input.value==palabras[i]){
            palabraCoincidencia = true;
            errores.push("PALABRA INGRESADA REPETIDA, INGRESE OTRA");
            imagenError.classList.add("active");
            return mostrarErrores(errores);
        }
    }
    if(palabraCoincidencia == false){
        let palabra = input.value;
        guardarLocalStorge(palabra);
    }
    input.focus();
    limpiarMensajeError()
    window.location.href = "./HTML/juego.html"    
})

    function mostrarErrores(errores){
        let ul = document.querySelector(".mensaje-error");
        ul.innerHTML = "";
        errores.forEach(function(error){
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        })
    };

    function limpiarMensajeError(){
        let mensaje = document.querySelector(".mensaje-error")
        mensaje.innerHTML = "";
        imagenError.classList.remove("active");
    }

    