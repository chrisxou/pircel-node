const houses = require("../data/housesData");

const getAllHouses = async function () {
  return houses;
};

const getHouseByName = async function (name) {
  return houses.filter(function (house) {
    return house.name.toLowerCase().includes(name.toLowerCase());
  });
};

// Export the functions using ES6 exports
module.exports = { getAllHouses, getHouseByName };
