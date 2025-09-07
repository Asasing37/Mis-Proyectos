const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SAOanime37*', // pon tu contraseña si tienes
  database: 'Aerolinea'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la BD:', err);
    return;
  }
  console.log('Conectado a la BD MySQL');
});

module.exports = db;
