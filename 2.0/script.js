/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// referencia ul
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = []; //ejercicio 2
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los elementos
    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.innerText = `${carrito[i]}`;
        lista.appendChild(item);
    }
    const input = document.getElementById("lista2");
    const valor = input.value.trim(); //trim elimina espacios en blanco al inicio y al final / guardo valor sin espacios extras
    if (valor === "") return; // Si el valor está vacío, no hacemos nada
    carrito.push(valor); // Agrego el valor al final

    input.value = ""; // Limpio el campo de entrada
    input.focus(); // Agregamos foco hacia el input
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop(); // Elimina el último elemento del arreglo
        mostrarListaCompra(); // ← Esto actualiza la lista en pantalla
    }
}

// Ejercicio 3 y 4
let colores = [];

function mostrar_lista_colores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    colores.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    console.log(colores);
    mostrar_lista_colores();
}


let colores2 = [];

function mostrar_lista_colores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";

    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    colores2.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input

    mostrar_lista_colores2();
}

function eliminar_primer_elemento() {
    if (colores2.length > 0) {
        colores2.shift();
    }
    mostrar_lista_colores2();
}


//ejercicio 5
let numeros = [10, 20, 30];

function mostrar_lista_numeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los elementos

    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") {
        return;
    } // Agregar valor al final

    numeros.unshift(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros()
}

function eliminar_primer_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrar_lista_numeros(); // Actualiza la lista en pantalla
}

function eliminar_ultimo_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.pop();
    }
    mostrar_lista_numeros(); // Actualiza la lista en pantalla
}

function agregar_ultimo_elemento_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim(); // guardo valor sin espacios extras

    if (valor === "") return;


    numeros.push(valor);
    input.value = "";
    input.focus(); // agrega foco hacia el input
    mostrar_lista_numeros();
}

// ejercicio 6
let orden = [];

function mostrarListaOrden() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = "";
    for (let i = 0; i < orden.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = orden[i];
        lista.appendChild(li);
    }
}

function agregarInicioOrden() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim();
    if (valor === "") return;
    orden.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaOrden();
}

function cargarOrdenInverso() {
    orden = []; // Limpia antes de cargar
    orden.unshift(3);
    orden.unshift(2);
    orden.unshift(1);
    mostrarListaOrden();
}

//ejercicio 7
let historial = [];

function agregarHistorial() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim();

    if (valor === "") return;

    historial.push(valor); // Agrega mensaje al final
    input.value = "";
    input.focus();

    mostrarHistorial();
}

function eliminarUltimoMensaje() {
    if (historial.length === 0) return;

    const eliminado = historial.pop(); // Elimina el último mensaje

    // Mostrar mensaje eliminado
    const alerta = document.getElementById("mensajeEliminado7");
    alerta.textContent = `Mensaje eliminado: "${eliminado}"`;
    alerta.classList.remove("d-none");

    mostrarHistorial();
}

function mostrarHistorial() {
    const lista = document.getElementById("resultado7");
    lista.innerHTML = "";

    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = historial[i];
        lista.appendChild(li);
    }
}

//ejercicio 8
let cola = ["Cliente1", "Cliente2", "Cliente3"];

function mostrarCola() {
    const lista = document.getElementById("resultado8");
    lista.innerHTML = "";
    for (let i = 0; i < cola.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = cola[i];
        lista.appendChild(li);
    }
}

function agregarClienteCola() {
    const input = document.getElementById("lista8");
    const valor = input.value.trim();
    if (valor === "") return;
    cola.push(valor);
    input.value = "";
    input.focus();
    mostrarCola();
}

function atenderCliente() {
    cola.shift(); // Elimina el primero
    mostrarCola();
}

let nombres = ["Pedro", "Juan", "Luis"];

function reordenarNombres() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();

    if (valor === "") return;

    nombres.pop(); // Eliminar siempre el último elemento

    if (valor === "Mateo") {
        nombres.unshift(valor); // Agrega Mateo al inicio
    } else if (valor === "Ana") {
        nombres.push(valor); // Agrega Ana al final
    } else {
        // No se agrega nada si no es Mateo ni Ana
        alert("Solo puedes ingresar 'Mateo' o 'Ana'");
    }

    input.value = "";
    input.focus();

    const lista = document.getElementById("resultado9");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

//ejercicio 10
let pila = [];
let colaNueva = [];

function mostrarPila() {
    const lista = document.getElementById("resultado10a");
    lista.innerHTML = "";
    for (let i = 0; i < pila.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = pila[i];
        lista.appendChild(li);
    }
}

function agregarElementoPila() {
    const input = document.getElementById("lista10a");
    const valor = input.value.trim();
    if (valor === "") return;
    pila.push(valor);
    input.value = "";
    input.focus();
    mostrarPila();
}

function quitarElementoPila() {
    pila.pop();
    mostrarPila();
}

function mostrarColaNueva() {
    const lista = document.getElementById("resultado10b");
    lista.innerHTML = "";
    for (let i = 0; i < colaNueva.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = colaNueva[i];
        lista.appendChild(li);
    }
}

function agregarElementoCola() {
    const input = document.getElementById("lista10b");
    const valor = input.value.trim();
    if (valor === "") return;
    colaNueva.push(valor);
    input.value = "";
    input.focus();
    mostrarColaNueva();
}

