window.cipher = {
  encode: (numberOffset, cifrarMensaje) => {
  	if (numberOffset !== undefined && cifrarMensaje !== undefined) {
	  	// mensajeCifrado es una variable para ir guardando cada caracter que se va cifrando
	  	mensajeCifrado = ""
	  	// cifrarMensaje es una variable para guardar el mensaje que el usuario quiere cifrar
	  	/* Se establece un loop que comienza desde 0 (i = 0) y va contando de 1 en 1 (i++)
	  	   hasta igualar la cantidad de caracteres que tiene el mensaje que se debe cifrar */
	  	for (var i = 0; i < cifrarMensaje.length; i++) {
	  	  /* Se evalua si el caracter en la posición "i" del string (mensaje a cifrar) 
	  	     una letra entre la a y la Z considerando mayúsculas y minúsculas */
	  	  if (cifrarMensaje.charAt(i).match(/[a-z]/i) !== null) {
	  	    /* Se evalua el caracter en la posición "i" del string (mensaje a cifrar) 
	  	     en mayúscula para obtener su valor en código ASCII */
	  	    asciiNumber  = cifrarMensaje.charAt(i).toUpperCase().charCodeAt();
	  	    /* Se cálcula utilizando la formula del Cifrado Cesar el valor ASCII del 
	  	       del caracter cifrado */
	  	    valorASCIIoffset = (asciiNumber - 65 + parseInt(numberOffset)) % 26 + 65;
	  	    // Se va agregando cada caracter cifrado a la variable mensajeCifrado
	  	  mensajeCifrado += String.fromCharCode(valorASCIIoffset);
	  	    // Se evalúa si el caracter en la posición "i" del string es un espacio
	  	  }else if ( cifrarMensaje.charAt(i) === " ") {
	  	    // Se agrega un espacio al mensaje que se está cifrando
	  	  mensajeCifrado += " ";
	  	  }
	  	}
	  	
	  	//numberOffset = document.getElementById("offsetText").value;
	  	return mensajeCifrado;
  	}
  },
  decode: (numberOffset, descifrarMensaje) => {
  	if (numberOffset !== undefined) {
  		// mensajeDecodificado es una variable para ir guardando cada caracter que se va descifrando
	  	mensajeDecodificado = "";
	  	for (var i = 0; i < descifrarMensaje.length; i++) {
	  	  /* Se evalua si el caracter en la posición "i" del string (mensaje a cifrar) 
	  	     una letra entre la a y la Z considerando mayúsculas y minúsculas */
	  	  if (descifrarMensaje.charAt(i).match(/[a-z]/i) !== null) {
	  	    /* Se evalua el caracter en la posición "i" del string (mensaje a decifrar) 
	  	     en mayúscula para obtener su valor en código ASCII */
	  	    asciiNumber  = descifrarMensaje.charAt(i).toUpperCase().charCodeAt();
	  	    /* Se cálcula utilizando la formula del Cifrado Cesar el valor ASCII del 
	  	       del caracter cifrado */
	  	    valorASCIIoffset = (asciiNumber + 65 - parseInt(numberOffset)) % 26 + 65;
	  	    // Se va agregando cada caracter cifrado a la variable mensajeDecodificado
	  	    mensajeDecodificado += String.fromCharCode(valorASCIIoffset);
	  	    // Se evalúa si el caracter en la posición "i" del string es un espacio
	  		}else if ( descifrarMensaje.charAt(i) === " ") {
	  	    // Se agrega un espacio al mensaje que se está cifrando
	  	    mensajeDecodificado += " ";
	  	  }
	  	}
	  	 
	  	return mensajeDecodificado;
	  	//valorASCIIoffset = (asciiNumber - 65 + numberOffset) % 26 + 65;
	  	//descifrarMensaje = String.fromCharCode(valorASCIIoffset);
	  	// Aquí se desencripta el mensaje guardado en la variable cifrarMensaje utilizando 
	  	// cifrarMensaje es una variable para guardar el mensaje que el usuario quiere cifrar
	  	//un loop
  	}
  }
};
