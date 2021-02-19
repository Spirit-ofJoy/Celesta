/**
 * Returns Map Api searchable strings from Mysql
 * @param {string} stringified_json_array 
 */
var returnSearchableAddress = (stringified_json_array) => {
    json_address = JSON.parse(stringified_json_array);
    answer = "";
    for(i=0;i<json_address.length;i++) {
        if(json_address[i] != "") {
            answer = answer + json_address[i] + ",";
        }
    }
    if(json_address[json_address.length -1] != "India") {
        answer = answer +", India";
    }
    return answer;
}
 //let a = `["Near Bank of Baroda","Sanjay Palace", "","","Agra","Uttar Pradesh","","India"]`;
 //console.log(returnSearchableAddress(a));
module.exports = {
    returnSearchableAddress:returnSearchableAddress
}