alert("Este encriptador/desencriptador no funciona con mayusculas ni acentos")

// Función para encriptar
function encriptarTexto(texto) {
  let resultado = texto;
  resultado = resultado.replace(/e/g, "enter");
  resultado = resultado.replace(/i/g, "imes");
  resultado = resultado.replace(/a/g, "ai");
  resultado = resultado.replace(/o/g, "ober");
  resultado = resultado.replace(/u/g, "ufat");
  return resultado;
}

// Función para desencriptar
function desencriptarTexto(texto) {
  let resultado = texto;
  resultado = resultado.replace(/enter/g, "e");
  resultado = resultado.replace(/imes/g, "i");
  resultado = resultado.replace(/ai/g, "a");
  resultado = resultado.replace(/ober/g, "o");
  resultado = resultado.replace(/ufat/g, "u");
  return resultado;
}

// Obtener elementos HTML
const inputTexto = document.getElementById("texto");
const botonEncriptar = document.getElementById("encriptar");
const botonDesencriptar = document.getElementById("desencriptar");
const resultado = document.getElementById("resultado");
const botonCopiar = document.getElementById("copiar");

// Función para actualizar el resultado
function actualizarResultado(texto) {
  resultado.value = texto;
}

// Función para copiar el resultado al portapapeles
function copiarResultado() {
  resultado.select();
  document.execCommand("copy");
  alert("Texto copiado al portapapeles");
}

// Eventos de los botones
botonEncriptar.addEventListener("click", function() {
  const textoEncriptado = encriptarTexto(inputTexto.value);
  actualizarResultado(textoEncriptado);
});

botonDesencriptar.addEventListener("click", function() {
  const textoDesencriptado = desencriptarTexto(inputTexto.value);
  actualizarResultado(textoDesencriptado);
});

botonCopiar.addEventListener("click", function() {
  copiarResultado();
});
