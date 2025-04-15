function calcularSumaPrimerosN() { //ejercicio 1

    let n = parseInt(prompt("Ingresa un número entero positivo (N):"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, ingresa un número entero positivo válido.");
        return;
    }

    let suma = (n * (n + 1)) / 2;

    alert("La suma de los primeros " + n + " números naturales es: " + suma);
}

function escribir100Pares() {  //ejercicio 2
    let pares = [];
    for (let i = 1; i <= 100; i++) {
        pares.push(i * 2);
    }
    alert("Los 100 primeros números pares son: " + pares.join(", "));
}


function escribir100Impares() { //ejercicio 3
    let impares = [];
    for (let i = 0; i < 100; i++) {
        impares.push(i * 2 + 1);
    }
    alert("Los 100 primeros números impares son: " + impares.join(", "));
}

function sumar5Numeros() { //ejercicio 4
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`));
        suma += numero;
    }
    alert("La suma de los 5 números es: " + suma);
}


function sumarNNumeros() { //ejercicio 5
    let n = parseInt(prompt("¿Cuántos números deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i}:`));
        suma += numero;
    }
    alert("La suma de los " + n + " números es: " + suma);
}


function operacionesCon2Numeros() { //ejercicio 6
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let opcion = prompt("Elige una operación: sumar, restar, multiplicar, dividir").toLowerCase();

    let resultado;
    switch (opcion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir entre 0";
            break;
        default:
            resultado = "Operación no válida";
    }
    alert("El resultado es: " + resultado);
}


function sumarNumerosPares() { //ejercicio 7
    let n = parseInt(prompt("¿Cuántos números pares deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * 2;
    }
    alert("La suma de los " + n + " números pares es: " + suma);
}



function sumarN() { //ejercicio 8
    let n = parseInt(prompt("Ingresa la cantidad de números pares a sumar:")); //solicita que se ingrese una cantidad de números pares
    let suma = 0; //inicializa la variable suma
    let count = 0; //inicializa la variable count
    let numeroPar = 2; //inicializa la variable numero
    let array = [] // lista donde se guardaran los números pares

    while (count < n) { //bucle para que el count llegue a la canridad de números ingresados por el usaurio
        suma += numeroPar; //el suma el valor del numero par
        numeroPar += 2; //aumenta el numero par en 2
        count++; //aumenta la cuenta en 1
        array.push(numeroPar - 2); //guarda el valor de los números pares
    }
    alert("La suma de los " + n + " primeros números pares es: " + suma + `\nLista de números pares: ${array.join(", ")}`);
}

function sumarNumerosImpares() { //ejercicio 9
    let n = parseInt(prompt("¿Cuántos números impares deseas sumar?"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += i * 2 + 1;
    }
    alert("La suma de los " + n + " números impares es: " + suma);
}

function sumarPrimerosImpares() { //ejercicio 10
    let n = parseInt(prompt("¿Cuántos números impares deseas sumar?"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += i * 2 + 1;
    }
    alert("La suma de los primeros " + n + " números impares es: " + suma);
}

function sumarmultiplosde3() { //ejercicio 11
    let n = parseInt(prompt("¿Cuántos múltiplos de 3 deseas sumar?"));
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * 3;
    }
    alert("La suma de los primeros " + n + " múltiplos de 3 es: " + suma);
}

function calcularFactorial() { //ejercicio 12
    let n = parseInt(prompt("Ingresa un número para calcular su factorial:"));
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    alert("El factorial de " + n + " es: " + factorial);
}

function celsiusAFahrenheit() { //ejercicio 13
    let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
    let fahrenheit = (celsius * 9 / 5) + 32;
    alert(celsius + "°C equivalen a " + fahrenheit + "°F");
}

function palabraMasLarga() { //ejercicio 14
    let frase = prompt("Ingresa una frase:");
    let palabras = frase.split(" ");
    let palabraLarga = palabras.reduce((a, b) => a.length >= b.length ? a : b);
    alert("La palabra más larga es: " + palabraLarga);
}

function imprimirNumerosPrimos() { //ejercicio 15
    let n = parseInt(prompt("Ingresa un número:"));
    let primos = [];
    for (let i = 2; i <= n; i++) {
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) primos.push(i);
    }
    alert("Números primos menores o iguales a " + n + ": " + primos.join(", "));
}

function contadorDeCaracteres() { //ejercicio 16
    let cadena = prompt("Ingresa una cadena de texto:");
    let contador = {};
    for (let char of cadena) {
        contador[char] = (contador[char] || 0) + 1;
    }
    alert("Conteo de caracteres: " + JSON.stringify(contador));
}

function imprimirValoresPares() { //ejercicio 17
    let valores = prompt("Ingresa valores separados por comas:").split(",").map(Number);
    let pares = valores.filter(valor => valor % 2 === 0);
    alert("Valores pares: " + pares.join(", "));
}