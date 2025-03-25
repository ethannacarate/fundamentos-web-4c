// Definición de la función 'accion'
function accion() {
    // Solicita al usuario que ingrese un número mediante un cuadro de diálogo 'prompt'
    // Convierte el valor ingresado (que es un string) a un número entero con 'parseInt'
    let numero = parseInt(prompt("Ingrese un número:"));

    // Verifica si el número ingresado es par o impar
    if (numero % 2 === 0) {
        // Si el número es divisible entre 2, muestra un mensaje indicando que es par
        alert("El número es par");
    } else {
        // Si no es divisible entre 2, muestra un mensaje indicando que es impar
        alert("El número es impar");
    }
}

function calculadoraIMC() {
    // Solicita al usuario que ingrese su peso en kilogramos
    let peso = parseFloat(prompt("Ingrese su peso en kilogramos (kg):"));

    // Solicita al usuario que ingrese su altura en metros
    let altura = parseFloat(prompt("Ingrese su altura en metros (m):"));

    // Calcula el IMC usando la fórmula: peso / (altura * altura)
    let imc = peso / (altura * altura);

    // Determina la categoría del IMC e imprime el resultado
    if (imc < 18.5) {
        alert("Bajo peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    } else if (imc >= 25) {
        alert("Sobrepeso");
    } else {
        alert("Datos inválidos");
    }
}

function calculadoraNotas() {
    // Solicita al usuario que ingrese tres notas entre 1 y 7
    let nota1 = parseFloat(prompt("Ingrese la primera nota (entre 1 y 7):"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota (entre 1 y 7):"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota (entre 1 y 7):"));

    // Calcula el promedio de las tres notas
    let promedio = (nota1 + nota2 + nota3) / 3;

    // Verifica si el promedio es menor a 4.0 o mayor o igual a 4.0
    if (promedio < 4.0) {
        alert("Reprobado");
    } else {
        alert("Aprobado");
    }
}

