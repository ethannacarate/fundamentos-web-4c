// Función que imprime los números del 1 hasta n
function imprimirHastaN() {
    // Solicita al usuario un número entero
    let n = parseInt(prompt("Ingresa un número (n):"));
    let numeros = []; // Arreglo para almacenar los números
    let i = 1; // Inicializa el contador en 1

    // Bucle que agrega los números del 1 hasta n al arreglo
    while (i <= n) {
        numeros.push(i);
        i++;
    }

    // Muestra los números en una alerta
    alert("Números del 1 al " + n + ": " + numeros.join(", "));
}

// Función que genera una cuenta regresiva desde n hasta 1
function cuentaRegresiva() {
    // Solicita al usuario un número entero
    let n = parseInt(prompt("Ingresa un número (n):"));
    let numeros = []; // Arreglo para almacenar los números

    // Bucle que agrega los números desde n hasta 1 al arreglo
    while (n >= 1) {
        numeros.push(n);
        n--;
    }

    // Muestra la cuenta regresiva en una alerta
    alert("Cuenta regresiva: " + numeros.join(", "));
}

// Función que calcula la suma de los primeros n números
function sumarPrimerosN() {
    // Solicita al usuario un número entero
    let n = parseInt(prompt("Ingresa un número (n):"));
    let suma = 0; // Variable para almacenar la suma

    // Bucle que suma los números del 1 hasta n   
    for (let i = 1; i <= n; i++) {
        suma += i;
    }

    // Muestra el resultado en una alerta
    alert("La suma de los primeros " + n + " números es: " + suma);
}

// Función que imprime los múltiplos de 2 desde 1 hasta n
function imprimirMultiplosDe2() {
    // Solicita al usuario un número entero
    let n = parseInt(prompt("Ingresa un número (n):"));
    let multiplos = []; // Arreglo para almacenar los múltiplos de 2

    // Bucle que verifica si un número es múltiplo de 2 y lo agrega al arreglo
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) { // Verifica si el número es divisible entre 2
            multiplos.push(i);
        }
    }

    // Muestra los múltiplos de 2 en una alerta
    alert("Múltiplos de 2 del 1 al " + n + ": " + multiplos.join(", "));
}
