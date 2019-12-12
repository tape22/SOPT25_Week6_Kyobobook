// const mysql = require('promise-mysql')
// const dbConfig = { 
//     host: 'db-sopt-server.cmvicyxzzfke.ap-northeast-2.rds.amazonaws.com', 
//     port: 3306, 
//     user: 'admin', 
//     password: 'young0327', 
//     database: 'sopt', 
//     dateStrings: 'date', }
// module.exports = mysql.createPool(dbConfig)

const mysql = require('promise-mysql')
const dbConfig = { 
    host: 'soptrds.c76oslla4ke7.us-east-1.rds.amazonaws.com', 
    port: 3306, 
    user: 'admin', 
    password: 'wngoi0p!!', 
    database: 'innodb', 
    dateStrings: 'date', }
module.exports = mysql.createPool(dbConfig)