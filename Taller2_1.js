const prompt = require('prompt-sync')();

//& Ejercicio 1: Calculadora de Propinas
//* Desarrollar un app para calcular propinas de un restaurante, crea una función calcular(total, porcentaje) que reciba el total de la factura y el porcentaje de propina, y retorne el valor de la propina.

total = parseFloat(prompt("Ingrese el total de la factura: ")); //* Se usa parseFloat para convertir el input del usuario a un número decimal
porcentaje = parseFloat(prompt("Ingrese el porcentaje de propina: "));

function calcular(total, porcentaje) {  
  let propina = (total * porcentaje) / 100;
  return propina;
}

let propinaCalculada = calcular(total, porcentaje);
console.log("La propina es: " + propinaCalculada);