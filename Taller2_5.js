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

