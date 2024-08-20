var textoIngresado = document.querySelector("#texto");
var textoResultado = document.querySelector("#textoResultado");

var btnEncriptar = document.querySelector("#encri");
var btnDesencriptar = document.querySelector("#desencri");
var btnCopiar = document.querySelector("#copiar");



function encriptar ()
{
  let texto = textoIngresado.value.toLowerCase();
  let textoEncriptado = texto
  .replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("o", "ober")
  .replaceAll("a", "ai")
  .replaceAll("u", "ufat");
  
  document.getElementById("resuelto").style.visibility  = "visible";
  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";
  textoResultado.value = textoEncriptado;
  document.getElementById("texto").value = '';

}

function desencriptar ()
{
  let textoEncriptado = textoIngresado.value.toLowerCase();
  let texto = textoEncriptado
  .replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ober", "o")
  .replaceAll("ai", "a")
  .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";
  textoResultado.value = texto;
  document.getElementById("texto").value = '';
}

function copiar () {
  let textoEncriptado = textoResultado.value;
  navigator.clipboard.writeText(textoEncriptado);
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;