var fondoVictoria = document.querySelector(".fondo-cartel-victoria");
var cartelVictoria = document.querySelector(".cartel-victoria");
let btnCerrar = document.querySelector("#btn-cerrar")

function ganarJuego(){
        fondoVictoria.classList.add("active");
        cartelVictoria.classList.remove("invisible");
        cartelVictoria.classList.add("active");

}

btnCerrar.addEventListener("click", function(){
    fondoGameOver.classList.remove("active");
    cartelGameOver.classList.remove("active");
    inicio.classList.remove("invisible");
    inicio.classList.add("visible")
    finDeJuego.classList.add("invisible");
    finDeJuego.classList.remove("visible");
})