//It will contain most of the logic for fetching the data from each API endpoint.

const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.ipify.org?format=json', function (error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    //parse and extract the IP address using JSON and then pass
    //that through to the callback (as the second argument) if there is no error
    callback(null,JSON.parse(body).ip);
    //It worked! Returned IP: 174.94.50.58
  });
};


module.exports = { fetchMyIP };