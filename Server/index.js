const express = require('express');
const cors = require('cors');
const path = require('path');

//Usuarios 

const usuariosRoutes = require('./routes/usuarios.routes');

const app = express();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(express.json());
app.use('/api', usuariosRoutes);

app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001');
});