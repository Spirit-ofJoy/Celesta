const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
//var randomstring = require("randomstring");
var randomstring = require("randomstring");

const app = express();

const database = require("./database.json");
const searchFunctions = require("./search/searchFunctions");
const port = 3001;
const mysqlLoginCredential = require("../../authorise/mysql-login.json");

const mapAPI = require("./mapAPI/api");
const signupFunctions = require("./signup/functions");

//!read the docs to get more clarity on why this is needed. (docs/backend.md)

//const { reset } = require("nodemon");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: "localhost",
  user: mysqlLoginCredential.user,
  password: mysqlLoginCredential.password,
  database: mysqlLoginCredential.databaseName,
});

app.use(express.json());
app.use(cors());

/**
 * {"userExists":true/false,"distributor":false/true,"id":"id of the user"}
 */
//convert this into post
app.post("/login", (req, res) => {
  //taking login credentials
  var email = req.query.email;
  var password = req.query.password;
  //the general login query
  var id;

  let login = `SELECT ${database.login.login_id} FROM ${database.table.login} WHERE ?? = ? AND ?? =?`;

  //login query formatting
  let loginQuery = mysql.format(login, [
    database.login.email,
    email,
    database.login.password,
    password,
  ]);

  //querying whether the user exists in the Login table or not
  pool.query(loginQuery, function (err, data) {
    if (err) {
      console.log(err);
      res.status(500);
      return res.send("server error");
    }
    if (data[0]) {
      //this query is to check whether the user is a distributor or not
      let checkDistributor = `SELECT * FROM ${database.table.distributors} WHERE ?? = ?`;

      //check Distributor ship query formatting
      let checkDistributorQuery = mysql.format(checkDistributor, [
        database.distributors.distributor_id,
        data[0].login_id,
      ]);

      //querying whether the user exists in the Distributor table or not
      pool.query(checkDistributorQuery, function (error, result) {
        if (error) {
          console.log("Error in Login Check Distributor Part.");
        }
        if (result[0]) {
          var answer = {
            userExists: true,
            distributor: true,
            id: data[0].login_id,
            more_info: result[0],
          };
          res.status(200);
          return res.send(answer);
        } else {
          var answer = {
            userExists: true,
            distributor: false,
            id: data[0].login_id,
          };
          res.status(200);
          return res.send(answer);
        }
      });
    } else {
      var answer = {
        userExists: false,
      };
      res.status(404);
      return res.send(answer);
    }
  });
});

//Get Profile Details of a Distributor
app.get("/profile/distributor", (req, res) => {
  //taking login credentials
  var id = req.query.id;
  let profileDetails = "SELECT * FROM ?? WHERE ?? = ?";
  let profileQuery;

  profileQuery = mysql.format(profileDetails, [
    database.table.distributors,
    database.distributors.distributor_id,
    id,
  ]);

  //querying whether the user exists in the Login table or not
  pool.query(profileQuery, function (err, data) {
    if (err) {
      console.log("Error in Distributor Profile Part.");
      res.status(500);
      return res.send("server error");
    }
    if (data[0]) {
      res.status(200);
      return res.send(data[0]);
    } else {
      res.status(404);
      return res.send("not found");
    }
  });
});

/**
 * http://localhost:3001/distributor/update/profile?id=&name=&contact=&description=
 */
//Update Distributor profile
app.post("/distributor/update/profile", (req, res) => {
  var id = req.query.id;
  var name = req.query.name;
  //var email = req.query.email;
  var contact = req.query.contact;
  //var brand = req.query.brand;
  //var address = req.query.address;
  var description = req.query.description;
  var updateQueryString = `UPDATE ?? SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`;

  let updateDistributorQuery;

  updateDistributorQuery = mysql.format(updateQueryString, [
    database.table.distributors,
    database.distributors.name,
    name,
    database.distributors.phone,
    contact,
    database.distributors.description,
    description,
    database.distributors.distributor_id,
    id,
  ]);

  //update query
  pool.query(updateDistributorQuery, function (err, data) {
    if (err) {
      console.log("Error in Update Distributor Profile Part.");
      res.status(500);
      return res.send("updated failed");
    }
    if (data.affectedRows == 1) {
      res.status(200);
      return res.send("updated");
    } else {
      res.status(500);
      return res.send("server error");
    }
  });
});

