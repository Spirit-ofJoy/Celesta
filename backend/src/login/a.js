const mysqlLoginCredential = require("./../../../../.authorize/mysql-login.json");
const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: mysqlLoginCredential.user,
  password: mysqlLoginCredential.password,
  database: "test",
  debug: false,
});

// query rows in the table

async function a() {
  var someVar = [];

  pool.query("select * from login", function (err, rows) {
    if (err) {
      throw err;
    } else {
      setValue(rows);
    }
  });

  function setValue(value) {
    someVar = value;
  }

  return someVar;
}

var mnb = a();
console.log(mnb);

var a = a().then(
    (a) => {
    console.log(a);
    }
)