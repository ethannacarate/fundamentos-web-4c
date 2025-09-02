create database gestion_academica;

USE gestion_academica;
-- =========================================
-- TABLA TIPO_USUARIOS
-- =========================================
CREATE TABLE tipo_usuarios (
id_tipo_usuario INT AUTO_INCREMENT PRIMARY KEY,
nombre_tipo VARCHAR(50) NOT NULL UNIQUE,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0
);
-- =========================================
-- TABLA MODALIDADES (para cursos)
-- =========================================
CREATE TABLE modalidades (
id_modalidad INT AUTO_INCREMENT PRIMARY KEY,
nombre_modalidad VARCHAR(50) NOT NULL UNIQUE,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0
);
-- =========================================
-- TABLA PERSONAS
-- =========================================
CREATE TABLE personas (
id_persona INT AUTO_INCREMENT PRIMARY KEY,
rut VARCHAR(12) UNIQUE,
nombre_completo VARCHAR(100) NOT NULL,
fecha_nacimiento DATE,
correo VARCHAR(100),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0
);
-- =========================================
-- TABLA USUARIOS
-- =========================================
CREATE TABLE usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
password VARCHAR(100) NOT NULL,
id_persona INT NOT NULL,
id_tipo_usuario INT NOT NULL,
estado VARCHAR(20) NOT NULL DEFAULT 'activo',
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0,
FOREIGN KEY (id_persona) REFERENCES personas(id_persona),
FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_usuarios(id_tipo_usuario)
);
-- =========================================
-- TABLA CURSOS
-- =========================================
CREATE TABLE cursos (
id_curso INT AUTO_INCREMENT PRIMARY KEY,
nombre_curso VARCHAR(100),
id_modalidad INT NOT NULL,
fecha_inicio DATE,
duracion_horas INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0,
FOREIGN KEY (id_modalidad) REFERENCES modalidades(id_modalidad)
);
-- =========================================
-- TABLA MATRICULAS
-- =========================================
CREATE TABLE matriculas (
id_matricula INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
id_curso INT NOT NULL,
fecha_matricula DATE,
estado VARCHAR(20),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);
-- =========================================
-- TABLA DOCENTE_CURSO
-- =========================================
CREATE TABLE docente_curso (
id_docente_curso INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT NOT NULL,
id_curso INT NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
updated_at DATETIME NULL,
deleted BOOLEAN DEFAULT 0,
FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

-- =========================================
-- INSERCIÓN DE DATOS
-- =========================================
-- TIPOS DE USUARIOS
INSERT INTO tipo_usuarios (nombre_tipo) VALUES
('Administrador'),
('Docente'),
('Estudiante');

-- MODALIDADES
INSERT INTO modalidades (nombre_modalidad) VALUES
('Online'),
('Presencial');

-- PERSONAS (con algunos campos nulos)
INSERT INTO personas (rut, nombre_completo, fecha_nacimiento, correo) VALUES
('11.111.111-1', 'ethan nacarate', '1985-03-21', 'andres.soto@email.com'),
(NULL, 'Martin castro', '1990-07-10', 'lucia.fuentes@email.com'), -- Rut nulo
('13.333.333-3', 'pedro sanchez', '1992-01-15', NULL), -- Correo nulo
('14.444.444-4', 'alejandro torres', '1995-11-20', 'pedro.gonzalez@email.com'),
('15.555.555-5', 'alejandro nuñez', '1998-04-09', 'claudia.diaz@email.com'),
(NULL, 'pedro juarez', '1980-06-22', 'javier.silva@email.com'), -- Rut nulo
('17.777.777-7', 'maximiliano fernandez', '1988-09-30', 'patricia.reyes@email.com'),
('18.888.888-8', 'isidora riquelme', '1993-12-14', 'daniel.hernandez@email.com'),
('19.999.999-9', 'martin loncon', '1997-05-05', NULL), -- Correo nulo
('10.000.000-0', 'angel turedo', '1994-08-18', 'esteban.morales@email.com');


-- USUARIOS (con algunos usernames nulos)
INSERT INTO usuarios (username, password, id_persona, id_tipo_usuario, estado) VALUES
('naruyia', 'clave123', 1, 1, 'activo'),
('alejandro', 'clave123', 2, 1, 'activo'), -- Username nulo
('t00n', 'clave123', 3, 2, 'activo'),
(NULL, 'clave123', 4, 2, 'activo'),
('ale', 'clave123', 5, 2, 'activo'),
(NULL, 'clave123', 6, 3, 'activo'), -- Username nulo
('maxi', 'clave123', 7, 3, 'activo'),
('isi', 'clave123', 8, 3, 'inactivo'),
('timmy', 'clave123', 9, 3, 'activo'),
('angel', 'clave123', 10, 3, 'activo');

-- CURSOS (con algunos campos nulos)
INSERT INTO cursos (nombre_curso, id_modalidad, fecha_inicio, duracion_horas) VALUES
('Fundamentos de SQL', 1, '2025-09-01', 30),
('Desarrollo Web', 1, NULL, 40), -- Fecha nula
('Redes y Comunicaciones', 2, '2025-09-10', NULL), -- Duración nula
('Seguridad Informática', 2, '2025-09-15', 35),
('Administración de BD', 1, '2025-09-20', 50),
('Python Básico', 1, '2025-09-25', 30),
(NULL, 2, '2025-10-01', 20), -- Nombre nulo
('Ciberseguridad', 2, '2025-10-05', 45),
('Big Data y Análisis', 1, NULL, 60), -- Fecha nula
('Machine Learning', 1, '2025-10-15', 55);

-- MATRICULAS (con campos nulos)
INSERT INTO matriculas (id_usuario, id_curso, fecha_matricula, estado) VALUES
(6, 1, '2025-08-20', 'vigente'),
(7, 1, '2025-08-21', 'vigente'),
(8, 2, '2025-08-22', NULL), -- Estado nulo
(9, 3, NULL, 'vigente'), -- Fecha nula
(10, 4, '2025-08-24', 'vigente'),
(6, 5, '2025-08-25', 'vigente'),
(7, 6, '2025-08-26', 'finalizado'),
(8, 7, '2025-08-27', 'vigente'),
(9, 8, NULL, 'vigente'), -- Fecha nula
(10, 9, '2025-08-29', 'vigente');

-- DOCENTE_CURSO (correcto)
INSERT INTO docente_curso (id_usuario, id_curso) VALUES
(3, 1), (3, 2),
(4, 3), (4, 4),
(5, 5), (5, 6),
(3, 7), (4, 8),
(5, 9), (3, 10);

-- Consulta personas sin RUT registrado (campo nulo)
SELECT * FROM personas
WHERE rut is null;

-- Consulta personas sin correo registrado (campo nulo)
SELECT * FROM personas
WHERE correo is null;

-- Consulta usuarios sin username registrado (campo nulo)
SELECT * FROM usuarios
WHERE username is null;

-- Consulta cursos sin nombre (campo nulo)
SELECT * FROM cursos 
WHERE nombre_curso is null;

-- Consulta cursos sin fecha inicio
SELECT * FROM cursos
WHERE fecha_inicio is null;

-- Consulta cursos sin duración establecida (campo nulo)
SELECT * FROM cursos
WHERE duracion_horas is null;

-- Consulta matrículas sin estado establecida (campo nulo)
SELECT * FROM matriculas
WHERE estado is null;

-- Consulta matrículas sin fecha (campo nulo)
SELECT * FROM matriculas
WHERE fecha_matricula is null;

-- Desactiva modo seguro para poder hacer actualizaciones sin WHERE con claves primarias
SET SQL_SAFE_UPDATES = 0;

-- Actualiza correos nulos con un correo genérico para que no queden vacíos
UPDATE personas
SET correo = 'correo@ejemplo.com'
WHERE correo IS NULL;

-- Actualiza fechas de inicio nulas de cursos con una fecha fija
UPDATE cursos
SET fecha_inicio = '2025-07-12'
WHERE fecha_inicio is null;

-- Marca como eliminado (borrado lógico) un curso específico (id_curso=4) 
UPDATE cursos
SET deleted = 1
WHERE id_curso = 4;

-- Marca como eliminado un usuario específico que es estudiante (id_usuario=9) 
UPDATE usuarios
SET deleted = 1
WHERE id_usuario = 9 AND id_tipo_usuario = 3;

-- Muestra cursos que están marcados como eliminados (deleted=1) (se utilizó el mismo código anteriormente para mostrar los cursos activos con 0)
SELECT * FROM cursos 
WHERE deleted = 1; -- cursos inactivos

-- Muestra usuarios que están marcados como eliminados (deleted=1) (se utilizó el mismo código anteriormente para mostrar los usuarios activos con 0)
SELECT * FROM usuarios 
WHERE deleted = 1; -- usuarios inactivos

-- Muestra username y nombre completo solo de usuarios y personas activas (no eliminadas)
SELECT u.username, p.nombre_completo
FROM usuarios u
JOIN personas p ON u.id_persona = p.id_persona
WHERE u.deleted = 0 AND p.deleted = 0;

-- Muestra username, nombre del curso y estado de matrícula solo para estudiantes activos y cursos activos
SELECT u.username, c.nombre_curso, m.estado
FROM matriculas m
JOIN usuarios u ON m.id_usuario = u.id_usuario
JOIN cursos c ON m.id_curso = c.id_curso
WHERE u.id_tipo_usuario = 3 AND u.deleted = 0 AND c.deleted = 0;

-- Muestra el nombre del docente, nombre del curso y nombre del estudiante para matrículas activas,
-- usando solo tablas con registros activos (deleted = 0) y filtrando por tipo de usuario
SELECT u_docente.username AS nombre_docente, c.nombre_curso, u_estudiante.username AS nombre_estudiante
FROM matriculas m
JOIN usuarios u_estudiante ON m.id_usuario = u_estudiante.id_usuario
JOIN cursos c ON m.id_curso = c.id_curso
JOIN docente_curso dc ON dc.id_curso = c.id_curso
JOIN usuarios u_docente ON dc.id_usuario = u_docente.id_usuario
WHERE m.deleted = 0 AND u_estudiante.deleted = 0 AND u_docente.deleted = 0 AND c.deleted = 0 AND dc.deleted = 0
  AND u_estudiante.id_tipo_usuario = 3 AND u_docente.id_tipo_usuario = 2;

-- Lista cursos activos que tienen duración mayor a 30 horas
SELECT * FROM cursos
WHERE deleted = 0 AND duracion_horas > 30;

-- Lista estudiantes activos cuyo correo tiene más de 15 caracteres
SELECT p.nombre_completo, p.correo
FROM usuarios u
JOIN personas p ON u.id_persona = p.id_persona
WHERE u.id_tipo_usuario = 3 AND u.deleted = 0 AND p.deleted = 0 AND LENGTH(p.correo) > 15;

-- matrículas con fecha posterior al 22 de agosto del 2025 y que estén vigentes
SELECT * FROM matriculas
WHERE fecha_matricula > '2025-08-22' AND estado = 'vigente';

-- Muestra cursos activos que tienen fecha de inicio definida y está entre el 1 y 30 de septiembre de 2025
SELECT * FROM cursos
WHERE deleted = 0 AND fecha_inicio IS NOT NULL AND fecha_inicio BETWEEN '2025-09-01' AND '2025-09-30';