const { Country } = require("../db");

const getById = async (id) => {
    const country = Country.findByPk(id)
    return country
};

module.exports = getById