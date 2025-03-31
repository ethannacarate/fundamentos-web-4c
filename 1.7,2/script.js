// 1. Tabla de multiplicar personalizada
function tablaDeMultiplicar() {
    // Solicita al usuario un número
    let numero = parseInt(prompt("Ingresa un número para generar su tabla de multiplicar:"));

    // Genera la tabla de multiplicar del 1 al 10
    let resultado = "Tabla de multiplicar del " + numero + ":\n";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`; // Calcula y agrega cada línea de la tabla
    }

    // Muestra la tabla en una alerta
    alert(resultado);
}

// 2. Sumar N números ingresados por el usuario
function sumarNumeros() {
    // Solicita al usuario cuántos números desea sumar
    let cantidad = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0; // Variable para almacenar la suma

    // Solicita los números y los suma
    for (let i = 1; i <= cantidad; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`)); // Solicita cada número
        suma += numero; // Suma el número ingresado
    }

    // Muestra la suma total en una alerta
    alert("La suma total es: " + suma);
}

// 3. Mostrar los números pares entre dos valores dados
function mostrarNumerosPares() {
    // Solicita al usuario el número inicial y final
    let inicio = parseInt(prompt("Ingresa el número inicial:"));
    let fin = parseInt(prompt("Ingresa el número final:"));
    let pares = []; // Arreglo para almacenar los números pares

    // Encuentra los números pares entre el rango dado
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) { // Verifica si el número es par
            pares.push(i); // Agrega el número par al arreglo
        }
    }

    // Muestra los números pares en una alerta
    alert("Números pares entre " + inicio + " y " + fin + ": " + pares.join(", "));
}