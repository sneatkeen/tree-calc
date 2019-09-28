const distanceCalc = require('../service/distanceCalc');
const treeCalc = require('../lib/treeCalc');

module.exports = async ({ data }) => {
  const output = await Promise.all(data.map(async (flight) => {
    const tree_count = await flight.route.reduce(async (a, b) => {
      const distance = await distanceCalc([b.cityFrom, b.cityTo]);

      return a + treeCalc(distance, b.equipment);
    }, 0);

    return {...flight, tree_count }
  }));
  
  return output;
};
