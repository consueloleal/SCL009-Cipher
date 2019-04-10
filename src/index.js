let cifrarMensaje;
let descifrarMensaje;
let numberOffset;

function load(){   
  var cifrar_input = document.getElementById("cifrarMensaje");
  cifrar_input.addEventListener("change", getMessageToCipher, false);

  var descifrar_input = document.getElementById("mensajeCifrado");
  descifrar_input.addEventListener("change", getMessageToDecode, false);

  var offset_input = document.getElementById("offsetText");
  offset_input.addEventListener("change", getOffsetText, false);

  var cipher_button = document.getElementById("cipherButton");
  cipher_button.addEventListener("click", encryptMessage, false);
  
  var descifrar_button = document.getElementById("descifrarButton");
  descifrar_button.addEventListener("click", decryptMessage, false);

  var clean_button = document.getElementById("cleanButton");
  clean_button.addEventListener("click", cleanTextFields, false);
}

function encryptMessage(){
   encryptedMessage = window.cipher.encode(numberOffset, cifrarMensaje);
   document.getElementById("mensajeCifrado").value = encryptedMessage;
   var event = new Event('change');
   document.getElementById("cifrarMensaje").dispatchEvent(event);
}

function decryptMessage(){
  decryptedMessage = window.cipher.decode(numberOffset, descifrarMensaje);
  document.getElementById("cifrarMensaje").value = decryptedMessage;
  var event = new Event('change');
  document.getElementById("mensajeCifrado").dispatchEvent(event);
}

function getMessageToCipher(){
   cifrarMensaje = document.getElementById("cifrarMensaje").value;
}

function getMessageToDecode(){
   descifrarMensaje = document.getElementById("mensajeCifrado").value;
}

function getOffsetText(){
   numberOffset = document.getElementById("offsetText").value;
}

function cleanTextFields(){
  document.getElementById("cifrarMensaje").value = null;
  document.getElementById("mensajeCifrado").value = null;
  document.getElementById("offsetText").value = null;
}

document.addEventListener("DOMContentLoaded", load, false);