const axios = require('axios');
const camelToUnderscore = require('../lib/camelToUnderscore');

/* Please make sure you assign this env variables in your .env */
const apiKey = process.env.TEQUILA_API_KEY;
const apiUrl = process.env.TEQUILA_END_POINT;

module.exports = async (req) => {
  let query = `apikey=${apiKey}`;
  
  Object.keys(req).forEach((key) => {
    if (req[key]) query += `&${camelToUnderscore(key)}=${req[key]}`
  });

  const response = await axios.get(`${apiUrl}?${query}`);

  return response;
}
