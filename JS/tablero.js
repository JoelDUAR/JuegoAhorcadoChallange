let tablero = document.querySelector("canvas");
let pincel = tablero.getContext("2d");
let errores = 8;
let ingresos = 0;
let palabraCorrecta= "";
let letra = [];
var palabras = ["FRONTEND","BACKEND","FULLSTACK","AJAX","VUE","ANGULAR","ETIQUETA", "ORACLE", "NEXT", "ALURA", "LATAM", "HTML", "CSS", "JAVASCRIPT", "LENGUAJE", "LOGICA", "INSIGNIA", "NOTEBOOK", "PC", "APRENDIZAJE", "PROYECTO", "VICTORIA", "JUEGO", "AHORCADO"];
let btnJugar = document.querySelector(".btn-inicio");

/* Pedir y traer palabra del localStorage */
function traerLocalStorage(){
        localStorage.getItem("palabra");
}
/*  */
let palabraGuardada = traerLocalStorage();

    if(palabraGuardada == null){
        palabraSecreta = sortearPalabra(palabraGuardada);
        logicaDelJuego();
    }else{
        palabras.push(palabraGuardada);
        palabraSecreta = sortearPalabra();
        logicaDelJuego();
    }

function sortearPalabra(){
    var palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];
    console.log(palabraSecreta);
    return palabraSecreta;
}

function logicaDelJuego(){
    dibujarRenglon();
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        let patronletra = /[a-zA-Z]+/;
        let expresion = new RegExp(patronletra, "s"); 
        if(expresion.test(e.key)){
        if(!controlarTeclaPresionada(e.key)){
            if(palabraSecreta.includes(letra)){
             colocarLetraCorrecta(palabraSecreta.indexOf(letra))   
             for(let i = 0; i<palabraSecreta.length; i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                    ingresos++;
                }
                }
            if(ingresos === palabraSecreta.length){
                setTimeout(function(){
                    ganarJuego();
                },150) 
            }
            }else{
                if(!controlarTeclaPresionada(e.key)) return
                escribirLetraIncorrecta(letra, errores);
                colocarLetraIncorrecta(letra);
                dibujarfigura(errores)
            }
        }
    }
    }
}

function dibujarRenglon(){  
    var anchoRenglon = 600/palabraSecreta.length;
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    for(let i = 0; i< palabraSecreta.length; i++){
        pincel.moveTo(300+(anchoRenglon*i),500);
        pincel.lineTo(350+(anchoRenglon*i),500);
    }
    pincel.stroke();
    pincel.closePath();
    return palabraSecreta;
} 

function escribirLetraCorrecta(index){
    pincel.font = "bold 50px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.fillStyle = "#0A3871";
    var anchoLetra = 600/palabraSecreta.length;
    pincel.fillText(palabraSecreta[index],309+(anchoLetra*index),490)

}

function escribirLetraIncorrecta(letra, erroresLeft) {
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.fillStyle = "red";
    pincel.fillText(letra,335+(40*(10-erroresLeft)),570,40);
}

function colocarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
    
}

function colocarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores -= 1;
    }
}

function controlarTeclaPresionada(key){
    if(letra.length < 1 || letra.indexOf(key) < 0){
        letra.push(key);
        return false;
    }else{
        letra.push(key);
        return true;
    }
}

function dibujarfigura(){
    pincel.lineWidth = 7;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    if(errores === 7){
        /* Dibujo de base */
        pincel.beginPath()
        pincel.moveTo(400,370);
        pincel.lineTo(694,370);
        pincel.stroke();
        /* Dibujo de mástil */ 
        pincel.beginPath()
        pincel.moveTo(474,20);
        pincel.lineTo(474,368);
        pincel.stroke();
        /* Dibujo de colgante */ 
        pincel.beginPath()
        pincel.moveTo(476,20);
        pincel.lineTo(651,20);
        pincel.stroke();
        /* Dibujo de soga */ 
        pincel.beginPath()
        pincel.moveTo(651,20);
        pincel.lineTo(651,70);
        pincel.stroke();  
       let img1 = new Image();
        img1.src = "../assets/flork pensando.jpg";
        img1.onload = function() {
            pincel.drawImage(img1,50,50,290,290);
       }
    } else if(errores === 6){
        /* Dibujo de cabeza */ 
        pincel.beginPath()
        pincel.arc(651,114,40,0,2*3.14);
        pincel.stroke();
       let img2 = new Image();
        img2.src = "../assets/flork de brazos cruzados.jpg";
        img2.onload = function() {
            pincel.drawImage(img2,50,50,290,290);
        }
    }else if(errores === 5){
        /* Dibujo de tronco */ 
        pincel.clearRect(0,0,290,290);
        pincel.beginPath()
        pincel.moveTo(651,155);
        pincel.lineTo(651,280);
        pincel.stroke();
        let img3 = new Image();
        img3.src = "../assets/flork enojado.jpg";
        img3.onload = function() {
            pincel.drawImage(img3,50,150,290,290);
        }
    }else if(errores === 4){
        /* Dibujo de pierna izquierda */ 
        pincel.clearRect(0,0,340,440);
        pincel.beginPath()
        pincel.moveTo(651,280);
        pincel.lineTo(600,331);
        pincel.stroke();
        let img4 = new Image();
        img4.src = "../assets/flork pelos.jpg";
        img4.onload = function() {
            pincel.drawImage(img4, 800, 130,290,290);
        }
    }else if(errores === 3){
        /* Dibujo de pierna derecha */ 
        pincel.clearRect(800,180,900,250); 
        pincel.beginPath()
        pincel.moveTo(651,280);
        pincel.lineTo(702,331);
        pincel.stroke();
        let img5 = new Image();
        img5.src = "../assets/flork llorando.jpg";
        img5.onload = function() {
            pincel.drawImage(img5,70,70,250,250);
        }
    }else if(errores === 2){
         /* Dibujo de brazo izquierdo */
         pincel.clearRect(70,70,290,290); 
         pincel.beginPath()
         pincel.moveTo(649,175);
         pincel.lineTo(600,226);
         pincel.stroke();
         let img6 = new Image();
         img6.src = "../assets/flork muy triste.jpg";
         img6.onload = function() {
            pincel.drawImage(img6,800, 130,290,290);
        }
    }else if(errores === 1){
        /* Dibujo de brazo derecho */ 
        pincel.beginPath()
        pincel.moveTo(652,175);
        pincel.lineTo(702,226);
        pincel.stroke();
        finDelJuego();
   }
    }


