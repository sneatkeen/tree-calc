const axios = require('axios');

const apiUrl = process.env.DISTANCE24_END_POINT;

module.exports = async (cities) => {
  const response = await axios.get(`${apiUrl}?stops=${cities.join('|')}`);
  return response.data.distance;
};
