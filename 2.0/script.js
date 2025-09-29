/*
🧠 Ejercicio 1: Agregar elementos
Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos:
"pan", "leche" y "huevos".
Muestra el arreglo resultante  en html.
*/
// Ejercicio 1: Agregar elementos
const resultado = document.getElementById("resultado");
function agregarElementoCompra() {
    let elemento = document.getElementById("lista").value;
    let item = document.createElement("li");
    item.innerText = elemento;
    resultado.appendChild(item);
}

// Ejercicio 2
let carrito = [];
function mostrarListaCompra() {
    const lista = document.getElementById("resultado2");
    lista.innerHTML = "";
    for (let i = 0; i < carrito.length; i++) {
        const item = document.createElement("li");
        item.innerText = `${carrito[i]}`;
        lista.appendChild(item);
    }
}
function agregarElementoCarrito() {
    const input = document.getElementById("lista2");
    const valor = input.value.trim();
    if (valor === "") return;
    carrito.push(valor);
    input.value = "";
    input.focus();
    mostrarListaCompra();
}
function eliminarUltimoElemento() {
    if (carrito.length > 0) {
        carrito.pop();
        mostrarListaCompra();
    }
}

// Ejercicio 3 y 4
let colores = [];
function mostrarListaColores() {
    const lista = document.getElementById("resultado3");
    lista.innerHTML = "";
    for (let i = 0; i < colores.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores[i]}`;
        lista.appendChild(li);
    }
}
function agregarInicioColores() {
    const input = document.getElementById("lista3");
    const valor = input.value.trim();
    if (valor === "") return;
    colores.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaColores();
}

let colores2 = [];
function mostrarListaColores2() {
    const lista = document.getElementById("resultado4");
    lista.innerHTML = "";
    for (let i = 0; i < colores2.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${colores2[i]}`;
        lista.appendChild(li);
    }
}
function agregarInicioColores2() {
    const input = document.getElementById("lista4");
    const valor = input.value.trim();
    if (valor === "") return;
    colores2.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaColores2();
}
function eliminarPrimerElementoColores2() {
    if (colores2.length > 0) {
        colores2.shift();
    }
    mostrarListaColores2();
}

// Ejercicio 5
let numeros = [10, 20, 30];
function mostrarListaNumeros() {
    const lista = document.getElementById("resultado5");
    lista.innerHTML = "";
    for (let i = 0; i < numeros.length; i++) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center mb-2";
        li.textContent = `- ${numeros[i]}`;
        lista.appendChild(li);
    }
}
function agregarInicioNumeros() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.unshift(valor);
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}
function eliminarPrimerElementoNumeros() {
    if (numeros.length > 0) {
        numeros.shift();
    }
    mostrarListaNumeros();
}
function eliminarUltimoElementoNumeros() {
    if (numeros.length > 0) {
        numeros.pop();
    }
    mostrarListaNumeros();
}
function agregarUltimoElementoNumeros() {
    const input = document.getElementById("lista5");
    const valor = input.value.trim();
    if (valor === "") return;
    numeros.push(valor);
    input.value = "";
    input.focus();
    mostrarListaNumeros();
}

// Ejercicio 6
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

// Ejercicio 7
let historial = [];
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

// Ejercicio 8
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

// Ejercicio 9
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

// Ejercicio 10
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