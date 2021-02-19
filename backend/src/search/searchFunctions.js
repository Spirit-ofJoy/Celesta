/**
 * This has to be used when the user searches through brand and Item names.
 *  WORKS FOR 2 SEARCH QUERY TYPES! YAYYY!!
 * @param {string} from_items_list stringified JSON of results from the items list
 * @param {string} from_distributors_list stringified JSON of results from the distributors list
 */
var makeReturnableItemJSONFromBrandSearch = (from_items_list,from_distributors_list) => {
  items_list_json = JSON.parse(from_items_list);
  distributors_items_list_json = JSON.parse(from_distributors_list);
  answer = [];
  temporary = {
    item_id:"",
    description:"",
    tags:"",
    brand:"",
    name:"",
    distributor_name:"",
    distributor_id:"",
    price_per_carton:"",
    no_of_units:"",
    location:""
  }
  distributors_items_list_length = distributors_items_list_json.length;
  for(i=0;i<distributors_items_list_length;i++) {
    for_one_distributor = JSON.parse(distributors_items_list_json[i].items);
    for(j=0;j<for_one_distributor.length;j++) {
      for(k=0;k<items_list_json.length;k++) {
        if(for_one_distributor[j][0] == items_list_json[k].item_id){
          temporary.item_id = items_list_json[k].item_id;
          temporary.description = items_list_json[k].description;
          temporary.tags = items_list_json[k].tags;
          temporary.brand = items_list_json[k].brand;
          temporary.name = items_list_json[k].name;
          temporary.distributor_id = distributors_items_list_json[i].distributor_id;
          temporary.price_per_carton = for_one_distributor[j][1];
          temporary.no_of_units = for_one_distributor[j][2];
          temporary.location = distributors_items_list_json[i].location;
          temporary.distributor_name = distributors_items_list_json[i].name;
          answer.push(temporary);
          answer = JSON.stringify(answer);
          answer = JSON.parse(answer);
        }
      }
    }
  }
  answer = JSON.stringify(answer);
  return answer;
}












module.exports = {
  makeReturnableItemJSONFromBrandSearch:makeReturnableItemJSONFromBrandSearch
}

/*
let a = '[["abc","asd"],["abc","asd"],["abc","asd"],["abc","asd"],["abc","asd"]]';

console.log(getItemsWhereBrandIsGivenMysqlFormat(a));/*
console.log(getPricesOfTheSearchItems(a));
*/



