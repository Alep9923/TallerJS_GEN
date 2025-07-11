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
}

//& Ejericio 4: Calcular Promedio de Notas
//* Crear una función calcularPromedio(notas) que reciba un array de notas dado por el usuario separado por comas (,). La función debe retornar el promedio de las notas redondeado a 2 decimales.

function calcularPromedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) { //* Recorre el array de notas
    suma += parseFloat(notas[i]); //* Convierte el string a float para sumarlo
  }
  let promedio = suma / notas.length; //* Calcula el promedio dado nota.lenght indica el numero de notas
  return promedio.toFixed(2); //* Redondea el promedio a 2 decimales
}

let notas = prompt("Ingrese sus notas separadas por comas: ").split(",");
let promedio = calcularPromedio(notas);

console.log("Promedio de notas: " + promedio);

//& Ejercicio 5: Filtrar usuarios por edad
//* Dado un array de usuarios compuestos por nombre, edad y email, crear una función filtarUsuarios(usuarios,edadMinima) que retorne los usuarios que cumplan con la edad minima, la edad minima será dada por el usuario, es decir, si el usuario escribe 18 debería decirle que personas de la lista cumplen con tener más de 18

function filtarUsuarios(usuarios, edadMinima) {
  let result = []; //* Crea un array vacio para almacenar los usuarios que cumplan con la edad minima
  for (let i = 0; i < usuarios.length; i++) { //* Recorre el array de usuarios
    if (usuarios[i].edad > edadMinima) { //* Compara la edad del usuario con la edad minima
      result.push(usuarios[i]); //* Agrega el usuario al array resultante
  }
  return result; //* Retorna el array resultante
}
  }
  let usuarios = [
    { nombre: "Alex", edad: 25, email: "aleja@gmail.com" },
    { nombre: "Juan", edad: 18, email: "juan@gmail.com" },
    { nombre: "Ana", edad: 30, email: "ana@gmail.com" },
    { nombre: "Pedro", edad: 20, email: "pedro@gmail.com" },
    { nombre: "Maria", edad: 28, email: "maria@gmail.com" },
  ];
  let edadMinima = parseInt(prompt("Ingrese la edad minima: ")); //* Convierte el string a entero
  let usuariosFiltrados = filtarUsuarios(usuarios, edadMinima); //* Llama a la funcion filtarUsuarios
  console.log("Usuarios filtrados: " + JSON.stringify(usuariosFiltrados)); //* Imprime el array de usuarios filtrados en formato JSON

