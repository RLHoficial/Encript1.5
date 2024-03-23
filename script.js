function encrypt() {
  var message = document.getElementById('message').value;
  var encryptedMessage = '';
  var shift = 3; // Cambiar el número de desplazamiento según sea necesario

for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedMessage += message.charAt(i);
    }
  }

  document.getElementById('output').value = encryptedMessage;
}

function decrypt() {
  var message = document.getElementById('message').value;
  var decryptedMessage = '';
  var shift = 3; // Cambiar el número de desplazamiento según sea necesario

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      decryptedMessage += message.charAt(i);
    }
  }

  document.getElementById('output').value = decryptedMessage;
}

function copy() {
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
  alert("Texto copiado: " + copyText.value);
}
//const clave = 'RUBEN';
//function encrypt(message, key) {
//  var message = document.getElementById('message').value;
//  var decryptedMessage = '';
//  var shift = 3; // Cambiar el número de desplazamiento según sea necesario
//  const CryptoJS = require('crypto-js');
//  const encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();
//return encryptedMessage;
//  return document.getElementById('output').value = encryptedMessage;
//}

//function decrypt(encryptedMessage, key) {
//  var message = document.getElementById('message').value;
//  var decryptedMessage = '';
//  var shift = 3; // Cambiar el número de desplazamiento según sea necesario
//  const CryptoJS = require('crypto-js');
//  const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
//  const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
//return decryptedMessage;
//  return document.getElementById('output').value = decryptedMessage;
//}

// Ejemplo de uso
//const mensajeOriginal = '¡Hola, mundo!';
//const mensajeEncriptado = encrypt(mensajeOriginal, clave);
//console.log('Mensaje encriptado:', mensajeEncriptado);
//const mensajeDesencriptado = decrypt(mensajeEncriptado, clave);
//console.log('Mensaje desencriptado:', mensajeDesencriptado);
