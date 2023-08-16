const { Country } = require("../db");

const bulkCountries = async (countries) => {
  const nwCountry = await Country.bulkCreate(countries);
  return nwCountry;
};

module.exports = bulkCountries;
