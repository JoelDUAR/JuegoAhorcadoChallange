var cartelGameOver = document.querySelector(".cartel-game-over");
var fondoGameOver = document.querySelector(".fondo-game-over");
var btnCerrar2 = document.querySelector("#btn-cerrar2");
var btnJuegoNuevo = document.querySelector(".btn-jugar")
let inicio = document.querySelector("#container");
let finDeJuego = document.querySelector("#container2");

function finDelJuego(){
    fondoGameOver.classList.add("active");
    cartelGameOver.classList.add("active");
    let p = document.querySelector("#p");
    p.textContent= "La palabra correcta era: " + palabraSecreta;
}

btnCerrar2.addEventListener("click", function(){
    fondoGameOver.classList.remove("active");
    cartelGameOver.classList.remove("active");
    inicio.classList.remove("invisible");
    inicio.classList.add("visible")
    finDeJuego.classList.add("invisible");
    finDeJuego.classList.remove("visible");
})