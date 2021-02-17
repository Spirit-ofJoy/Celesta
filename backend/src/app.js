const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3001;
const database = require("./database.json");

const mysqlLoginCredential = require("../../../.authorize/mysql-login.json");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: mysqlLoginCredential.user,
  password: mysqlLoginCredential.password,
  database: "test",
  debug: false,
});

app.use(express.json());

app.get("/a", (req, res) => {
  //taking login credentials
});


///testing
app.post("/login", (req, res) => {
  var email = req.query.email;
  var password = req.query.password;
  let selectQuery = "SELECT id FROM ?? WHERE ?? = ? AND ?? =?";
  let query = mysql.format(selectQuery, [
    "login",
    "user",
    email,
    "password",
    password,
  ]);

  pool.query(query, function (err, data) {
    if (err) {
      console.log("Error in Login Part. Check.");
    }
    if (data[0]) res.send(data[0]);
    else res.send(false);
  });
});

//convert this into post
app.get("/login", (req, res) => {
  //taking login credentials
  var email = req.query.email;
  var password = req.query.password;
  //the general login query
  let login = "SELECT id FROM ?? WHERE ?? = ? AND ?? =?";
  //this query is to check whether the user is a distributor or not
  let checkDistributor = "SELECT * FROM ?? WHERE ?? = ?";

  //login query formatting
  let loginQuery = mysql.format(login, [
    database.table.login,
    database.login.email,
    email,
    database.login.password,
    password,
  ]);

  //querying whether the user exists in the Login table or not
  pool.query(loginQuery, function (err, data) {
    if (err) {
      console.log("Error in Login Part.");
    }
    if (data[0]) {
      //check Distributor ship query formatting
      let checkDistributorQuery = mysql.format(checkDistributor, [
        database.table.distributors,
        database.distributors.id,
        data[0].id,
      ]);

      //querying whether the user exists in the Distributor table or not
      pool.query(checkDistributorQuery, function (err, result) {
        if (err) {
          console.log("Error in Login Check Distributor Part.");
        }
        if (result[0]) {
          var answer = {
            userExists: true,
            distributor: true,
            id: data[0].id,
            //more_info = result[0]
          };
          res.send(JSON.stringify(answer));
        } else {
          var answer = {
            userExists: true,
            distributor: false,
            id: data[0].id,
            //more_info = result[0]
          };
          res.send(JSON.stringify(answer));
        }
      });
    } else {
      var answer = {
        userExists: false,
      };
      res.send(JSON.stringify(answer));
    }
  });
});

//Get Profile Details
app.get("/profile", (req, res) => {
  //taking login credentials
  var id = req.query.id;
  var isDistributor = req.query.Distributor;
  let profileDetails = "SELECT * FROM ?? WHERE ?? = ?";
  let profileQuery;

  //login query formatting if the user is a Distributor
  if (isDistributor === "true" || isDistributor === true) {
    profileQuery = mysql.format(profileDetails, [
      database.table.distributors,
      database.distributors.distributor_id,
      id,
    ]);
  } else {
    //login query formatting is the use is not a Distributor
    profileQuery = mysql.format(profileDetails, [
      database.table.trader,
      database.trader.trader_id,
      id,
    ]);
  }

  //querying whether the user exists in the Login table or not
  pool.query(profileQuery, function (err, data) {
    if (err) {
      console.log("Error in Profile Part.");
    }
    if (data[0]) {
      res.status(200);
      res.send(data[0]);
    } else {
      res.status(404);
      res.send("not found");
    }
  });
});


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
