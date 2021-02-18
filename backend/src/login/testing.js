const mysql = require('mysql');
const mysqlLoginCredential = require("./../../../../.authorize/mysql-login.json");
//!read the docs to get more clarity on why this is needed. (docs/backend.md) 

const pool = mysql.createPool({
    connectionLimit : 100, //important
    host: "localhost",
    user: mysqlLoginCredential.user,
    password: mysqlLoginCredential.password,
    database: "test",
    debug    :  false
});

/**
 * This is a test query function for know if await is even necessary or not.
 * @param userName The username of the person trying to log in.
 * @param connection_pool The mysql connection pool variable
 */
async function queryRow(userName,connection_pool) {
    let selectQuery = 'SELECT * FROM ?? WHERE ?? = ?';    
    var qqqq  = "hbkj";
    let query = mysql.format(selectQuery,["login","user", userName]);
    // query = SELECT * FROM `todo` where `user` = 'a'
    connection_pool.query(query, async function(err, data) {
        if(err) {
            //console.error(err);
            //return data;
        }

        qqqq = await data;
        // rows fetch
        //console.log(data);
        return qqqq;
    });
}

let a = queryRow('a',pool);

console.log(a);

var text = queryRow('a',pool).then(
    (text) => {
      console.log(text);
    },
    (err) => {
      // Deal with the fact the chain failed
    }
  );
  

  
























/*
// timeout just to avoid firing query before connection happens
setTimeout(() => {
    // call the function
    // select rows
    queryRow('a',pool);
},5000);

queryRow('b',pool);
*/