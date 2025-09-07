const mysql =require('mysql2');

const db = mysql.createPool ({

    host: 'localhost',
    user: 'root',
    password: 'SAOanime37*',
    database: 'Aerolinea'
});

module.exports = db;