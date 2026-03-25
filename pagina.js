const boton = document.getElementById("boton");
const colores = ["brown", "green", "red", "blue", "yellow", "purple", "orange", "white", "black"];
let indice = 0;

boton.addEventListener("click", cambiarColor);

function cambiarColor() {
    document.body.style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
}
