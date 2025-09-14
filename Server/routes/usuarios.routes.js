const express = require('express');
const router = express.Router();
const { getUsuarios, crearUsuario, actualizarUsuario } = require('../controllers/usuarios.controller');

router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', require('../controllers/usuarios.controller').getUsuarioById);
router.post('/usuarios', crearUsuario);
router.put('/usuarios/:id', actualizarUsuario);

module.exports = router;