const express = require('express');
const router = express.Router();
const { getUsuarios, crearUsuario } = require('../controllers/usuarios.controller');

router.get('/usuarios', getUsuarios);
router.post('/usuarios', crearUsuario);

module.exports = router;