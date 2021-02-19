
//const express = require('express')
const mysql = require('mysql')
//const  fs = require('fs');

//let variable;
//fs.readFile('./config.txt', 'utf-8', function(err, data) {
 //   console.log(data);
   // variable = data;
//});

//let localReader = new FileReader();
//let variable = localReader.readAsText(localFile);


const configSettings = {
    host: 'localhost',
    user: 'root',
    password: 'Y@$hendu2002',
    database: 'ampify'
}

//console.log(variable);

const pool = mysql.createPool(configSettings);
module.exports = pool;