function quitarElementoCola() {
    colaNueva.shift();
    mostrarColaNueva();
}

const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}
let carrito = [];
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.innerText = `${carrito[i]}`;
        lista.appendChild(item);
    }
    const input = document.getElementById("lista2");
    const valor = input.value.trim();
    if (valor === "") return;
    carrito.push(valor);
    input.value = "";
    input.focus();
}

function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
        mostrarListaCompra();
    }
}

let colores = [];

function mostrar_lista_colores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";

    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();

    if (valor === "") {
        return;
    }

    colores.unshift(valor);
    input.value = "";
    input.focus();
    console.log(colores);
    mostrar_lista_colores();
}

let colores2 = [];

function mostrar_lista_colores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";

    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className =
            "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}

function agregar_inicio2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim();

    if (valor === "") {
        return;
    }

    colores2.unshift(valor);
    input.value = "";
    input.focus();

    mostrar_lista_colores2();
}

function eliminar_primer_elemento() {
    if (colores2.length > 0) {
        colores2.shift();
    }
    mostrar_lista_colores2();
}

let numeros = [10, 20, 30];

function mostrar_lista_numeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";

    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}
function agregar_inicio_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") {
        return;
    }

    numeros.unshift(valor);
    input.value = "";
    input.focus();
    mostrar_lista_numeros()
}

function eliminar_primer_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrar_lista_numeros();
}

function eliminar_ultimo_elemento_ej5() {
    if (numeros.length > 0) {
        numeros.pop();
    }
    mostrar_lista_numeros();
}

function agregar_ultimo_elemento_ej5() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();

    if (valor === "") return;

    numeros.push(valor);
    input.value = "";
    input.focus();
    mostrar_lista_numeros();
}

let orden = [];

function mostrarListaOrden() {
    const lista = document.getElementById("resultado6");
    lista.innerHTML = "";
    for (let i = 0; i < orden.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = orden[i];
        lista.appendChild(li);
    }
}

function agregarInicioOrden() {
    const input = document.getElementById("lista6");
    const valor = input.value.trim();
    if (valor === "") return;
    orden.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaOrden();
}

function cargarOrdenInverso() {
    orden = [];
    orden.unshift(3);
    orden.unshift(2);
    orden.unshift(1);
    mostrarListaOrden();
}

let historial = [];

function agregarHistorial() {
    const input = document.getElementById("lista7");
    const valor = input.value.trim();

    if (valor === "") return;

    historial.push(valor);
    input.value = "";
    input.focus();

    mostrarHistorial();
}

function eliminarUltimoMensaje() {
    if (historial.length === 0) return;

    const eliminado = historial.pop();

    const alerta = document.getElementById("mensajeEliminado7");
    alerta.textContent = `Mensaje eliminado: "${eliminado}"`;
    alerta.classList.remove("d-none");

    mostrarHistorial();
}

function mostrarHistorial() {
    const lista = document.getElementById("resultado7");
    lista.innerHTML = "";

    for (let i = 0; i < historial.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = historial[i];
        lista.appendChild(li);
    }
}

let cola = ["Cliente1", "Cliente2", "Cliente3"];

function mostrarCola() {
    const lista = document.getElementById("resultado8");
    lista.innerHTML = "";
    for (let i = 0; i < cola.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = cola[i];
        lista.appendChild(li);
    }
}

function agregarClienteCola() {
    const input = document.getElementById("lista8");
    const valor = input.value.trim();
    if (valor === "") return;
    cola.push(valor);
    input.value = "";
    input.focus();
    mostrarCola();
}

function atenderCliente() {
    cola.shift();
    mostrarCola();
}

let nombres = ["Pedro", "Juan", "Luis"];

function reordenarNombres() {
    const input = document.getElementById("lista9");
    const valor = input.value.trim();

    if (valor === "") return;

    nombres.pop();

    if (valor === "Mateo") {
        nombres.unshift(valor);
    } else if (valor === "Ana") {
        nombres.push(valor);
    } else {
        alert("Solo puedes ingresar 'Mateo' o 'Ana'");
    }

    input.value = "";
    input.focus();

    const lista = document.getElementById("resultado9");
    lista.innerHTML = "";
    for (let i = 0; i < nombres.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = nombres[i];
        lista.appendChild(li);
    }
}

//ejercicio 10
let pila = [];
let colaNueva = [];

function mostrarPila() {
    const lista = document.getElementById("resultado10a");
    lista.innerHTML = "";
    for (let i = 0; i < pila.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = pila[i];
        lista.appendChild(li);
    }
}

function agregarElementoPila() {
    const input = document.getElementById("lista10a");
    const valor = input.value.trim();
    if (valor === "") return;
    pila.push(valor);
    input.value = "";
    input.focus();
    mostrarPila();
}

function quitarElementoPila() {
    pila.pop();
    mostrarPila();
}

function mostrarColaNueva() {
    const lista = document.getElementById("resultado10b");
    lista.innerHTML = "";
    for (let i = 0; i < colaNueva.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = colaNueva[i];
        lista.appendChild(li);
    }
}

function agregarElementoCola() {
    const input = document.getElementById("lista10b");
    const valor = input.value.trim();
    if (valor === "") return;
    colaNueva.push(valor);
    input.value = "";
    input.focus();
    mostrarColaNueva();
}

function quitarElementoCola() {
    colaNueva.shift();
    mostrarColaNueva();
}