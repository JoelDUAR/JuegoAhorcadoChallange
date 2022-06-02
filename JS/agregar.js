var btnAgregar = document.querySelector(".btn-agregar");
var btnCerrarPopup = document.querySelector(".btn-cerrar-popup");
var btnCancelar = document.querySelector(".btn-cancelar");
var fondoOscuro = document.querySelector(".fondo-oscuro");
var popup = document.querySelector(".popup")
var btnGuardar = document.querySelector(".btn-guardar");
var palabras = ["FRONTEND", "BACKEND", "FULLSTACK", "AJAX", "VUE","ANGULAR","ETIQUETA"];
var input = document.querySelector(".palabra-nueva");
var palabraCoincidencia = false;

btnAgregar.addEventListener("click", function(){
    fondoOscuro.classList.add("active");
    popup.classList.add("active");
})

btnCerrarPopup.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
    input.value = "";
})

btnCancelar.addEventListener("click", function(){
    fondoOscuro.classList.remove("active");
    popup.classList.remove("active");
    input.value = "";
})

btnGuardar.addEventListener("click", function (){
    let errores = [];
    let patron = /[A-Z]+/;
    let expresion = new RegExp(patron, "s");
    if(input.value == 0){
        errores.push("Ingrese texto");
        return mostrarErrores(errores);
    }
    if(!expresion.test(input.value)){
        errores.push("UPS, solo mayúscula!!");
        return mostrarErrores(errores); 
    }
    for(let i=0; i<palabras.length;i++){
        if(input.value==palabras[i]){
            palabraCoincidencia = true;
            errores.push("PALABRA INGRESADA REPETIDA, INGRESE OTRA");
            console.log(errores);
            return mostrarErrores(errores);
        }
    }
    if(palabraCoincidencia == false){
        palabras.push(input.value);
        console.log(palabras)
        llamarElementos();
    }
    input.focus();
    let mensaje = document.querySelector(".mensaje-error")
    mensaje.innerHTML = "";    
})

function verificar(){
    

}
    function mostrarErrores(errores){
        let ul = document.querySelector(".mensaje-error");
        ul.innerHTML = "";
        errores.forEach(function(error){
            let li = document.createElement("li");
            li.textContent = error;
            ul.appendChild(li);
        })
    };