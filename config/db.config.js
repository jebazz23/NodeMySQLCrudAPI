const mysql = require('mysql');

// create mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ADMIN',
    database: 'node_mysql_crud_db'
});

dbConn.connect(function(err){
    if(err) throw err;
    console.log('Database Connected Successfully!!!')
})

module.exports= dbConn;