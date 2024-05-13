import { getConnection } from "../database/connection.js"
import sql from 'mssql'

export const getAlumnos = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT * FROM alumnos')
    res.json(result.recordset)
}

export const getAlumno = async (req, res) => {
    console.log(req.params.id);
    const pool = await getConnection()
    const result = await pool.request()
    .input('idAlumno', sql.Int, req.params.id)
    .query('Select * From alumnos Where idAlumno= @idAlumno')
    if (result.rowsAffected[0] === 0){
        return res.status(404).json({messaje: "Alumno no encontrado"})
    }

    return res.json(result.recordset[0]);
}
export const createAlumno = async (req, res) => {
    console.log(req.body);
    const pool = await getConnection()
    const result = await pool
        .request()
        .input("nroDocumento", sql.VarChar, req.body.nroDocumento).input("apellidos", sql.VarChar, req.body.apellidos)
        .input("nombres", sql.VarChar, req.body.nombres).input("fechaNacimiento", sql.VarChar, req.body.fechaNacimiento)
        .input("grado", sql.VarChar, req.body.grado).input("seccion", sql.VarChar, req.body.seccion)
        .query('INSERT INTO alumnos (nroDocumento, apellidos, nombres, fechaNacimiento, grado, seccion) VALUES (@nroDocumento, @apellidos, @nombres, @fechaNacimiento, @grado, @seccion); SELECT SCOPE_IDENTITY() AS id;')
    console.log(result);
    res.json({
        idAlumno: result.recordset[0].id,
        nroDocumento: req.body.nroDocumento,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        fechaNacimiento: req.body.fechaNacimiento,
        grado: req.body.grado,
        seccion: req.body.seccion
    });
};