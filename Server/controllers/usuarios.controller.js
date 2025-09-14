// Obtener un usuario por ID
const getUsuarioById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Usuarios WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (result.length === 0) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.json(result[0]);
    });
};
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

const actualizarUsuario = (req, res) => {
    const {
        nombres, apellidos, tipo_documento, numero_documento, 
        correo_personal, numero_celular
    } = req.body;
    const { id } = req.params;
    // Log de los datos recibidos
    console.log('Actualizar usuario:', { id, nombres, apellidos, tipo_documento, numero_documento, correo_personal, numero_celular });
    if (!id || !nombres || !apellidos || !tipo_documento || !numero_documento || !correo_personal || !numero_celular) {
        return res.status(400).json({ error: 'Faltan campos requeridos o id inválido' });
    }
    const sql = 'UPDATE Usuarios SET nombres = ?, apellidos = ?, tipo_documento = ?, numero_documento = ?, correo_personal = ?, numero_celular = ? WHERE id = ?';
    const values = [
        nombres, apellidos, tipo_documento, numero_documento, correo_personal, numero_celular, id
    ];
    console.log('SQL:', sql);
    console.log('Values:', values);
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error en UPDATE:', err);
            return res.status(500).json({ error: 'No se pudo actualizar el usuario', error: err.message });
        }
        res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    });
};

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    getUsuarioById
};
