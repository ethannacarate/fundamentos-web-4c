create database bd_profe;

use bd_profe;

CREATE TABLE tipo_usuarios (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(50) NOT NULL CHECK (descripcion IN ('Estudiante', 'Profesor', 'Administrador')),
    nivel_acceso TINYINT CHECK (nivel_acceso BETWEEN 1 AND 3)
);

CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL CHECK (CHAR_LENGTH(nombre) >= 3 AND nombre REGEXP '^[A-Za-z ]+$'),
    email VARCHAR(100) NOT NULL UNIQUE CHECK (email LIKE '%@%.%'),
    fecha_registro DATE DEFAULT (CURRENT_DATE),
    activo BOOLEAN DEFAULT TRUE,
    edad TINYINT CHECK (edad BETWEEN 13 AND 100),
    id_tipo INT,
    FOREIGN KEY (id_tipo) REFERENCES tipo_usuarios(id_tipo)
);
