use bdapi
CREATE TABLE alumnos(
    idAlumno INT IDENTITY(1,1) PRIMARY KEY,
    nroDocumento VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    fechaNacimiento VARCHAR(100) NOT NULL,
    grado VARCHAR(100) NOT NULL,
    seccion VARCHAR(100) NOT NULL
)