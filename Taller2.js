//& Ejercicio 1: Calculadora de Propinas
//* Desarrollar un app para calcular propinas de un restaurante, crea una función calcular(total, porcentaje) que reciba el total de la factura y el porcentaje de propina, y retorne el valor de la propina.

total = input("Ingrese el total de la factura: ");
procentaje = input("Ingrese el porcentaje de propina: ");

function calcular(total, porcentaje) {  
  let propina = (total * porcentaje) / 100;
  return propina;
}

console.log("La propina es: " + calcular(total, procentaje));