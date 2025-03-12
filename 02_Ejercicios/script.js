console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    // Tu código aquí
    let ahora = parseInt(prompt("ingresa el año acual: "));
    let fecha_nac = parseInt(prompt("ingresa el año de nacimiento: "));
    alert ("tu edad es: " + (ahora - fecha_nac));
}
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
        let var1 = prompt("ingresa un valor: ");//VALOR
        let var2 = var1;//asignacion de var 1 a var 2
        alert("el valor de var2 es: " + var2);
    }
    // Tu código aquí
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1','num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
let num1 = parseInt(prompt("Ingresa el 1er valor: "));
    let num2 = parseInt(prompt("Ingresa el 2do valor: "));
    let num3 = parseInt(prompt("Ingresa el 3er valor: "));
    let suma = num1 + num2 + num3; // Suma
    let resta = num3 - num1; // Resta
    let multiplicacion = num2 * num3; // Multiplicación
    let division = num1 / 120; // División
    alert("Resultados:\nSuma (" + num1 + " + " + num2 + " + " + num3 + "): " + suma + "\nResta (" + num3 + " - " + num1 + "): " + resta + "\nMultiplicación (" + num2 + " * " + num3 + "): " + multiplicacion + "\nDivisión (" + num1 + " / " + "120" + "): " + division);
    // Tu código aquí
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
    // Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
    function manipularCadenas() {
    let direccion = prompt("Ingresa la dirección:");
    let numero_casa = prompt("Ingresa el número de casa:");
    let mensaje = "La dirección es " + direccion + " y el número de casa es " + numero_casa;
    alert("Longitud del mensaje: " + mensaje.length);
    alert("Antepenúltimo carácter del mensaje: " + mensaje[mensaje.length - 3]);
    }