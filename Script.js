const inputMensaje = document.querySelector(".input-texto");
const inputResultado = document.querySelector(".Mensaje");
const btnEncriptar = document.querySelector(".encripta");
const btnDesencriptar = document.querySelector(".desencripta");
const btnCopiar = document.querySelector(".copiar");
function encriptado (){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
}
function desencriptado (){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}
function copy () {
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
    alert ("!Copiado¡");
}
btnEncriptar.onclick = encriptado;
btnDesencriptar.onclick = desencriptado;
btnCopiar.onclick = copy;


