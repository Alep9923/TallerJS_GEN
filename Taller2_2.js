const prompt = require('prompt-sync')();

//& Ejercicio 2: Validar Contrasña
//* Desarrollar un formulario de registro de usuario, en el cual se debe ingresar el nombre, apellido, email, contraseña y confirmar contraseña. Crea una función validarPassword(password, confirmPassword) que reciba la contraseña y valide si cumple con tener al menos 8 caractersiticas, un número y una mayuscula

function validarPassword(password, confirmPassword) {
  let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; 
        //* ^: Indica el inicio de la cadena.
        //* (?=.*\d): Asegura que haya al menos un dígito (\d).
        //* (?=.*[a-z]): Asegura que haya al menos una letra minúscula.
        //* (?=.*[A-Z]): Asegura que haya al menos una letra mayúscula.
        //* [0-9a-zA-Z]{8,}: La cadena debe contener solo caracteres alfanuméricos (dígitos y letras) y tener una longitud mínima de 8 caracteres.
        //* $: Indica el final de la cadena.
  if (regex.test(password) && password === confirmPassword) {
    return "Contraseña valida";
  } else {
    return "Contraseña invalida";
  }
}

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let email = prompt("Ingrese su email: ");

let password = prompt("Ingrese su contraseña: ");
let confirmPassword = prompt("Confirme su contraseña: ");

if (validarPassword(password, confirmPassword)) {
  console.log("Contraseña validada");
} else {
  console.log("Contraseña invalida");
}