const db = require('../models/conexion');
const bcrypt = require('bcrypt');

const getUsuarios = (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

module.exports = { getUsuarios };