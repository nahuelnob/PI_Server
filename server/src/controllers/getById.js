const { Country, Activity } = require("../db");

const getById = async (id) => {
    const country = await Country.findByPk(id, {include: {
        model: Activity,
        attributes: ['name'],
        through: {
            attributes: []
        }
    }})
    return country
};

module.exports = getById