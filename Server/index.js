const express = require('express');
const cors = require('cors');
const { getUsuarios } = require('./controllers/usuarios.controller');

const app = express();
app.use(cors()); // 👈 para permitir peticiones desde React
app.use(express.json());

// RUTA DE USUARIOS
app.get('/api/usuarios', getUsuarios);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