/**
 * http://localhost:3001/trader/update/profile?id=&name=&contact=
 */
//Update Trader profile
app.post("/trader/update/profile", (req, res) => {
  var id = req.query.id;
  var name = req.query.name;
  var contact = req.query.contact;
  //var address = req.query.address;
  var updateQueryString = `UPDATE ?? SET ?? = ?, ?? = ? WHERE ?? = ?`;

  let updateTraderQuery;

  updateTraderQuery = mysql.format(updateQueryString, [
    database.table.trader,
    database.trader.Name,
    name,
    database.trader.phone,
    contact,
    database.trader.trader_id,
    id,
  ]);

  //update query
  pool.query(updateTraderQuery, function (err, data) {
    if (err) {
      console.log("Error in Update Trader Profile Part.");
      res.status(500);
      return res.send("updated failed");
    }
    if (data.affectedRows == 1) {
      res.status(200);
      return res.send("updated");
    } else {
      res.status(500);
      return res.send("server error");
    }
  });
});

//Get Profile Details of a Trader/Industry
app.get("/profile/trader", (req, res) => {
  //taking login credentials
  var id = req.query.id;
  let profileDetails = "SELECT * FROM ?? WHERE ?? = ?";
  let profileQuery;

  profileQuery = mysql.format(profileDetails, [
    database.table.trader,
    database.trader.trader_id,
    id,
  ]);

  //querying whether the user exists in the Login table or not
  pool.query(profileQuery, function (err, data) {
    if (err) {
      console.log("Error in Trader Profile Part.");
      res.status(500);
      return res.send("server error");
    }
    if (data[0]) {
      res.status(200);
      return res.send(data[0]);
    } else {
      res.status(404);
      return res.send("not found");
    }
  });
});

/**
 * http://localhost:3001/todo?id=traderID&todo=["toDo1","toDo2"]
 */
//Get Profile Details of a Trader/Industry
app.post("/todo", (req, res) => {
  //taking login credentials
  var id = req.query.id;
  var todo = req.query.todo;
  let todoString = "UPDATE ?? SET  ?? = ? WHERE ?? = ?";
  let todoQuery;

  todoQuery = mysql.format(todoString, [
    database.table.trader,
    database.trader.to_do,
    todo,
    database.trader.trader_id,
    id,
  ]);

  //querying whether the user exists in the Login table or not
  pool.query(todoQuery, function (err, data) {
    if (err) {
      console.log("Error in Todo Part.");
      res.status(500);
      return res.send("server error");
    }
    if (data.affectedRows == 1) {
      res.status(200);
      return res.send("updated");
    } else {
      res.status(500);
      return res.send("server error");
    }
  });
});

