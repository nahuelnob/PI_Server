const { Country } = require("../db");

const getByName = async (name) => {
  const country = await Country.findOne({ where: { name: name } });
  return country;
};

module.exports = getByName;
