//& Ejercicio 1: Calculadora de Propinas
//* Desarrollar un app para calcular propinas de un restaurante, crea una función calcular(total, porcentaje) que reciba el total de la factura y el porcentaje de propina, y retorne el valor de la propina.

total = input("Ingrese el total de la factura: ");
procentaje = input("Ingrese el porcentaje de propina: ");

function calcular(total, porcentaje) {  
  let propina = (total * porcentaje) / 100;
  return propina;
}

console.log("La propina es: " + calcular(total, procentaje));

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

//& Ejercicio 3: Buscar producto en inventario
//* Crear una función buscarProducto(nombre, inventario) que retorne el producto existente, o null si no existe. El inbentario debería predefinido.

let inventario = [
  { nombre: "Papas", precio: 15 },
  { nombre: "Arroz", precio: 25 },
  { nombre: "Queso", precio: 35 },
  { nombre: "Tomate", precio: 10 },
  { nombre: "Salsa", precio: 125 },
];

function buscarProducto(nombre, inventario) {
  for (let i = 0; i < inventario.length; i++) { //* Recorre el array de inventario
    if (inventario[i].nombre === nombre) { //* Compara el nombre del producto con el nombre ingresado
      return inventario[i]; //* Retorna el producto si es encontrado
    }
  }
  return null;
}

let producto = buscarProducto("Queso", inventario);

if (producto) {
  console.log("Producto encontrado: " + producto.nombre + " - " + producto.precio);
} else {
  console.log("Producto no encontrado");