//This part here handles the search functionality
app.post("/search/item", (req, res) => {
  var search = req.query.search;
  var search_in = req.query.search_in;
  //var search_city = req.query.city;

  if (search_in === String("brand")) {
    let searchBrandInItems = "SELECT * FROM ?? WHERE ?? = ?";
    let searchBrandInItemsQuery = mysql.format(searchBrandInItems, [
      database.table.items,
      database.items.brand,
      search,
    ]);

    let searchBrandInDistributors = "SELECT ??,??,??,?? FROM ?? WHERE ?? = ?";
    let searchBrandInDistributorsQuery = mysql.format(
      searchBrandInDistributors,
      [
        database.distributors.items,
        database.distributors.location,
        database.distributors.distributor_id,
        database.distributors.name,
        database.table.distributors,
        database.distributors.brand,
        search,
      ]
    );

    //querying whether the user exists in the Login table or not
    pool.query(searchBrandInItemsQuery, function (err, data) {
      if (err) {
        console.log("Error in Search Brand Part.");
        res.status(500);
        return res.send("server error");
      }
      if (data[0]) {
        //querying whether the user exists in the Distributor table or not
        pool.query(searchBrandInDistributorsQuery, function (error, result) {
          if (error) {
            console.log("Error in Sub Search Brand Part.");
          }
          if (result[0]) {
            var data_string = JSON.stringify(data);
            var result_string = JSON.stringify(result);
            var answer = searchFunctions.makeReturnableItemJSONFromBrandSearch(
              data_string,
              result_string
            );
            answer = JSON.parse(answer);
            res.status(200);
            return res.send(answer);
          } else {
            res.status(404);
            return res.send("not found");
          }
        });
      } else {
        res.status(404);
        return res.send("not found");
      }
    });
  }

  if (search_in === String("product")) {
    let searchItems = "SELECT * FROM ?? WHERE ?? = ?";
    let searchItemsQuery = mysql.format(searchItems, [
      database.table.items,
      database.items.name,
      search,
    ]);

    //querying whether the user exists in the Login table or not
    pool.query(searchItemsQuery, function (err, data) {
      if (err) {
        console.log("Error in Search Brand Part.");
        res.status(500);
        return res.send("server error");
      }
      if (data[0]) {
        //next few lines will be some awful code. bear with it
        let itemsSelections = JSON.stringify(data); //this I am doing to pass the value in in the variable instead of passing the reference
        itemsSelections = JSON.parse(itemsSelections);
        brand_name = itemsSelections[0].brand;

        let searchBrandInDistributors =
          "SELECT ??,??,??,?? FROM ?? WHERE ?? = ?";
        let searchBrandInDistributorsQuery = mysql.format(
          searchBrandInDistributors,
          [
            database.distributors.items,
            database.distributors.location,
            database.distributors.distributor_id,
            database.distributors.name,
            database.table.distributors,
            database.distributors.brand,
            brand_name,
          ]
        );

        //querying whether the user exists in the Distributor table or not
        pool.query(searchBrandInDistributorsQuery, function (error, result) {
          if (error) {
            console.log("Error in Sub Search Brand Part.");
          }
          if (result[0]) {
            var data_string = JSON.stringify(data);
            var result_string = JSON.stringify(result);
            var answer = searchFunctions.makeReturnableItemJSONFromBrandSearch(
              data_string,
              result_string
            );

            answer = JSON.parse(answer);
            res.status(200);
            return res.send(answer);
          } else {
            res.status(404);
            return res.send("not found");
          }
        });
      } else {
        res.status(404);
        return res.send("not found");
      }
    });
  }

  if (search_in === String("tag")) {
    let searchTags = "SELECT * FROM ?? WHERE ?? = ?";
    let searchTagsQuery = mysql.format(searchTags, [
      database.table.tags,
      database.tags.tags,
      search,
    ]);

    //querying whether the user exists in the Login table or not
    pool.query(searchTagsQuery, function (err, data) {
      if (err) {
        console.log("Error in Search Tags Part.");
        res.status(500);
        return res.send("server error");
      }
      if (data[0]) {
        //next few lines will be some awful code. bear with it
        let itemsSelections = JSON.stringify(data); //this I am doing to pass the value in in the variable instead of passing the reference
        itemsSelections = JSON.parse(itemsSelections);
        item_id_list = itemsSelections[0].item_id;

        item_id_list = searchFunctions.makeINSearchableStringFromJSONArray(
          item_id_list
        ); //this was the goal ("1","2","3",........"n");

        let searchItemIDs = `SELECT * FROM ?? WHERE ?? IN ${item_id_list}`;
        let searchItemIDsQuery = mysql.format(searchItemIDs, [
          database.table.items,
          database.items.item_id,
        ]);

        //querying whether the user exists in the Distributor table or not
        pool.query(searchItemIDsQuery, function (error, result) {
          if (error) {
            console.log("Error in Sub Search Tags Part.");
          }

          if (result) {
            var result_string = JSON.stringify(result);
            brand_string = searchFunctions.getBrandList(result_string); //this was the goal ("1","2","3",........"n");

            let searchBrands = `SELECT ??,??,??,?? FROM ?? WHERE ?? IN ${brand_string}`;
            let searchBrandsQuery = mysql.format(searchBrands, [
              database.distributors.items,
              database.distributors.location,
              database.distributors.distributor_id,
              database.distributors.name,
              database.table.distributors,
              database.distributors.brand,
            ]);

            //querying whether the user exists in the Distributor table or not
            pool.query(searchBrandsQuery, function (errors, rows) {
              if (errors) {
                console.log("Error in Sub Search Tags Part.");
              }

              if (rows) {
                var rows_string = JSON.stringify(rows);
                var result_string = JSON.stringify(result);

                var answer = searchFunctions.makeReturnableItemJSONFromBrandSearch(
                  result_string,
                  rows_string
                );
                answer = JSON.parse(answer);
                //console.log(answer);
                res.status(200);
                return res.send(answer);
              } else {
                res.status(404);
                return res.send("not found");
              }
            });
          } else {
            res.status(404);
            return res.send("not found");
          }
        });
      } else {
        res.status(404);
        return res.send("not found");
      }
    });
  }
});

