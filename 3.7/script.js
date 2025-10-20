
const weatherDataC = [
    { max: 24, min: 18 }, // Índice 0: Today
    { max: 27, min: 19 }, // Índice 1: Tomorrow
    { max: 21, min: 16 }, // Índice 2: Friday
    { max: 26, min: 21 }  // Índice 3: Saturday
];

// 2. LÓGICA: Función simple de conversión de Celsius a Fahrenheit.
function cToF(c) {
    return Math.round((c * 9 / 5) + 32);
}

// Función principal para manejar el cambio de unidad.
function changeTempUnit(element) {
    // Determina la unidad seleccionada ('C' o 'F')
    const unit = element.value; 
    
    // --- Lógica Repetida para el Día 0 (Today) ---
    const data0 = weatherDataC[0];
    const max0 = unit === 'F' ? cToF(data0.max) : data0.max;
    const min0 = unit === 'F' ? cToF(data0.min) : data0.min;
    
    document.getElementById('temp-max-0').innerText = `${max0}°`;
    document.getElementById('temp-min-0').innerText = `${min0}°`;

    // --- Lógica Repetida para el Día 1 (Tomorrow) ---
    const data1 = weatherDataC[1];
    const max1 = unit === 'F' ? cToF(data1.max) : data1.max;
    const min1 = unit === 'F' ? cToF(data1.min) : data1.min;
    
    document.getElementById('temp-max-1').innerText = `${max1}°`;
    document.getElementById('temp-min-1').innerText = `${min1}°`;
    
    // --- Lógica Repetida para el Día 2 (Friday) ---
    const data2 = weatherDataC[2];
    const max2 = unit === 'F' ? cToF(data2.max) : data2.max;
    const min2 = unit === 'F' ? cToF(data2.min) : data2.min;
    
    document.getElementById('temp-max-2').innerText = `${max2}°`;
    document.getElementById('temp-min-2').innerText = `${min2}°`;
    
    // --- Lógica Repetida para el Día 3 (Saturday) ---
    const data3 = weatherDataC[3];
    const max3 = unit === 'F' ? cToF(data3.max) : data3.max;
    const min3 = unit === 'F' ? cToF(data3.min) : data3.min;
    
    document.getElementById('temp-max-3').innerText = `${max3}°`;
    document.getElementById('temp-min-3').innerText = `${min3}°`;
}

function dismissCookie() {
    const cookie = document.getElementById('cookie-policy');
    if (cookie) {
        cookie.style.display = 'none'; 
    }
}

function showCityLoading(cityName) {
    const modal = document.getElementById('loading-modal');
    const message = document.getElementById('loading-message');
    
    if (modal && message) {
        message.innerText = `Cargando informe meteorológico para ${cityName}...`;
        modal.style.display = 'flex';
    }
}

function dismissModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}