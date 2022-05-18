let btnJugar = document.querySelector(".btn-inicio");
btnJugar.addEventListener("click", () =>{
    llamarElementos();
})

function llamarElementos(){
    let section = document.querySelector("#container");
    section.classList.remove("visible");
    section.classList.add("invisible");
    let section2 = document.querySelector("#container2");
    section2.classList.remove("invisible");
    section2.classList.add("visible");
}