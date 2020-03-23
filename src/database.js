//conecção ao MySQL, importando modulo de MySQL - fazendo consultas a bd
const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

//p utilizar a conexao
const pool = mysql.createPool(database);

//depois decria, exportamos a conexao
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
  
    if (connection) connection.release(); //começa a conexao
    console.log('BD IS CONNECTED');
    return;
});

//convertendo promessas em callbacks
pool.query = promisify(pool.query);

//exportando o modulo
module.exports = pool;