app.post("/signup", (req, res) => {
  //taking login credentials
  var id = randomstring.generate({
    length: 8,
    charset: "alphanumeric",
  });
  var email = req.query.email;
  var name = req.query.name;
  var contact = req.query.contact;
  var password = req.query.password;
  var address = req.query.address;
  var todo = "[]";
  var useThisAddressForMAPQuery = signupFunctions.returnSearchableAddress(
    address
  );
  var location = mapAPI.getCoordinatesFromAddress(useThisAddressForMAPQuery).then(
    (location) => {
      let insertStringTraderTable =
        "INSERT INTO ?? ( ?? , ?? , ?? , ?? , ?? , ?? , ?? ) VALUES ( ? , ? , ? , ? , ? , ? , ? )";
      let insertQueryTraderTable;

      insertQueryTraderTable = mysql.format(insertStringTraderTable, [
        database.table.trader,
        database.trader.trader_id,
        database.trader.email,
        database.trader.Name,
        database.trader.phone,
        database.trader.address,
        database.trader.location,
        database.trader.to_do,
        id,
        email,
        name,
        contact,
        address,
        location,
        todo,
      ]);

      //querying whether the user exists in the Login table or not
      pool.query(insertQueryTraderTable, function (err, data) {
        if (err) {
          console.log("Error in Trader Table Insertion Part.");
          res.status(500);
          return res.send("updated failed");
        }
        if (data.affectedRows == 1) {
          let insertStringLoginTable =
            "INSERT INTO ?? ( ?? , ?? , ?? ) VALUES ( ? , ? , ? )";
          let insertQueryLoginTable;

          insertQueryLoginTable = mysql.format(insertStringLoginTable, [
            database.table.login,
            database.login.email,
            database.login.password,
            database.login.login_id,
            email,
            password,
            id
          ]);

          //querying whether the user exists in the Login table or not
          pool.query(insertQueryLoginTable, function (err, data) {
            if (err) {
              console.log("Error in Login Table Insertion Part.");
              res.status(500);
              return res.send("updated failed");
            }
            if (data.affectedRows == 1) {
              res.status(200);
              return res.send("inserted");
            } else {
              res.status(500);
              return res.send("server error");
            }
          });
        } else {
          res.status(500);
          return res.send("server error");
        }
      });
    },
    (err) => {
      res.status(500);
      return res.send("server error");
    }
  );
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
