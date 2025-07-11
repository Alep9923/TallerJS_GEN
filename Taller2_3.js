const prompt = require('prompt-sync')();

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