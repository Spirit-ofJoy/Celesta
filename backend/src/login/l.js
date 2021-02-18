const mysql = require("mysql2/promise");
const mysqlLoginCredential = require("./../../../../.authorize/mysql-login.json");


const pool = mysql.createPool({
  connectionLimit : 100, //important
  host: "localhost",
  user: mysqlLoginCredential.user,
  password: mysqlLoginCredential.password,
  database: "test",
  debug    :  false
});


// query rows in the table
const a = function queryRow(userName) {
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    let query = mysql.format(selectQuery,["todo","user", userName]);
    // query = SELECT * FROM `todo` where `user` = 'shahid'
    pool.query(query,(err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        console.log(data);
    });
}

console.log(x);