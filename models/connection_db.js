const mysql = require('mysql');
const config = require('../config/development_config');

const connection = mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
});

connection.connect(err => {
    if(err){
        console.log(err.message);
        console.log('connection error');
    }else{
        console.log('conneting success');
    }
})

module.exports = connection;