const mysql = require("mysql");
const mysqlLoginCredential = require("./../../../../.authorize/mysql-login.json");

var details = {
  user: "a",
  password: "b",
};

let x;
/**
 * The return is the length of result from the query
 * @param {mysql} connection Mysql connection variable
 * @param {string} username login username
 * @param {string} password login password
 *
function loginQuery(connection, username, password) {
  connection.query(
    "SELECT id FROM login WHERE user = ? AND password = ?",
    [username, password],
    function (err, results, fields) {
      if (err) throw err;
      console.log(results);
    });
}
*/

var conn = mysql.createConnection({
  host: "localhost",
  user: mysqlLoginCredential.user,
  password: mysqlLoginCredential.password,
  database: "test",
});

function selectAllQuery(connection) {
  connection.query("SELECT * FROM login", async function (err, results, fields) {
    if (err) throw err;
    console.log(results[0]);
    await results[0].id;
  });
}


let result = async function() {
  var userCourse = [];
  try {
      const rows = await query('select * as login');
      userCourse = rows;
  } finally {
      conn.end();
      return userCourse;
  }
};



//loginQuery(conn, details.user, details.password);

//conn.query("SELECT * FROM login", function (err, results, fields) {
//if (err) throw err;
//console.log(results[0].id);
//});

/*



module.exports = {
  loginQuery: loginQuery,
};

*/
