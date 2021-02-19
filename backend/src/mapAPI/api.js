const fetch = require("node-fetch");
const mapAPI = require("./../../../authorise/api.json").mapquest;

//---------------------------These functions return the URI string for api. Use fetch to get data--------------------------------//
/**
 * 
 * @param {string} api_key map quest api key
 * @param {string} address 
 */
function coordinatesFromAddressURLString(api_key, address) {
  var url = `https://www.mapquestapi.com/geocoding/v1/address?key=${api_key}&location=${address}`;
  url = encodeURI(url);
  return url;
}
/**
 * Returns the GET request URL that will give the address of the Coordinate
 * @param {string} api_key map quest api key
 * @param {string} latitude 
 * @param {string} longitude 
 */
function addressFromCoordinatesURLString(api_key, latitude, longitude) {
  var url = `http://www.mapquestapi.com/geocoding/v1/reverse?key=${api_key}&location=${latitude},${longitude}`;
  url = encodeURI(url);
  return url;
}

/**
 * Returns the GET request URL that will give the road distance between 2 coordinates 
 * @param {string} api_key map quest api key
 * @param {string} from from location coordinates in the form ` latitude, longitude`
 * @param {string} to to location coordinates in the form ` latitude, longitude`
 */
function distanceBetweenURLString(api_key, from, to) {
  var url = `http://www.mapquestapi.com/directions/v2/route?key=${api_key}&from=${from}&to=${to}&unit=k&doReverseGeocode=false`;
  url = encodeURI(url);
  return url;
}

//---------------------------These functions return the actual result asked for using api. Use fetch to get data--------------------------------//


/**
 * This is an async function that returns the latitude and longitude of the address provided the string parameter
 * @param {string} address address of the location.
 * @returns {json} location in json. It can be JSON parsed and the coordinates can be accessed using `latitude` and `longitude` json objects.
 */
const getCoordinatesFromAddress = async (address) => {
  try {
    const response = await fetch(
      coordinatesFromAddressURLString(mapAPI, address)
    );
    const json = await response.json();
    var result = await {
      latitude: json.results[0].locations[0].latLng.lat,
      longitude: json.results[0].locations[0].latLng.lng,
    };
    var answer = result.latitude + "," + result.longitude;
    //console.log(JSON.stringify(result));
    return answer;
  } catch (error) {
    console.log(
      "Error With the API Call. Check the Map API File. getCoordinatesFromAddress fn"
    );
  }
};

/**
 * This is an async function that takes the latitude and longitude and returns address provided the coordinates
 * @param {string} latitude
 * @param {string} longitude
 */
const getAddressFromCoordinates = async (latitude, longitude) => {
  try {
    const response = await fetch(
      addressFromCoordinatesURLString(mapAPI, latitude, longitude)
    );
    const json = await response.json();
    var result = await {
      street: json.results[0].locations[0].street,
      neighborhood: json.results[0].locations[0].adminArea6,
      city: json.results[0].locations[0].adminArea5,
      postal: json.results[0].locations[0].postalCode,
      state: json.results[0].locations[0].adminArea3,
      country: json.results[0].locations[0].adminArea1, //Country doesn't have the full Name, lik `IN` for India.
    };
    //console.log(JSON.stringify(result));
    return JSON.stringify(result);
  } catch (error) {
    console.log(
      "Error With the API Call. Check the Map API File. getAddressFromCoordinates fn"
    );
  }
};

/**
 * This is an async function that returns the road distance between 2 coordinates
 * @param {string} address address of the location.
 * @param {string} from from location coordinates in the form `latitude, longitude`
 * @param {string} to to location coordinates in the form `latitude, longitude`
 * @returns {json} distance in json. It can be JSON parsed and the coordinates can be accessed using `distance`
 */
const getDistanceBetween = async (from,to) => {
  try {
    const response = await fetch(distanceBetweenURLString(mapAPI, from, to));
    const json = await response.json();
    var result = await {
      distance: json.route.distance,
    };
    //console.log(JSON.stringify(result));
    return JSON.stringify(result);
  } catch (error) {
    console.log(
      "Error With the API Call. Check the Map API File. getCoordinatesFromAddress fn"
    );
  }
};

module.exports = {
  coordinatesFromAddressURLString:coordinatesFromAddressURLString,
  addressFromCoordinatesURLString:addressFromCoordinatesURLString,
  distanceBetweenURLString:distanceBetweenURLString,
  getCoordinatesFromAddress:getCoordinatesFromAddress,
  getAddressFromCoordinates:getAddressFromCoordinates,
  getDistanceBetween:getDistanceBetween
}




/*
//----------------------------TESTING SECTION-----------------------------//
var text = getCoordinatesFromAddress("Agra, Uttar Pradesh, India").then(
    (text) => {
      console.log(text);
    },
    (err) => {
      // Deal with the fact the chain failed
    }
  );
  

  var text = getAddressFromCoordinates(27.175255,78.009816).then(
    (text) => {
      console.log(text);
    },
    (err) => {
      // Deal with the fact the chain failed
    }
  );
  
  var text = getDistanceBetween("27.175255,78.009816","27.325255,78.199816").then(
    (text) => {
      console.log(text);
    },
    (err) => {
      // Deal with the fact the chain failed
    }
  );
  */