let name;
let cifrarMensaje;
let descifrarMensaje;
let numberOffset;

function load(){ 
  
  var login_button = document.getElementById("loginButton");
  login_button.addEventListener("click", setName, false);

  var cipher_button = document.getElementById("cipherButton");
  cipher_button.addEventListener("click", encryptMessage, false);
  
  
  var descifrar_button = document.getElementById("descifrarButton");
  descifrar_button.addEventListener("click", decodeMessage, false);
}

function setName(){
  name = document.getElementById("myName").value;
}

function encryptMessage(){

  numberOffset = document.getElementById("offsetText").value;
  // mensajeCifrado es una variable para ir guardando cada caracter que se va cifrando
  mensajeCifrado = ""
  // cifrarMensaje es una variable para guardar el mensaje que el usuario quiere cifrar
  cifrarMensaje  = document.getElementById("cifrarMensaje").value;
  /* Se establece un loop que comienza desde 0 (i = 0) y va contando de 1 en 1 (i++)
     hasta igualar la cantidad de caracteres que tiene el mensaje que se debe cifrar */
  for (var i = 0; i < cifrarMensaje.length; i++) {
    /* Se evalua si el caracter en la posición "i" del string (mensaje a cifrar) 
       una letra entre la a y la Z considerando mayúsculas y minúsculas */
    if (cifrarMensaje.charAt(i).match(/[a-z]/i) !== null) {
      /* Se evalua el caracter en la posición "i" del string (mensaje a cifrar) 
       en mayúcula a la función charToAscii para obtener su valor en código ASCII */
      asciiNumber  = charToAscii(cifrarMensaje.charAt(i).toUpperCase());
      /* Se cálcula utilizando la formula del Cifrado Cesar el valor ASCII del 
         del caracter cifrado */
      valorASCIIoffset = (asciiNumber - 65 + numberOffset) % 26 + 65;
      // Se va agregando cada caracter cifrado a la variable mensajeCifrado
      mensajeCifrado += String.fromCharCode(valorASCIIoffset);
    // Se evalúa si el caracter en la posición "i" del string es un espacio
    }else if ( cifrarMensaje.charAt(i) === " ") {
      // Se agrega un espacio al mensaje que se está cifrando
      mensajeCifrado += " ";
    }
  }

  // Aquí se encripta el mensaje guardado en la variable cifrarMensaje utilizando un loop

  document.getElementById("mensajeCifrado").value = mensajeCifrado;
 

  //numberOffset = document.getElementById("offsetText").value;

}

function decodeMessage(){
  descifrarMensaje = document.getElementById("mensajeCifrado").value;
  descifrarMensaje = descifrarMensaje.toUpperCase();
  asciiNumber      = descifrarMensaje.charCodeAt();

  valorASCIIoffset = (asciiNumber - 65 + numberOffset) % 26 + 65;
  descifrarMensaje = String.fromCharCode(valorASCIIoffset);
  // Aquí se desencripta el mensaje guardado en la variable cifrarMensaje utilizando 
  
  document.getElementById("cifrarMensaje").value = descifrarMensaje; 

  //un loop
}

function charToAscii(charValue){
  asciiNumber = charValue.charCodeAt();
  return asciiNumber;
  // cifrarMensaje 
  // cifrarMensaje.
  //let string= texto;
//let valorASCII= string.charCodeAt(0);//imprime 65
//let letra= string.fromCharCode(65); //imprime A
//let offset=parseInt(prompt("¿Cuántos espacios?"));
//let valorASCIIoffset=(valorASCII-65+offset)%26+65;
//imprime 68, código de ASCII + offset
//let letraCodificada= String.fromCharCode(valorASCIIoffset);
//console.log(letraCodificada);
 //texCharCoAT
//if para minusculas (tolowercase)
}

function asciiToChar(){

}

document.addEventListener("DOMContentLoaded", load, false);