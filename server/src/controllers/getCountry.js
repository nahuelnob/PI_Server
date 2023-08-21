const axios = require("axios");

const URL_BASE = "http://localhost:5000/countries";

const getCountry = async () => {
  const { data } = await axios(`${URL_BASE}`);

  const country = data.map((country) => {
    const {
      fifa,
      cca3,
      name, 
      translations,
      flags,
      continents,
      capital,
      subregion,
      area,
      population,
    } = country;

    const formattedCapital = Array.isArray(capital) ? capital[0] : capital;
    const formattedContinent = Array.isArray(continents) ? continents[0] : continents;

    return {
      id: fifa || cca3,
      name: translations.spa.common,
      flags: flags.png,
      continent: formattedContinent,
      capital: formattedCapital,
      subRegion:subregion,
      area,
      population,
    };
  });

  return country;
};

module.exports = getCountry;
