let btnDesistir = document.querySelector("#btn-desistir");
btnDesistir.addEventListener("click", ()=>{
    let inicio = document.querySelector("#container");
    inicio.classList.remove("invisible");
    inicio.classList.add("visible")
    let finDeJuego = document.querySelector("#container2");
    finDeJuego.classList.add("invisible");
    finDeJuego.classList.remove("visible");
})