const { Country } = require("../db");
const {Op} = require('sequelize')

const getByName = async (name) => {
  const country = await Country.findOne({ where: {name: {[Op.iLike]: `%${name}%` || `%%${name}`} } });
  return country;
};

module.exports = getByName;
