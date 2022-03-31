
const mysql = require('mysql2')

const dbCon = mysql.createConnection({
    
host: '49.0.198.122',
user: 'bestech',
port: '3306',
password: 'password',
database: 'db_finance'

});

module.exports = dbCon;