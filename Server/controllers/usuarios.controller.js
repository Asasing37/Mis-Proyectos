const db = require('../models/conexion');
const bcrypt = require('bcrypt');

const getUsuarios = (req, res) => {
    const sql = 'SELECT * FROM Usuarios';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

const crearUsuario = async (req, res) => {

    try {

        const {
            nombres, apellidos, tipo_documento, numero_documento,
            correo_personal, numero_celular
        } = req.body;

        const sql = 'INSERT INTO Usuarios (nombres, apellidos, tipo_documento, numero_documento, correo_personal, numero_celular) VALUES (?, ?, ?, ?, ?, ?)';

        const values = [
            nombres, apellidos, tipo_documento, numero_documento,
            correo_personal, numero_celular
        ];

        const [result] = await db.query(sql, values);
        res.status(201).json({message: 'Usuario creado con exito', id: result.insertId});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = { getUsuarios, crearUsuario };
