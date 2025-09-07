const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./routes/usuarios.routes');

const app = express();
app.use(cors()); // 👈 para permitir peticiones desde React
app.use(express.json());

// RUTA DE USUARIOS
app.use('/api', usuariosRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
