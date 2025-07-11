const prompt = require('prompt-sync')();

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

let notas = prompt("Ingrese sus notas separadas por comas: ").split(","); //* Separa las notas ingresadas por el usuario
let promedio = calcularPromedio(notas); //* Calcula el promedio de las notas

console.log("Promedio de notas: " + promedio); //* Imprime el promedio de las notas
