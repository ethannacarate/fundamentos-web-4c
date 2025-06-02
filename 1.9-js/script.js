const participantes = [];
    let nombre = "";

    while (true) {
       nombre = prompt("Ingrese un nombre (o escriba 'salir' para terminar):");
            if (nombre === null) break; // Si cancela el prompt
            if (nombre.toLowerCase() === "salir") break;
            if (nombre.trim() !== "") {
                participantes.push(nombre.trim());
            }
        }

console.log("Total de participantes:", participantes.length);
console.log("Lista:", participantes.join(", "));

if (participantes.length > 5) {
    console.log("¡Gran convocatoria! Hay más de 5 participantes.");
}       