var mysql = require('mysql')

var connMysql = function (){
    
    return mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: 'q1w2e3r4',
    database: 'portal_noticias'
    })
    
}

module.exports = function(){
    return connMysql
}