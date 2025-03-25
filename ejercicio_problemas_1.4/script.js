// Función para verificar al usuario
function verificarUsuario() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    if (usuario === "admin") {
        alert("Bienvenido, " + usuario + ". Puedes evaluar la temperatura.");
        temperatura(); // Llamar a la función temperatura si el usuario es válido
    } else {
        alert("Acceso denegado. Usuario no autorizado.");
    }
}

// Función para evaluar la temperatura
function temperatura() {
    let celcius = prompt("Ingresa la temperatura en °C:");
    if (celcius < 0) {
        alert("La temperatura es: " + celcius + "°C\nHace mucho frío.");
    } else if (celcius >= 0 && celcius <= 25) {
        alert("La temperatura es: " + celcius + "°C\nLa temperatura es agradable.");
    } else {
        alert("La temperatura es: " + celcius + "°C\nHace calor.");
    }
}