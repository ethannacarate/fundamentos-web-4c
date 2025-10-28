// ==========================================================
// 1. FUNCIONALIDAD DEL MENÚ MÓVIL
// ==========================================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};


// ==========================================================
// 2. LÓGICA DE SCROLL Y RESALTADO DE ENLACE ACTIVO + ANIMACIÓN
// ==========================================================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let footer = document.querySelector('footer');


window.onscroll = () => {
    // Lógica para resaltar el enlace activo y animar la aparición (animate)
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Resaltar el enlace activo en la navegación
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            
            // Lógica de Animación al Scroll: Añade la clase 'animate'
            sec.classList.add('animate');
        } else {
            // Descomenta la siguiente línea si quieres que la animación se repita cada vez que haces scroll
            // sec.classList.remove('animate'); 
        }
    });

    // Animación del footer
    let top = window.scrollY;
    let offset = footer.offsetTop - 150;
    let height = footer.offsetHeight;

    if (top >= offset && top < offset + height) {
        footer.classList.add('animate');
    } else {
        footer.classList.remove('animate');
    }
    
    // Ocultar el menú al seleccionar un enlace (si está en modo móvil)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


// ==========================================================
// 3. LÓGICA PARA LA ANIMACIÓN DEL TEXTO (Tipo máquina de escribir)
// ==========================================================
// (Editado para que coincida con el enfoque del curso)
const textoAnimado = document.querySelector('.texto-animado');
const roles = ["Desarrollador Web", "Estudiante de HTML", "Estudiante de CSS", "Estudiante de JS"];
let rolIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentRole = roles[rolIndex];
    const displayRole = currentRole.substring(0, charIndex);
    textoAnimado.textContent = displayRole;

    if (!isDeleting) {
        charIndex++;
        if (charIndex > currentRole.length) {
            isDeleting = true;
            setTimeout(type, 1500); 
        } else {
            setTimeout(type, 100);
        }
    } else {
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            rolIndex = (rolIndex + 1) % roles.length;
            setTimeout(type, 500); 
        } else {
            setTimeout(type, 50);
        }
    }
}

document.addEventListener('DOMContentLoaded', type);