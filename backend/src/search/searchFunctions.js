
//const database = require("../database.json");

/**
 * This function returns string that can be directly put into a mysql query
 * @param {*} mysql_result_json_array Stringify this before input
 */
var getItemsWhereBrandIsGivenMysqlFormat = (mysql_result_json_array) => {
  item_array = JSON.parse(mysql_result_json_array);
  length = item_array.length;
  result = [];

  for (i = 0; i < length; i++) {
    result.push(item_array[i][0]);//[0] is th item id
  }
  send = JSON.stringify(result);
  var res = send.replace("[", "(");
  res = res.replace("]", ")");
  return res;
};

/**
 * This function returns stringified json that returns the price in an array that can be used after json parse
 * @param {*} mysql_result_json_array Stringify this before input
 */
var getPricesOfTheSearchItems = (mysql_result_json_array) => {
  item_array = JSON.parse(mysql_result_json_array);
  length = item_array.length;
  result = [];

  for (i = 0; i < length; i++) {
    result.push(item_array[i][1]);//[1] is the item price
  }
  send = JSON.stringify(result);
  return send;
};

module.exports = {
    getItemsWhereBrandIsGivenMysqlFormat:getItemsWhereBrandIsGivenMysqlFormat,
    getPricesOfTheSearchItems:getPricesOfTheSearchItems
}

let a = '[["abc","asd"],["abc","asd"],["abc","asd"],["abc","asd"],["abc","asd"]]';

console.log(getItemsWhereBrandIsGivenMysqlFormat(a));/*
console.log(getPricesOfTheSearchItems(a));
*/