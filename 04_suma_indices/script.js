function suma_indices() { // Identificador de la función
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Declaración de un arreglo
    let suma = 0; // Declaración de una variable para almacenar la suma
    let indices = ""; // Variable para almacenar los índices sumados
    for (let i = 0; i < arreglo.length; i++) { // Iterar sobre los índices del arreglo
        suma += i; // Sumar los índices
        indices += i + (i < arreglo.length - 1 ? " + " : ""); // Construir la cadena de índices
    }
    alert("Índices sumados: " + indices + "\nLa suma de los índices es: " + suma); // Mostrar los índices y el resultado
}

function producto_pares() { // Identificador de la función
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Declaración de un arreglo
    let producto = 1; // Declaración de una variable para almacenar el producto
    let pares = ""; // Variable para almacenar los números pares multiplicados
    for (let i = 0; i < arreglo.length; i++) { // Iterar sobre los elementos del arreglo
        if (arreglo[i] % 2 === 0) { // Verificar si el elemento es par
            producto *= arreglo[i]; // Multiplicar los valores pares
            pares += arreglo[i] + (i < arreglo.length - 1 ? " * " : ""); // Construir la cadena de números pares
        }
    }
    alert("Números pares multiplicados: " + pares + "\nEl producto de los valores pares es: " + producto); // Mostrar los pares y el resultado
}