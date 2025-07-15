const resultado = document.getElementById("resultado");
function agregarElementoCompra(){
     //valor input
    let elemento = document.getElementById("lista").value;
    //Crear elemento HTML --> CreateElement
    let item = document.createElement("li");
    item.innerText = elemento; //<li>--InnerText--</li>
    //appendChild inserta valor hijo en Padre
    // resultado(<ul>(item(<li></li>))</ul>)
    resultado.appendChild(item);
}
let carrito = [];
function MostrarListaCompra(){
    const lista = document.getElementById("resultado2");
    lista.innerHTML = ""; //limpiar antes de mostrar

    for (let i= 0 < carrito.length; i++){
        const li = document.createElement("li");
        li.className ="list-group-item d-fñex justify-content-between align-items-center mb-2";
        li.textContent = `- $(carrito[i])`;
        lista.appendChild(li);
    }
}

function agregarElemento2() {
    const input = document.getElementById("lista2")
    const valor = input.value.trim(); //guardo valor sin espacios extras

    if (valor === "") return;
    carrito.push(valor); //agregar valor al final

    input.value = "";
    input.focus(); //agregamos foco hacia el input

    MostrarListaCompra()
}

function eliminarUltimoElemento(){
    if(carrito.length > 0) 
        carrito.pop();
    MostrarListaCompra()
}

let 